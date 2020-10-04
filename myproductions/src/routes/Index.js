import Edit from '../pages/admin/productions/Edit'
import List from '../pages/admin/productions/List'
import Index from '../pages/admin/dashboard/Index'
import Login from '../pages/Login'
import PageNotFound from '../pages/PageNotFound'
import Notify from '../pages/admin/notify/Notify'
import 'antd/dist/antd.css';
import React from 'react'
import {
    AreaChartOutlined,
    HddOutlined,
    GroupOutlined,

} from '@ant-design/icons';





export const mainRouter = [{
    path: "/login",
    component: Login,
    exact: true
},
{
    path: "/404",
    component: PageNotFound,
    exact: true
}
]


export const adminRouter = [{
    path: "/admin/dashboard",
    component: Index,
    exact: true,
    isShow: true,
    title: "看板",
    icon: <AreaChartOutlined />
},
{
    path: "/admin/products",
    component: List,
    exact: true,
    isShow: true,
    title: "商品管理",
    icon: <HddOutlined />
},
{
    path: "/admin/products/edit",
    component: Edit,
    //因为需要在后面传入参数，所以这里不需要精确匹配
    exact: false,
    isShow: true,
    title: "商品编辑",
    icon: <GroupOutlined />
},
{
    path: "/404",
    component: PageNotFound,
    exact: true,
    isShow: false,
    title: "没有找到"
},
{
    path: "/admin/notify",
    component: Notify,
    exact: true,
    isShow: false,
    title: "通知"
}

]


