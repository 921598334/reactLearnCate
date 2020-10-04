import React, { useEffect, useState } from 'react'
import { Card, Table, Button, Popconfirm, message, Pagination } from 'antd'
import { listApi, delApi, modifyApi } from '../../../service/production'



function cancel(e) {
    console.log(e);
    // message.error('Click on No');
}



class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            total: 0,
            page:1,
            per:2
        }
    }



    componentWillMount() {

        console.log("开始挂在")

        listApi(this.state.page,this.state.per).then(res => {

            console.log(res)
            this.setState({ dataSource: res.products })
            this.setState({ totals: res.totalCount })
            console.log("读取数据完毕")

        }).catch(err => {

            console.log("出现异常")
            let str = err + ""
            console.log(str.indexOf("401") == -1)

            message.error("登录信息过期,跳转到登录界面")
            this.props.history.push("/login")

        })

    }




    //选择的页面改变时
    loadData = page => {

        this.setState({page:page})

        //不知道为什么应该只返回当前也的数据，但是现在是全部返回，分页控件需要传入的也是全部数据
        listApi(this.state.page,this.state.per).then(res => {

            console.log(res)

            this.setState({ dataSource: res.products })
            this.setState({ totals: res.totalCount })
            console.log("读取数据完毕")

        }).catch(err => {

            console.log("出现异常,跳转到登录界面")
            this.props.history.push("/login")

        })

    }


    columns = [
        {
            title: '序号',
            key: '_id',
            //和数据中的内容所对应
            dataIndex: '_id',
            align: "center",
        },
        {
            title: '名字',
            dataIndex: 'name',
            key: 'name',
            align: "center",
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            align: "center",
        },
       
        {
            title: '是否在售',
            dataIndex: 'onSale',
            key: 'onSale',
            align: "center",
            render: (txt, record, index) => (record.onSale ? "在售" : "售罄")
        },
        {
            title: '操作',
            align: "center",
            render: (txt, record, index) => {

                return (
                    <div>
                        <Button style={{ margin: "0 1rem" }} type="primary" onClick={() => {

                            console.log("点击了：" + record._id)
                            //可以通过这种方式来传入参数
                            this.props.history.push({ pathname: "/admin/products/edit", id: record._id })

                        }}>修改</Button>

                        <Popconfirm
                            title="你确定要删除吗?"

                            // 一定记住onCofirm一定得使用箭头函数，不然会导致全部表格表单得数据加载
                            onConfirm={() => {

                                delApi(record._id).then(res => {
                                    console.log("删除完成")
                                    //需要重新从数据库中得到数据，而不能直接做让页面跳转到当前页面
                                    this.loadData(1)
                                })

                            }}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="danger">删除</Button>
                        </Popconfirm>,



                        <Button style={{ margin: "0 1rem" }} type="primary" onClick={() => {
                            console.log("修改上下价")
                           
                            //可以通过这种方式来传入参数
                            modifyApi(record._id, { onSale: !record.onSale }).then(res => {
                                this.loadData(1)
                            })


                        }}>{record.onSale ? "下架" : "上价"}</Button>

                    </div>

                )
            }
        },
    ];



    render() {
        console.log("开始渲染")
        return (
            <div>
                <Card title="商品列表" extra={<a onClick={() => this.props.history.push('/admin/products/edit')}>新增</a>} bordered={false} style={{ width: '100%' }}>
                    <Table rowKey="_id" dataSource={this.state.dataSource} columns={this.columns} pagination={{ total: this.state.total, defaultPageSize: 2, onChange: this.loadData }} />
                </Card>
            </div>
        )
    }


}







export default List

