import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import React from 'react';
import CookBook from './CookBook'
import HotCate from './HotCate'
import HeadComponent from './HeadComponent'
import CarouselComponent from './CarouselComponent'
import Category from './Category'
import MenuExample from './MenuExample';
import Map from '../component/Map'


let Page1, Page2, Page3;

class LayoutComponent extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props)

        this.state = {
            selectedTab: 'life',
            hidden: false,
            fullScreen: false,
          
        };


        
        this.props.children.forEach((item, index) => {
            if (item.props['data-position'] === 'page1') {
               
                Page1 = item
                console.log("page1插入")
            } else if (item.props['data-position'] === 'page2') {
                Page2 = item
                console.log("page2插入")
            } else if (item.props['data-position'] === 'page3') {
                Page3 = item
                console.log("page3插入")
            } 
        })
       
    }
    
    renderContent(pageText,Page1,Page2,Page3) {

            //判断条件上需要这样判读，如果用案例的代码来直接判断，那么会被执行多次
            if (this.state.selectedTab === "life" && pageText==="life") {

                console.log("点击了" + this.state.selectedTab + "的回掉")

                return (
                    <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>

                        {Page1}
                        {/* <HotCate></HotCate> */}
                    </div>
                )
            } else if (this.state.selectedTab === "ha" && pageText==="ha") {

                console.log("点击了" + this.state.selectedTab + "的回掉")

                return (
                    <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>

                        {Page2}

                        <Category></Category>
                        <MenuExample></MenuExample>
                    </div>
                )
            } else if (this.state.selectedTab === "friend" && pageText==="friend") {

                console.log("点击了" + this.state.selectedTab + "的回掉")

                return (
                    <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                        {Page3}

                        <Map></Map>
                    </div>
                )
            } else if (this.state.selectedTab === "us"  && pageText==="us") {

                console.log("点击了" + this.state.selectedTab + "的回掉")

                return (
                    <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>

                    </div>
                )
            }
    }

    render() {

       

        return (
            <div>

                <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}
                    >
                        <TabBar.Item
                            title="生活"
                            key="life"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selected={this.state.selectedTab === 'life'}

                            onPress={() => {
                                console.log("点击了life")
                                this.setState({
                                    selectedTab: 'life',
                                    
                                });
                            }}
                            data-seed="logId"
                        >
                            {

                                this.renderContent('life',Page1)

                            }
                        </TabBar.Item>


                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="哈哈哈哈"
                            key="ha"

                            selected={this.state.selectedTab === 'ha'}
                            onPress={() => {
                                console.log("点击了ha")
                                this.setState({
                                    selectedTab: 'ha',
                                   
                                });
                            }}
                            data-seed="logId1"
                        >
                            {this.renderContent('ha',Page2)}
                        </TabBar.Item>

                       

                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="朋友"
                            key="friend"

                            selected={this.state.selectedTab === 'friend'}
                            onPress={() => {
                                console.log("点击了friend")
                                this.setState({
                                    selectedTab: 'friend',
                                   
                                });
                            }}
                        >
                            {this.renderContent('friend',Page3)}
                        </TabBar.Item>

                        <TabBar.Item
                            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                            title="我们的"
                            key="us"
                            selected={this.state.selectedTab === 'us'}
                            onPress={() => {
                                console.log("点击了us")
                                this.setState({
                                    selectedTab: 'us',
                                   
                                });
                            }}
                        >
                            {this.renderContent('us',null)}
                        </TabBar.Item>

                    </TabBar>
                </div>

            </div>


        );
    }
}











export default LayoutComponent;