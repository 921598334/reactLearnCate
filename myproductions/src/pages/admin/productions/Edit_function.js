import React, { useState, useEffect } from 'react'
import { Card, Form, Button, Input, Checkbox, message } from 'antd'
import { createApi, getOneById ,modifyApi} from '../../../service/production'


const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};




function Edit(props) {


    const [test, setTest] = useState(0)
    const [data, setData] = useState([])
    const [isInit,setIsInit] = useState(true)
    //会一直被调用，如果希望只执行一次，可以用上面的开关变量来设置
    useEffect(()=>{
        if (isInit) {

            if (props.location.id) {
                getOneById(props.location.id).then(res => {
                    console.log(res)
                    setData(res)
                    setTest(111)
                    console.log("test:")
                    console.log(test)
                })
            }
            setIsInit(false);
        } 
    })

   



    const onFinish = values => {

        //修改和新增需要调用不同的接口
        if (props.location.id) {
            modifyApi(props.location.id,values).then(res => {
                console.log(res)
                message.success('修改成功');
                props.history.push('/admin/products')
    
            }).catch(err => {
                message.error(err.message)
    
            })
        }else{
            createApi(values).then(res => {
                console.log(res)
                message.success('添加成功');
                props.history.push('/admin/products')
    
            }).catch(err => {
                message.error(err.message)
    
            })
        }

        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    console.log("props:")
    console.log(props)

    return (


        <Card title="商品编辑">
            <Form

                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >

                <Form.Item
                    label="商品名字"
                    name="name"
                    initialValue={data.name}
                    rules={[{ required: true, message: '请输入商品名称' }]}
                   
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="商品价格"
                    name="price"
                    initialValue={data.price}
                    rules={[{ required: true, message: '请输入商品价格', type: 'string' },
                    // 自定义验证规则，其中getFieldValue可以获取其他控件对值，而value表示当前控件的值
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            console.log("当前价格：" + value)
                            if (value * 1 < 100 && value * 1 > 0) {
                                return Promise.resolve();
                            }
                            return Promise.reject('输入的价格不能超过100');
                        },
                    }),]}

                    
                >
                    <Input />
                </Form.Item>



                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        保存
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    )
}

export default Edit
