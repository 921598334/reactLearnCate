import React from 'react';
import LayoutComponent from '../component/LayoutComponent'
import CookBook from '../component/CookBook'
import 'antd-mobile/dist/antd-mobile.css';
import HotCate from '../component/HotCate'


class App1 extends React.Component {

  render() {
    console.log(this.props)
    //计数，通过stroe的state传给props,直接通过props就可以将state的数据获取
    const value = this.props.value;
    //将修改数据的事件或者方法传入到props
    const onAddClick = this.props.onAddClick;
    //等同于vuex的mapMutation mapState
    return (
      <div>

        <CookBook></CookBook>
       {/* <LayoutComponent></LayoutComponent> */}
      
      {/* <HotCate></HotCate> */}

      </div>
    )
  }



}



export default App1