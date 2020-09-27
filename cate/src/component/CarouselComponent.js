import { Carousel, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import React from 'react';
import '../assets/css/style.css'
import carouse1 from '../assets/img/ad1.jpg'
import carouse2 from '../assets/img/ad2.jpg'
import carouse3 from '../assets/img/ad3.jpg'
import { connect } from 'react-redux'
import store from '../store/data';

class CarouselComponentTmp extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 175,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    render() {

        this.myData = this.props.bannerDataTmp.slice(0, 5)
     
        
        return (
            <WingBlank>
                <Carousel className="space-carousel"
                    frameOverflow="visible"
                    cellSpacing={10}
                    slideWidth={0.8}
                    autoplay={true}
                    infinite={true}
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => this.setState({ slideIndex: index })}
                >

                    {
                        this.myData.map((val, index) => {

                            return (

                                <a
                                    key={val.id}
                                    href=""
                                    style={{
                                        display: 'block',
                                        position: 'relative',
                                        top: this.state.slideIndex === index ? -10 : 0,
                                        height: this.state.imgHeight,
                                        boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                    }}
                                >


                                    <img

                                        src={val.img}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {

                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />


                                </a>
                            )
                        })
                    }


                </Carousel>
            </WingBlank>
        );
    }




}






//将state映射到props函数
function mapStateToProps(state) {
    return {
        bannerDataTmp: state.bannerData,

    }
}



//将上面的这2个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件。
const CarouselComponent = connect(
    mapStateToProps
)(CarouselComponentTmp)




export default CarouselComponent;