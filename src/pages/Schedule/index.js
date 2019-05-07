import React from 'react'
import styles from './style.scss'
import Layout from 'pages/Layout'
import CalendarBody from 'components/Calendar/CalendarBody'
import CalendarList from 'components/Calendar/CalendarList'
import CalendarOption from 'components/Calendar/CalendarOption'

const Schedule = () => (
  <Layout>
    <div className={styles.container}>
      <CalendarBody />
      <CalendarList />
      <CalendarOption />
    </div>
  </Layout>
)

export default Schedule
