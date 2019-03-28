
import React from 'react'
import styles from './style.scss'
import Layout from 'pages/Layout'

const Calendar = () => (
	<Layout>
		<div className={styles.container}>
			<div className={styles.header}> 1 </div>
			<div className={styles.body}> 2 </div>
			<div className={styles.footer}> 3 </div>
		</div> 
	</Layout>
)

export default Calendar