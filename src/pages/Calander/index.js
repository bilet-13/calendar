import React from 'react'
import Layout from 'pages/Layout'
import Schedule from 'components/calendar/Schedule'
import Edit from 'components/calendar/Edit'
import Table from 'components/calendar/Table'
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
