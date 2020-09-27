import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import HeadComponent from './HeadComponent'
import CarouselComponent from './CarouselComponent'
import LayoutComponent from './LayoutComponent';
import SearchTextInput from './SearchTextInput'

import HotCate from './HotCate'
import Category from './Category'
import MenuExample from './MenuExample';
import Map from './Map'

class CookBook extends React.Component {

  render() {

    let Page2 = (
      <div>
        <Category></Category>
        <MenuExample></MenuExample>
      </div>
    )

    return (
      <div>

        <HeadComponent></HeadComponent>
        <CarouselComponent></CarouselComponent>
        <SearchTextInput></SearchTextInput>


        
        <LayoutComponent>
          <HotCate data-position="page1"></HotCate>
          <Page2 data-position="page2"></Page2>
          <Map data-position="page3"></Map>
        </LayoutComponent>
      </div>
    )
  }



}


export default CookBook