import React, { Component } from 'react'
import { Flex, InputItem, List ,WhiteSpace } from 'antd-mobile'
const Item = List.Item;

export default class My extends Component {
    componentDidMount(){
        //改变用户名
        if(localStorage.getItem('acc')){
             this.setState({
                 isLogin:localStorage.getItem('acc')
             })
            
        }
    }
    constructor() {
        super()

        this.state = {
            /* 个人中心列表配置 */
            list1: [{ icon: '/jf.png', name: '我的积分', id: 1 },
            { icon: '/dy.png', name: '我的订阅', id: 2 },
            { icon: '/lxr.png', name: '微聊联系人', id: 3 },
            {},
            { icon: '/jsq.png', name: '房贷计算器', id: 4 },
            { icon: '/x.png', name: '我的房子', id: 5 },
            { icon: '/jl.png', name: '我的看房记录', id: 6 },
            { icon: '/wd.png', name: '我的问答', id: 7 },
            {},
            { icon: '/sz.png', name: '设置', id: 8 },
            { icon: '/yj.png', name: '意见反馈', id: 9 },
            ],
            //登陆状态
            isLogin:'登陆/注册'
        }
    }
    render() {
        return (
            <div>
                <div style={{ background: '#58C9FC' }}>
                    <Flex justify='around'> <img style={{ height: 100, width: 100, borderRadius: '50%' }} src={require('../../../static/images/header.jpg')} />
                        <div>
                            <h3  style={{color:'#fff'}} onClick={this.skip.bind(this)}> {this.state.isLogin} </h3>
                            <p style={{color:'#fff'}}>可以与经纪人发起聊天</p>
                        </div>
                        <img style={{ height: 25, width: 25 }} src={require('../../../static/images/设 置.png')} />
                    </Flex>
                    <Flex justify='around'>
                        <div style={{ height: 100 }}>
                            <h3 style={{ color: '#fff' }}>0</h3>
                            <div> <img style={{ width: 25, height: 25 }} src={require('../../../static/images/钱包 (1).png')} /> <span style={{ color: '#fff' }}>钱包</span> </div>
                        </div>
                        <div style={{ height: 100, width: 140, borderRight: '1px solid #fff', borderLeft: '1px solid #fff', textAlign: 'center' }}>
                            <h3 style={{ color: '#fff' }} >0</h3>
                            <div> <img style={{ width: 25, height: 25 }} src={require('../../../static/images/优惠.png')} /> <span style={{ color: '#fff' }}>优惠</span> </div>
                        </div>
                        <div style={{ height: 100 }}>
                            <h3 style={{ color: '#fff' }}>0</h3>
                            <div > <img style={{ width: 25, height: 25 }} src={require('../../../static/images/积分.png')} /> <span style={{ color: '#fff' }}>积分</span> </div>
                        </div>
                    </Flex>
                </div>
                <div>
                    <List >
                        {this.state.list1.map((item,index) => {
                            if (item.name) {
                                return <Item
                                    key={item.id}
                                    thumb={require('../../../static/images' + item.icon)}
                                    arrow="horizontal"
                                    onClick={() => { }}
                                >{item.name}</Item>
                            } else {
                                    return <div key={item.id} style={{height:5,background:'#ccc'}}></div>
                            }
                        }
                        )}
                    </List>
                </div>
            </div>
        )
    }
    //跳转登陆/注册
    skip() {
        this.props.history.push('/login')
    }
}
