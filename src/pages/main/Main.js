import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import './main.css'
import Home from './home/Home'
import Message from './message/Message'
import My from './my/My'
import Footprint from './footprint/Footprint'



 
export default class Main extends Component {
    constructor() {
        super()

        this.state = {
            /* TabBar配置 */
            selectedTab: 'home',
            /* BarItem配置 */
            Barlist:[{key:'home',title:'首页',icon:'unhome.png',selectedIcon:'home.png'},
            {key:'message',title:'微聊',icon:'unmessage.png',selectedIcon:'message.png'},
            {key:'footprint',title:'足迹',icon:'unfootprint.png',selectedIcon:'footprint.png'},
            {key:'my',title:'我的',icon:'ummy.png',selectedIcon:'my.png'},]
    

        }
    }
 
    renderContent(pageText) {
        switch(this.state.selectedTab){
         case 'home' : return <Home history = {this.props.history} />
         case 'message' : return <Message />
         case 'footprint' : return <Footprint />
         case 'my' : return <My  history = {this.props.history} />
        }
       
    }
    
    render() {
        return (
            <div>

                <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                    >
                       {this.state.Barlist.map(item => <TabBar.Item
                           title={item.title}
                           key={item.key}
                           icon={<div style={{
                               width: '22px',
                               height: '22px',
                               background: `url(${require('../../static/images/'+ item.icon)}) center center /  21px 21px no-repeat` }}
                           />
                           }
                           selectedIcon={<div style={{
                               width: '22px',
                               height: '22px',
                               background: `url(${require('../../static/images/'+item.selectedIcon)}) center center /  21px 21px no-repeat`
                           }}
                           />
                           }
                           selected={this.state.selectedTab === item.key}
                           onPress={() => {
                               this.setState({
                                   selectedTab:item.key,
                               });
                           }}
                       >
                           {this.renderContent(item.key)}
                       </TabBar.Item>

                       )}
                        
                    </TabBar>
                </div>
            </div>
        )
    }
}
