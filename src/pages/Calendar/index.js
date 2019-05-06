import React from 'react'
import Layout from 'pages/Layout'
import styles from './styles.scss'
class Calander extends React.Component {
  render () {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.tag}>
            <div className={styles.changebtn}>
              <button type='button' class='btn btn-outline-primary'>課程</button>
            </div>
            <div className={styles.changebtn}>
              <button type='button' class='btn btn-outline-danger'>自訂</button>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.subject}>
              <button type='button' class='ml-2 mt-2 btn btn-primary btn-lg'>計算機組織</button>
              <button type='button' class='ml-2 mt-2 btn btn-success btn-lg'>資料庫</button>
              <button type='button' class='ml-2 mt-2 btn btn-success btn-lg'>正規語言</button>
              <button type='button' class='ml-2 mt-2 btn btn-warning btn-lg'>哲學概論</button>
              <button type='button' class='ml-2 mt-2 btn btn-warning btn-lg'>商用英文</button>
              <button type='button' class='ml-2 mt-2 btn btn-primary btn-lg'>物聯網</button>
              <button type='button' class='ml-2 mt-2 btn btn-primary btn-lg'>無線網路</button>
              <button type='button' class='ml-2 mt-2 btn btn-secondary btn-lg'><i class='fa fa-plus' /></button>
            </div>
            <div className={styles.class}>
              <button type='button' class='ml-2 mt-2 btn btn-info'>HW</button>
              <button type='button' class='ml-2 mt-2 btn btn-info'>Quiz</button>
              <button type='button' class='ml-2 mt-2 btn btn-info'>Exam</button>
              <button type='button' class='ml-2 mt-2 btn btn-info'>Other</button>
            </div>
            <div className={styles.date}>
              <div className={styles.fromto_date}>From 5/2(四)</div>
              <div className={styles.fromto_date}>To 5/3(五)</div>
            </div>
            <div className={styles.remark}>
              <div className={styles.textinput}>備註: ...</div>
            </div>
          </div>
          <div className={styles.save}>
            <div className={styles.btn_content}>
              <div className={styles.savebtn}>
                <button type='button' class='btn btn-outline-secondany'>Cancel</button>
              </div>
              <div className={styles.savebtn}>
                <button type='button' class='btn btn-outline-secondany'>Save</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default Calander
