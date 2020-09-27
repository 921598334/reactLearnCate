/* eslint no-nested-ternary:0 */
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../assets/css/menu.css'
import React from 'react';
import { connect } from 'react-redux'





//将state映射到props函数
function mapStateToProps(state) {
    return {
        category: state.category,
        menuData:state.menuData,
    }
}



class MenuTmp extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            initData: '',
            show: false,
           
        };
    }


    onChange = (value) => {
        let label = '';
        this.props.menuData.forEach((dataItem) => {
            if (dataItem.value === value[0]) {
                label = dataItem.label;
                if (dataItem.children && value[1]) {
                    dataItem.children.forEach((cItem) => {
                        if (cItem.value === value[1]) {
                            label += ` ${cItem.label}`;
                        }
                    });
                }
            }
        });
        console.log(label);
    }
    handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
            show: !this.state.show,
        });
        // mock for async data loading
        if (!this.state.initData) {
            setTimeout(() => {
                this.setState({
                    initData: this.props.menuData,
                });
            }, 500);
        }
    }

    onMaskClick = () => {
        this.setState({
            show: false,
        });
    }

    render() {
        const { initData, show } = this.state;
        const menuEl = (
            <Menu
                className="foo-menu"
                data={this.props.menuData}
                value={['1', '3']}
                onChange={this.onChange}
                height={document.documentElement.clientHeight * 0.95}
            />
        );
        const loadingEl = (
            <div style={{ width: '100%', height: document.documentElement.clientHeight * 0.95, display: 'flex', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </div>
        );
        return (
            <div className={show ? 'menu-active' : ''}>
                <div>
                    <NavBar
                        leftContent="点击查看"
                        mode="light"
                        icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg" className="am-icon am-icon-md" alt="" />}
                        onLeftClick={this.handleClick}
                        className="top-nav-bar"
                    >
                        {this.props.category+"菜单"}
            </NavBar>
                </div>
                {show ? initData ? menuEl : loadingEl : null}
                {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
            </div>
        );
    }
}





const MenuExample = connect(
    mapStateToProps,
  
)(MenuTmp)



export default MenuExample