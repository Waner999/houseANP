import React, { Component } from 'react'
import { Flex, WhiteSpace } from 'antd-mobile'
import { IP } from '../apis/apis'

export default class GetHouselist extends Component {
    render() {
        let { item } = this.props
        return (
            <Flex key={item.id} justify='between'>
                <div style={{marginBottom:5}}>
                <img style={{ width: 150, height: 100 }} src={IP + item.imgs} />

                </div>
                <WhiteSpace />

                <div style={{ textAlign: 'start' }}>
                    <h3 style={{ margin: 0 }}>{item.name}</h3>
                    <p>{item.area} &nbsp; {item.range} </p>
                    <p>{item.type} &nbsp; {item.point}平</p>
                </div>
                <h4 style={{color:'red'}}>{item.price}/平</h4>
            </Flex>
        )






    }
}
