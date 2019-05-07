import React from 'react'
import Layout from 'pages/Layout'
import Schedule from 'components/Calendar/Schedule'
import Edit from 'components/Calendar/Edit'
import Table from 'components/Calendar/Table'
class bilet extends React.Component {
  render () {
    return (
      <div>
        <Layout>
          <Schedule />
          <Table />
          <Edit />
        </Layout>
      </div>
    )
  }
}
export default bilet
