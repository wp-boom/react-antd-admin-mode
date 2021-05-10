import React, { Component} from 'react';
import HotelOperation from './components/hotelOperation'
import PlatformRoomInfo from './components/platformRoomInfo'

export default class PlatformRoomSetting extends Component{
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  handleResetChildActiveKey = () => {
    this.platformRoomInfo.handleResetActiveKey()
  } 
  onRef = ref => this.platformRoomInfo = ref

  render() {
    const { hotelId } = this.props
    return (
      <div className="PlatformRoomSetting">
        <div>{hotelId}</div>
        <HotelOperation/>
        <PlatformRoomInfo onRef={ this.onRef }/>
      </div>
    )
  }
}
