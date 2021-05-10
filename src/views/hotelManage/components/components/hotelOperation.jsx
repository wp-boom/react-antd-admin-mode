import React, { Component} from 'react';
import { Row, Col } from 'antd'

export default class HotelOperation extends Component{

  render() {
    return (
      <div className="HotelOperation">
        <Row>
          <Col span={6}>
            <span>匹配状态:</span>
            <span>上下架状态:</span>
          </Col>
          <Col span={18}>
            <Row>
              <Col span={1}><span>操作:</span></Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
