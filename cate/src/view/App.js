import React from 'react';
import { connect } from 'react-redux'
import { Popover, NavBar, Icon,Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

class Counter extends React.Component {

  render() {
    console.log(this.props)
    //计数，通过stroe的state传给props,直接通过props就可以将state的数据获取
    const value = this.props.value;
    //将修改数据的事件或者方法传入到props
    const onAddClick = this.props.onAddClick;
    //等同于vuex的mapMutation mapState
    return (
      <div>
        <h1>计数的数量：{value}</h1>
        <Button onClick={onAddClick}>数字+1</Button>
        <Button onClick={this.props.onAddClick5}>数字+5</Button>

        <Button onClick={this.goDataPage}>随机答题</Button>


      </div>
    )
  }

  goDataPage=()=>{
    console.log("点击了随机答题");
    this.props.history.push("/dati");
  }

}

//将state映射到props函数
function mapStateToProps(state) {
  return {
    value: state.num

  }
}

const addAction = {
  type: 'add'
}
//将修改state数据的方法，映射到props,默认会传入store里的dispach方法
function mapDispatchToProps(dispatch) {
  return {
    onAddClick: () => { dispatch(addAction) },
    onAddClick5: () => { dispatch({ type: "addNum", num: 5 }) }
  }
}

//将上面的这2个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件。
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)


export default App