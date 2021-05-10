import React, { Component} from 'react';

export default class RoomInfo extends Component{
  constructor(props) {
    super(props)
    this.state = {
      activeKey: props.activeKey
    }
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  handleGet = activeKey => {
    console.info('改变', activeKey)
    this.setState({activeKey: activeKey})
  }

  render() {
    return (
      <div className="RoomInfo">{this.state.activeKey}</div>
    )
  }
}

