import React from 'react'
import { Layout, Menu, Breadcrumb, Dropdown,message } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../../statics/css/myFrameCss.css'
import logBack from '../img/logoBakc.png'
import { adminRouter } from '../../routes/Index'
import { withRouter } from 'react-router-dom'
import {
    DownOutlined,
    SmileOutlined
} from '@ant-design/icons';
import './frame.css'
import {clearToken} from '../../utils/auth'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


//过滤出需要显示的路由
const routers = adminRouter.filter(route => route.isShow)







function MyLayout(props) {



    const menu = (
        <Menu onClick={(p)=>{
            if(p.key==="logout"){
                clearToken()
                props.history.push('./login')
            }else{
                message.info(p.key);
            }
        }}>
            <Menu.Item key="notify">
                <a >
                    通知中心
                </a>
            </Menu.Item>
            <Menu.Item key="setting">
                <a >
                    设置
            </a>
            </Menu.Item>
            <Menu.Item danger key="logout">
                <a >
                    推出
            </a>
            </Menu.Item>
    
        </Menu>
    );
    





    

    return (
        <div>
            <Layout>
                <Header  >
                    <div className="logo" style={{ width: "100%" }}>

                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ width: "100%" }}  >
                            <img src={logBack} style={{ height: "64px",float:"left" }} />

                            <div style={{float:"right"}} >
                                <SmileOutlined />
                                <Dropdown overlay={menu}>

                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        Hover me <DownOutlined />
                                    </a>
                                </Dropdown>
                            </div>


                        </Menu>
                    </div>

                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >

                                {routers.map(route => {
                                    return (
                                        //由于这里有路由操作，所以需要导入
                                        <Menu.Item key={route.path} onClick={p => props.history.push(p.key)}>
                                            {route.icon}
                                            {route.title}
                                        </Menu.Item>
                                    )
                                })}


                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>{props.children}</Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>

        </div>
    )
}

export default withRouter(MyLayout) 
