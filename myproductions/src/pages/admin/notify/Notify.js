import React, { Component } from 'react'
import { List, Typography, Divider ,Button} from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];


export default class Notify extends Component {
    render() {
        return (
            <div>
                <Divider orientation="left">Default Size</Divider>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item style={{}}>
                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                            <Button style={{ float: "right" }}>已读</Button>
                        </List.Item>
                    )}
                />
               
            </div>
        )
    }
}
