import React from 'react';
import { connect } from 'react-redux'
import { Popover, NavBar, Icon, Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import Axios from 'axios';

class DatiCounter extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentTimu: 0,
            
        }
    }

    render() {
        
        let timuList = this.props.timuList;
        let current = this.state.currentTimu;
 

        if(timuList.length>0){

            let option = JSON.parse(timuList[current].options);

            return (
                <div>
                    <h1>题目:{timuList[current].quiz}</h1>
                    
                    <div className="options">
                        题目列表
                        {
                            
                            option.map((item,index)=>{

                                if(index==1){
                                    return(

                                        <div onClick={this.answerEvent}>
                                            {index+1}:{item}
                                        </div>
                                    )
                                }else{
                                    return(

                                        <div onClick={this.answerEvent}>
                                            {index+1}:{item}
                                        </div>
                                    )
                                }
                            })

                        }
                    </div>
                </div>
            )

        }else{

            return (
                <div>
                    <h1>Loading......</h1>
   
                </div>
            )

        }

        
    }


    //点击答案回答问题后
    answerEvent=()=>{
        this.setState({
            currentTimu:++this.state.currentTimu
        })
    }

    componentWillMount() {
        console.log("componentWillMount开始执行");
        this.props.getTim();
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps开始执行");
        console.log(this.props);

    }   
}



//将state映射到props函数
function mapStateToProps(state) {
    return {
        value: state.num,
        timuList:state.timuList
    }
}

const addAction = {
    type: 'add'
}

const host = 'http://localhost:8080';

//将修改state数据的方法，映射到props,默认会传入store里的dispach方法
function mapDispatchToProps(dispatch) {
    
    return {
        getTim: async () => {

            await Axios({
                method: 'get',
                url: host+'/find',
                params: {
                  page: 1,
                  size: 10
                }
              }).then(function (response) {
          
                console.log('异步请求数据结束');
                console.log(response.data);
                dispatch({ type: "setTimu", content: response.data });
              });

        }
    }
}

//将上面的这2个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件。
const Dati = connect(
    mapStateToProps,
    mapDispatchToProps
)(DatiCounter)


export default Dati