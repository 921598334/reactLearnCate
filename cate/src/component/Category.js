
import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import '../assets/css/style.css'
import { connect } from 'react-redux'
import { SegmentedControl, WingBlank } from 'antd-mobile';




//将state映射到props函数
function mapStateToProps(state) {
    return {
        category: state.category,
    }
}



//将修改state数据的方法，映射到props,默认会传入store里的dispach方法
function mapDispatchToProps(dispatch) {

    return {
        setCategory: (e) => {
            dispatch({ type: "setCategory", category: e });
        }
    }
}



class SegmentedControlTmp extends React.Component {

    constructor(props) {
        super(props)
       
        this.props.setCategory("菜品")

        this.state = {
            status: 0
        }
    }



    onChange = (e) => {
        console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);

        if (e.nativeEvent.selectedSegmentIndex == 0) {

            this.props.setCategory("菜品")

            this.setState({
                status: 0
            })
        } else {
            this.props.setCategory("食材")
           
            this.setState({
                status: 1
            })
        }

    }
    onValueChange = (value) => {
        console.log(value);
    }
    render() {
        return (


            <WingBlank size="lg" className="sc-example">

                <SegmentedControl values={['菜品', '食材']}
                    onChange={this.onChange}
                    onValueChange={this.onValueChange} />

            </WingBlank>
        );
    }
}



//将上面的这2个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件。
const Category = connect(
    mapStateToProps,
    mapDispatchToProps
)(SegmentedControlTmp)


export default Category