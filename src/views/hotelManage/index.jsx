import React,{ Component } from 'react'
import { Collapse, Form, Input, Button, Select, Table, Pagination, Divider  } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
const { Panel } = Collapse
const { Option } = Select
const { Column } = Table;
import PlatformRoomSetting from './components/platformRoomSetting'
import store from '@/store'

export default class HotelManage extends Component{
  constructor() {
    super()
    this.state = {
      list: [
        { hotelId: '1', name: '1' },
        { hotelId: '2', name: '22' },
        { hotelId: '3', name: '333' },
      ],
      total: 200,
      expandedRowKeys: []
    }
    this.columns = [
      {
        title: '酒店ID',
        dataIndex: 'hotelId',
        key: 'hotelId',
        align: 'center',
        width: 60,
      },
      {
        title: '酒店名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        width: 100,
      },
      {
        title: '城市',
        dataIndex: 'city',
        key: 'city',
        align: 'center',
        width: 60,
      },
      {
        title: '地址',
        dataIndex: 'express',
        key: 'express',
        align: 'center',
        width: 100,
      },
      {
        title: '电话',
        dataIndex: 'phone',
        key: 'phone',
        align: 'center',
        width: 100,
      },
      {
        title: '星级',
        dataIndex: 'start',
        key: 'start',
        align: 'center',
        width: 60,
      },
      {
        title: '分组',
        dataIndex: 'group',
        key: 'group',
        align: 'center',
        width: 60,
      },
      {
        title: '参考价',
        dataIndex: 'price',
        key: 'price',
        align: 'center',
        width: 60,
      },
      {
        title: '标签',
        dataIndex: 'tags',
        key: 'tags',
        align: 'center',
        width: 60,
      },
      // {
      //   title: '操作',
      //   dataIndex: 'operation',
      //   key: 'operation',
      //   align: 'center',
      //   width:100,
      //   render: (text, record) =>
      //     (
      //       <span>
      //         <Button type="primary" shape="circle" icon="edit" title="编辑" onClick={this.handleEdit.bind(null,record)}/>
      //         <Divider type="vertical" />
      //         <Button type="primary" shape="circle" icon="delete" title="删除" onClick={this.handleDelete.bind(null,record)}/>
      //       </span>
      //     )
      // }
    ]
  }
  handleQuery = () => {
    console.info('查询', this.state, store.getState())
  }
  changePage = (pageNumber, pageSize) => {
    console.info(pageNumber, pageSize)
  }
  changePageSize = (current, pageSize) => {
    console.info(current, pageSize)
  }
  handleEdit = (row) => {
    console.info(row)
  }
  handleDelete = (row) => {
    console.info(row)
  }
  changeRowsKey(expanded, record) {
    let temp = []
    if (expanded) {
      temp.push(record.hotelId)
      // setTimeout(() => {
      //   this.platformRoomSetting.handleResetChildActiveKey()
      // },500)
      // 根据ID请求平台房型
    } else {
      this.platformRoomSetting.handleResetChildActiveKey()
    }
    this.setState({ expandedRowKeys: temp }, () => console.info(this.state.expandedRowKeys))
  }
  onRef = ref => this.platformRoomSetting = ref
  onExpandedRowsChange = expandedRows => {
  console.log("🚀 ~ file: index.jsx ~ line 133 ~ HotelManage ~ expandedRows", expandedRows)
    
  }

  render() {
    const expandedRowRender = record => {
      // return <div><p>{record.hotelId}</p><p>{record.name}</p></div>
      return <PlatformRoomSetting hotelId={record.hotelId} onRef={this.onRef} />
    }
    return (
      <div className="app-container">
        <Collapse accordion defaultActiveKey={['1']}>
          <Panel header="筛选" key="1">
            <Form layout="inline">
              <Form.Item label="城市名称:">
                <Input size="small" allowClear />
              </Form.Item>
              <Form.Item label="酒店名称:">
                <Input size="small" allowClear />
              </Form.Item>
              <Form.Item label="酒店分组:">
                <Select style={{ width: 120 }} allowClear>
                  <Option value="1">111</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" icon="search" onClick={this.handleQuery}>
                  查询
                </Button>
              </Form.Item>
            </Form>
          </Panel>
        </Collapse>
        <br/>
        <Table 
          bordered 
          dataSource={this.state.list} 
          rowKey={record => record.hotelId} 
          pagination={false} 
          expandIconAsCell={false} 
          expandIconColumnIndex={0} //展开按钮位置 注：调整展开按钮位置需搭配上一行expandIconAsCell={false} 
          expandable={{expandedRowRender}} // 做展开行数据处理
          expandedRowKeys={this.state.expandedRowKeys} 
          expandedRowRender={expandedRowRender} 
          onExpand={this.changeRowsKey(expanded, record)} //点击展开赋值rowsKey
          onExpandedRowsChange={this.onExpandedRowsChange}
          columns={this.columns}
        />
        <br/>
        <Pagination
          total={this.state.total}
          pageSizeOptions={["10", "20", "40"]}
          showTotal={(total) => `共${total}条数据`}
          onChange={this.changePage}
          // current={this.state.listQuery.pageNumber} 当前页数
          onShowSizeChange={this.changePageSize}
          showSizeChanger
          showQuickJumper
          hideOnSinglePage={true}
        />
      </div>
    )
  }
}