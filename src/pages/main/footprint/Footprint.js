import React, { Component } from 'react'
import { connect } from 'react-redux'
import Gethouselist from '../../../components/GetHouselist'



class Footprint extends Component {
    componentDidMount() {

        if (this.props.likelist.length == 0) {
            this.setState({
                isShow: 'block'
            })
        } else {
            console.log(this.props)
            this.setState({
                getfoot: this.props.likelist,
                isShow: 'none'

            })
        }
    }
    constructor() {
        super()
        this.state = {

            isShow: 'none',
            getfoot: []

        }
    }
    render() {
        return (
            <div>
                <p style={{ display: this.state.isShow }}>暂未浏览过数据...</p>
                {this.state.getfoot.map(item =>  <Gethouselist item = {item} key={item.id} />)}
            </div>
        )
    }

}
function filter(state) {

    return {
        likelist: state.likelist
    }


}
export default connect(filter)(Footprint) 
