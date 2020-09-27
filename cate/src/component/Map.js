
import 'antd-mobile/dist/antd-mobile.css';
import React from 'react';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div style={{width:"100%",height:"100%"}}>
                
                <iframe src="/map.html" style={{width:"100%",height:"100%"}}></iframe>

            </div>
        );
    }
}

export default Map;