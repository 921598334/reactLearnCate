import React from 'react';
import { connect } from 'react-redux'
import 'antd-mobile/dist/antd-mobile.css';
import { Grid } from 'antd-mobile';
import '../assets/css/style.css'
import get from '../utils/http'



class HotCateTmp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentTimu: 0,
            hostlist: []
        }
    }


    async componentWillMount() {
        //let result = await get("http://localhost:9000/hotcat");

        let result = await get("http://192.168.50.142:8080/test");


        

        console.log("result:")
        console.log(result)

        let data = result.map((value) => ({
            icon: value.img,
            title: value.title
        }))

        this.setState({
            hostlist: data
        })
    }

    render() {
        console.log("开始渲染");

        if (this.state.hostlist.length > 0) {
            return (

                <div>
                    <div className="sub-title">特色菜品</div>
                    <Grid data={this.state.hostlist}
                        hasLine={false}
                        columnNum={4}
                        renderItem={dataItem => (
                            <div style={{ padding: '12.5px' }}>
                                <img src={dataItem.icon} style={{ width: '70px', height: '70px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '10px', }}>
                                    <span>{dataItem.title}</span>
                                </div>
                            </div>
                        )}
                    />


                    <div className="sub-title">精品好菜</div>
                    <Grid data={this.props.bannerDataTmp.slice(5, 15)}
                        hasLine={false}
                        columnNum={3}
                        renderItem={dataItem => (
                            <div style={{ padding: '12.5px' }}>
                                <img src={dataItem.img} style={{ width: '100px', height: '100px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '14px', }}>
                                    <span>{dataItem.title}</span>
                                </div>
                            </div>
                        )}
                    />

                </div>

            )
        } else {
            return (
                <div>loading</div>
            )
        }
    }
}




//将state映射到props函数
function mapStateToProps(state) {
    return {
        bannerDataTmp: state.bannerData,

    }
}



//将上面的这2个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件。
const HotCate = connect(
    mapStateToProps
)(HotCateTmp)




export default HotCate