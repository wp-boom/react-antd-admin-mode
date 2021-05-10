import React, { Component} from 'react';
import { Tabs } from 'antd'
const { TabPane } = Tabs
import store from '@/store'
import RoomInfo from './roomInfo'

export default class PlatformRoomInfo extends Component{
  constructor() {
    super()
    this.state = {
      platform: store.getState().hotelSetting.platform,
      activeKey: 'FEIZHU_WEELFLYPLANET'
    }
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  componentDidUpdate() {
    console.info(this.state.activeKey, 'activeKey 更新后')
  }
  componentWillUnMount() {
    console.info('销毁')
  }
  handleResetActiveKey = () => {
    this.setState({ activeKey: 'FEIZHU_WEELFLYPLANET' })
    console.info(this.state.activeKey, 'activeKey 改变后')
    this.roomInfo.handleGet('FEIZHU_WEELFLYPLANET')
  }
  handlePlatformChange = key => {
    this.setState({ activeKey: key }, () => {
      console.info(this)
    })
    this.roomInfo.handleGet(key)
  }
  onRef = ref => this.roomInfo = ref

  static getDerivedStateFromProps(props, state) {
    console.info(state)
    return null
  }

  render() {
    return (
      <div className="PlatformRoomInfo">
        <Tabs activeKey={this.state.activeKey} onChange={this.handlePlatformChange}>
          {
            this.state.platform.map(item => {
              return <TabPane tab={item.name} key={item.value}></TabPane>
            })
          }
        </Tabs>
        <RoomInfo activeKey={this.state.activeKey} onRef={this.onRef}/>
      </div>
    )
  }
}
