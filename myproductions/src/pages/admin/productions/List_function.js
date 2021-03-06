import React ,{useEffect,useState} from 'react'
import { Card, Table, Button, Popconfirm,message,Pagination } from 'antd'
import {listApi} from '../../../service/production'

function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }





function List(props) {

    const columns = [
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
            title: '操作',
            align: "center",
            render: (txt, record, index) => {


             

                return (
                    <div>
                        <Button style={{ margin: "0 1rem" }} type="primary" onClick={()=>{

                            console.log("点击了："+record._id)
                            //可以通过这种方式来传入参数
                            props.history.push({ pathname: "/admin/products/edit", id:  record._id  })

                        }}>修改</Button>

                        <Popconfirm
                            title="你确定要删除吗?"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="danger">删除</Button>
                        </Popconfirm>,
                        
                    </div>

                )
            }
        },
    ];


    
    const [dataSource,setDataSource] = useState([])
    const [total,setTotal] = useState(0)


    const [isInit,setIsInit] = useState(true)
    //会一直被调用，如果希望只执行一次，可以用上面的开关变量来设置
    useEffect(()=>{
        if (isInit) {

            listApi().then(res=>{
                console.log(res)
                setDataSource(res.products)
                setTotal(res.totals)

               
            },)

            setIsInit(false);
        } 
    })



    //选择的页面改变时
    const loadData=page=>{
        console.log(page)
        listApi(page).then(res=>{
            console.log(res)
            setDataSource(res.products)
            setTotal(res.totals)
        })
       
    }


    return (
        <div>
            <Card title="商品列表" extra={<a onClick={()=>props.history.push('/admin/products/edit')}>新增</a>} bordered={false} style={{ width: '100%' }}>
                <Table rowKey="_id" dataSource={dataSource} columns={columns} pagination={{ total:total,defaultPageSize:2,onChange:loadData }}/>   
            </Card>
        </div>
    )
}

export default List

