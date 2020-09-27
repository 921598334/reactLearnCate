import React from 'react';
import { NavBar} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

class HeaderComponent extends React.Component {

  render() {

    return (
      <div>
        

        <NavBar
          mode="dark"
          // leftContent="Back"
          // onLeftClick={() => console.log('onLeftClick')}
          // rightContent={[
          //   <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          //   <Icon key="1" type="ellipsis" />,
          // ]}
        >菜单头部</NavBar>


      </div>
    )
  }



}


export default HeaderComponent