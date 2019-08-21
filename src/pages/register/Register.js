import React, { Component } from 'react'
import { WhiteSpace, WingBlank, InputItem, Button } from 'antd-mobile'
import { Link } from 'react-router-dom'
import {register} from '../../apis/apis'

export default class Register extends Component {
    constructor(){
        super()

        this.state = {

            phone:'', //手机号
            pwd:'', //密码
            securityCode:'', //验证码

        }
    }
    render() {
        let {securityCode,phone,pwd} = this.state
        return (
            <div>
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <WingBlank>
                    <InputItem

                        type='phone'
                        placeholder="请输入手机号"
                        value={phone}
                        onChange={(val)=>{this.setState({phone:val})}}

                    />
                    <WhiteSpace size='md' />

                    <InputItem
                     value={pwd}
                     onChange={(val)=>{this.setState({pwd:val})}}
                        type='password'
                        placeholder="请输入密码"
                    />
                    <WhiteSpace size='md' />

                    <InputItem
                     value={securityCode}
                     onChange={(val)=>{this.setState({securityCode:val})}}
                        placeholder="请输入验证码"
                        extra='获取验证码'
                        onExtraClick={this.getCode}
                    />
                    <WhiteSpace size='md' />
                    <p>
                        <input type='radio' />
                        <label>我已同意 <span style={{ color: 'pink' }}>《用户服务协议》及《隐私权政策》 </span> </label>
                    </p>
                    <Button onClick={this.Register.bind(this)} className='pink'>注册</Button>
                    <WhiteSpace size='lg' />

                    <Link to='/login'>已有账号</Link>


                </WingBlank>
            </div>
        )
    }
     Register(){
        let {phone,securityCode,pwd} = this.state
        // console.log( phone,pwd)
            register(phone,pwd).then((res)=>{
                console.log(res)
            
            })
    }
    //获取验证码
    getCode(){
          
    }
}
