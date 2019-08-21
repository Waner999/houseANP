import React, { Component } from 'react'
import cityJson from '../../json/cityJson.json'
import { Flex, WhiteSpace, WingBlank } from 'antd-mobile'
import BScroll from 'better-scroll'
export default class Citys extends Component {
    componentDidMount() {

        this.BScroll = new BScroll('#container')

    }
    render() {
        return (
            <div style={{ background: 'rgb(255, 220, 220)', height: '100%' }}>
                <WingBlank style={{ background: 'rgb(255, 220, 220)', height: '100%' }}>

                    <div id='container' style={{ height: '100%' }}>
                        <div>

                            <h3 style={{ marginTop: 0 }}>热门城市</h3>
                            <Flex justify='around' wrap='wrap'>
                                {cityJson.hotcity.map(city => <div style={{ width: '20%', marginTop:5, height: 20, lineHeight: '20px', textAlign: 'center',border:'1px solid rgb(36, 33, 33)' }} key={city} >{city}</div>)}
                            </Flex>
                            <WhiteSpace />
                            <WhiteSpace />
                            <WhiteSpace />
                            {/* ABC城市 */}
                            <div style={{ height: "100%" }} >


                                {cityJson.citys.map(city => <div key={city.title}>
                                    <h2 id={city.title} >{city.title}</h2>
                                    <Flex justify='around' wrap='wrap'>
                                        {city.lists.map(list => <div style={{textAlign:'center',border:'1px solid  rgb(36, 33, 33)', width: '15%', height: 30,lineHeight:'30px' ,marginTop:5}} key={list}>
                                            {list}
                                        </div>)}
                                    </Flex>
                                </div>)}
                            </div>
                        </div>


                    </div>
                <div style={{position:'fixed',top:50,right:0,background:'#ddd'}}>
                    {cityJson.citys.map(city => <div  key={city.title}>
                        <div  onClick={this.changeCity.bind(this,city.title)} style={{height:25,width:25,border:'1px solid  rgb(36, 33, 33)',textAlign:'center',background:'pink',marginBottom:5}}>{city.title}</div>
                    </div>)}
                </div>

                </WingBlank>
            </div>

        )
    }
    changeCity(key){
        this.BScroll.scrollToElement('#'+key,500)
    }
}
