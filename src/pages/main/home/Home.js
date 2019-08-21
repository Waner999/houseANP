import React, { Component } from 'react'
import { Carousel, WingBlank, PickerView, Card, WhiteSpace, SearchBar, Flex } from 'antd-mobile'
import { houselist, IP } from '../../../apis/apis'
import { connect } from 'react-redux' 
import  Gethouselist from '../../../components/GetHouselist'


const _AMAP = window.AMap
class Home extends Component {
    constructor() {
        super()

        this.state = {

            /* Carousel配置 */
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            imgHeight: 176,

            /* 循环图标配置 */
            picList: [{ url: `${require('../../../static/images/新房.png')}`, id: 1, name: '新房', color: '#FF5A5F' },

            { url: `${require('../../../static/images/二手房.png')}`, id: 2, name: '二手房', color: '#A782B9' },
            { url: `${require('../../../static/images/租房.png')}`, id: 3, name: '租房', color: '#F6D149' },
            { url: `${require('../../../static/images/写字楼.png')}`, id: 4, name: '商铺写字楼', color: '#F6D149' },
            { url: `${require('../../../static/images/卖房.png')}`, id: 5, name: '卖房', color: '#FFA650' },
            { url: `${require('../../../static/images/飞机.png')}`, id: 6, name: '海外房产', color: '#57AFF8' },
            { url: `${require('../../../static/images/小区.png')}`, id: 7, name: '小区房价', color: '#00E4DD' },
            { url: `${require('../../../static/images/问答.png')}`, id: 8, name: '问答', color: '#D29BCB' }
            ],
            houseList: [{ url: `${require('../../../static/images/贷款.png')}`, id: 1, name: '贷款' },
            { url: `${require('../../../static/images/房贷计算.png')}`, id: 2, name: '房贷计算' },
            { url: `${require('../../../static/images/知识.png')}`, id: 3, name: '知识' },
            { url: `${require('../../../static/images/扫一扫.png')}`, id: 4, name: '扫一扫' },],

            /* 猜你喜欢配置 */
            getlike: [],

            city: '定位中'
        }

    }
    componentWillUnmount(){
        //内存泄漏,  设置setState为返回空函数  
        this.setState = () => { return }
    }
    async componentDidMount() {
        //获取猜你喜欢
        let res = await houselist()

        this.setState({
            getlike: res.data
        })

        let _this = this;
        /* 调用地图定位API */
        //获取用户所在城市信息

        //实例化城市查询类
        var citysearch = new _AMAP.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    _this.setState({
                        city: cityinfo
                    })
                    //地图显示当前城市
                }
            } else {
                _this.setState({
                    city: result.info
                })
            }
        });


    }
    render() {
        return (
            <div>
                {/* 头部 */}
                <Flex justify='around' className='nav' >
                    <div onClick={this.changeCity.bind(this)}>
                        <p style={{ color: '#fff' }}>{this.state.city} ▼</p>
                    </div>
                    <div className='search'>
                        <SearchBar placeholder="Search" maxLength={8} showCancelButton cancelText />
                    </div>
                    <div onClick={this.mapchange.bind(this)} >
                        <img style={{ width: 30 }} src={require('../../../static/images/map.png')} />
                    </div>
                </Flex>


                {/* 轮播 */}
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}

                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <WhiteSpace />
                {/* 图标循环 */}
                <Flex wrap='wrap' justify='around'  >

                    {this.state.picList.map((item, index) => {

                        return <div style={{ margin: 12 }} key={index}>
                            <div style={{ width: 60, height: 60, background: item.color, borderRadius: '50%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img style={{ width: '60%', height: '50%' }} src={item.url} />
                            </div>
                            <p style={{ textAlign: 'center' }}>{item.name}</p>
                        </div>

                    })}

                </Flex>
                {/* 百科 */}
                <div>
                    <Card>
                        <WingBlank>

                            <Card.Header
                                title={<span style={{ fontSize: 20, fontWeight: 'bold', color: 'rgba(0, 193, 55, 0.788)' }}>房产全百科</span>}
                                extra={<span style={{ fontSize: 12, }} >专业的买方攻略</span>}
                            />
                            <Card.Body>
                                <Flex justify='around'>
                                    {this.state.houseList.map((item, index) => {
                                        return <div key={index} style={{ textAlign: 'center' }}>
                                            <img style={{ width: 50, height: 50 }} src={item.url} />
                                            <p>{item.name}</p>
                                        </div>
                                    })}


                                </Flex>

                            </Card.Body>

                        </WingBlank>

                    </Card>
                </div>
                {/* 猜你喜欢 */}
                <WhiteSpace />

                <div>
                    {this.state.getlike.map((item, index) => 
                        <div key={item.id} onClick={this.clickList.bind(this, item)}>
                            <Gethouselist  item = {item} />
                            </div> )}
                </div>

            </div>
        )
    }
    //跳转到地图页面
    mapchange() {
        this.props.history.push('/maps')

    }
    clickList(obj) {

        this.props.dispatch({
            type: 'addFoot',
            like: obj
        })


    }
    //切换成熟
    changeCity(){
        this.props.history.push('/citys')
    }
}


export default connect()(Home)