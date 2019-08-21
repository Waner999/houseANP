import React, { Component } from 'react'
import { Card, WingBlank, WhiteSpace, Flex, Button } from 'antd-mobile';

export default class Message extends Component {
    render() {
        return (
            <Flex align='center' justify='center' style={{ height: '100%' }}>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card style={{ height: 300, width: 350 }}>
                        <Card.Body>
                            <Flex direction='column'>
                                <div style={{ textAlign: 'center' }}><img style={{ height: 100, width: 100 }} src={require('../../../static/images/header.jpg')} /></div>
                                <p>置业顾问:<span style={{color:'pink'}}>Waner</span></p>
                                <p>专业服务诚信做人诚心做事!</p>
                                <Button style={{ color: '#fff', background: 'pink',width:250 }}>我要聊天</Button>
                            </Flex>
                        </Card.Body>

                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </Flex>
        )
    }
}
