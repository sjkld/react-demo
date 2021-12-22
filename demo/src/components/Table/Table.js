import { Component } from "react";
import './index.css'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        {
          title: '序号',
          key: 'id',
        },
        {
          title: '标题',
          key: 'title',
        },
        {
          title: '长度',
          key: 'len',
        },
        {
          title: '',
          key: 'none',
          render: (item, dataSource, i) => {
            return (
              <span onClick={() => this.handleDel(i)} className="remove">
                删除
              </span>
            )
          }
        },
      ],
      dataSource: [
        { id: 1, title: '标题标题标题标题标题标题标题标题标题标题1', len: 100001 },
        { id: 2, title: '标题标题标题标题标题标题标题标题标题标题2', len: 100002 },
        { id: 3, title: '标题标题标题标题标题标题标题标题标题标题3', len: 100003 },
        { id: 4, title: '标题标题标题标题标题标题标题标题标题标题4', len: 100004 },
        { id: 5, title: '标题标题标题标题标题标题标题标题标题标题5', len: 100005 },
      ]
    }
  }

  handleDel = i => {
    let { dataSource } = this.state
    dataSource.splice(i, 1)
    this.setState({
      dataSource
    })
  }

  render() {
    let { columns = [], dataSource = [] } = this.state
    console.log(dataSource, 'sssssssss')
    return (
      <>
        <table cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              {
                columns.map(item => {
                  return (
                    <th key={item.key}>{item.title}</th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              dataSource.map((item, index) => {
                return (
                  <>
                    <tr key={item.id}>
                      {
                        columns.map((column, i) => {
                          return column.render ? <td>{column.render()}</td> : (
                            <td key={`${item.id}_${i++}`}>{
                              item[column.key]
                            }</td>
                          )
                        })
                      }
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </>
    )
  }
}

export default Table
