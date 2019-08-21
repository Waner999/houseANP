import React, { Component } from 'react'
import { Button, Flex, InputItem, WingBlank, WhiteSpace } from 'antd-mobile'
import './login.css'
import { Link } from 'react-router-dom'
import {getlogin} from '../../apis/apis'
export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            acc: '',//用户名
            pwd: '', //密码
            isError:'none', //错误提示


        }

    }
    render() {
        let { acc, pwd } = this.state
        return (
            <div>
                {/* LOgo */}
                <WhiteSpace size='md' />
                <WhiteSpace size='md' />
                <WhiteSpace size='md' />
                <WhiteSpace size='md' />
                
                <Flex justify='center' style={{height:150}}>
                    
                    <img className='login-Logo' src={require('../../static/images/logo.png')} />
                </Flex>
                <WhiteSpace size='md' />
                <WhiteSpace size='md' />


                {/* 登陆组件 */}
                <WingBlank size='lg'>

                    <InputItem
                        placeholder="请输入用户名"
                        value={acc}
                        type='phone'
                        onChange={(val)=>{this.setState({acc:val})}}
                        clear
                    >
                        <div style={{ backgroundImage: `url(${require('../../static/images/User select.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size='md' />
                    <InputItem
                        placeholder="请输入密码"
                        value={pwd}
                        onChange={(val)=>{this.setState({pwd:val})}}
                        clear
                        type='password'
                    >
                        <div style={{ backgroundImage: `url(${require('../../static/images/pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <p style={{color:'red',display:this.state.isError}}>账号或密码错误</p>
                    <WhiteSpace size='md' />

                    <Button onClick={this.login.bind(this)} className='pink'>登陆</Button>
                    <WhiteSpace size='md' />
                    <Flex justify='between'>
                        <Link to='/register'>快速注册</Link>
                        <Link to='/'>忘记密码?</Link>
                    </Flex>

                </WingBlank>



                <div className='bottomDiv'>
                    <p>登陆/注册及表示同意此协议</p>
                </div>
            </div>



        )
    }
    //登陆
   async login(){
        let {acc,pwd} = this.state
        let res = await getlogin(acc,pwd)

         if(res.data === 'ok'){
             //登陆成功
           this.props.history.push('/') //跳转
           //保存账号到本地
           localStorage.setItem('acc',acc)
         }else{
            //登陆失败
            //显示错误信息
            this.setState({
                isError:'block'
            })
         }
        

    }
}
