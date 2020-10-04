import React from 'react'
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import '../assets/css/login.css'
import {setToken} from '../utils/auth'
import {loginApi} from '../service/auth'



function Login(props) {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    
    
    const onFinish = values => {
        
        loginApi({
            userName:values.username,
            password:values.password
        }).then(res=>{

            console.log(res)

            if(res.code=="success"){
                message.success("登录成功")
                //登录成功后会从服务器上得到token
                setToken(res.token);
                console.log(res.token)
                props.history.push('/admin')
            }else{
                message.info(res.message)
              
            }
            
        }).catch(err=>{
            message.error(err.message)
            console.log("ERR:"+err)
        })

      
    };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };



    return (


        <Card title="管理后台" className="login-form" >

            <Form

                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                  
                    name="username" 
                    place
                    rules={[{ required: true, message: '用户名不能为空' }]}
                >
                    <Input placeholder="请输入您的用户名" />
                </Form.Item>

                <Form.Item
                   
                    name="password"
                    rules={[{ required: true, message: '=密码不能为空' }]}
                >
                    <Input.Password placeholder="请输入您的密码"/>
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
        </Button>
                </Form.Item>
            </Form>

        </Card>


    )
}

export default Login
