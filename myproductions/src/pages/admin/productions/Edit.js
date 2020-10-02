import React, { useState, useEffect } from 'react'
import { Card, Form, Button, Input, Checkbox, message } from 'antd'
import { createApi, getOneById, modifyApi } from '../../../service/production'


const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};



class Edit extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            name: "",
            price: ""
        }

    }



    componentWillMount() {

        console.log(this.props)
        //如果存在id，表明是要修改,否则就是添加
        if (this.props.location.id) {
            console.log("修改")
            getOneById(this.props.location.id).then(res => {

                this.setState({ name: res.name })
                this.setState({ price: res.price })

            })
        } else {
            console.log("添加")
        }

    }



    onFinish = values => {
        //修改和新增需要调用不同的接口
        if (this.props.location.id) {
            modifyApi(this.props.location.id, values).then(res => {
                console.log(res)
                message.success('修改成功');
                this.props.history.push('/admin/products')

            }).catch(err => {
                message.error(err.message)
            })
        } else {
            createApi(values).then(res => {
                console.log(res)
                message.success('添加成功');
                this.props.history.push('/admin/products')

            }).catch(err => {
                message.error(err.message)

            })
        }
        console.log('Success:', values);
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    render() {


        if (this.props.location.id) {
            //如果是修改

            console.log(this.state.name)
            console.log(this.state.price)

            //需要判断name和prise是否为空
            if(this.state.name!="" && this.state.price!=""){

                console.log("现在都不为空了")
                console.log(this.state.name+"_"+this.state.price)

                return (
                    <Card title="商品编辑">
    
                        <Form
                            name="basic"
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >
    
                            <Form.Item
                                label="商品名字"
                                name="name"
                                //initialValue赋予值后就无法修改了，所以需要一次性赋予值
                                initialValue={ this.state.name}
                                rules={[{ required: true, message: '请输入商品名称' }]}
                            >
                                <Input />
                            </Form.Item>
    
    
    
                            <Form.Item
                                label="商品价格"
                                name="price"
                                initialValue={this.state.price}
                                rules={[{ required: true, message: '请输入商品价格' }]}
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
            }else{
                return(<div>loding</div>)
            }

            


        } else {
            //如果是添加

            return (
                <Card title="商品编辑">

                    <Form

                        name="basic"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >

                        <Form.Item
                            label="商品名字"
                            name="name"
                            //initialValue赋予值后就无法修改了，所以需要一次性赋予值
                            
                            rules={[{ required: true, message: '请输入商品名称' }]}
                        >
                            <Input />
                        </Form.Item>



                        <Form.Item
                            label="商品价格"
                            name="price"
                            
                            rules={[{ required: true, message: '请输入商品价格' }]}
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


    }

}


export default Edit
