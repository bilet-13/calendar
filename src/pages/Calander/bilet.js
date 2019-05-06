import React from 'react'
import Layout from 'pages/Layout'
import style from './style.scss'
class bilet extends React.Component {
  render () {
    return (
      <div>
        <Layout>
          <div className={style.space} />
          <div className={style.box}>
            <div className={style.title}>
              <div className={style.date}>4/12</div>
              <div className={style.btnblack}>X</div>
            </div>
            <div className={style.item}>
              <div className={style.tagblue} />
              <div className={style.content}>
                <div>
              日文(三)    作業
                </div>
                <div >
              不想寫作業啦啦啦啦啦啦啦啦啦啦啦啦
                </div>
              </div>
              <div className={style.del}>
                <i className={`fa fa-trash fa-lg ${style.shad}`} />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.tagyellow} />
              <div className={style.content}>
                <div>
              正規語言概論    小考
                </div>
                <div >
              太可怕啦
                </div>
              </div>
              <div className={style.del}>
                <i className={`fa fa-trash fa-lg ${style.shad}`} />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.tagred} />
              <div className={style.content}>
                <div>
              通識  報告
                </div>
                <div >
              還趕下來啊冰鳥
                </div>
              </div>
              <div className={style.del}>
                <i className={`fa fa-trash fa-lg ${style.shad}`} />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.tagpink} />
              <div className={style.content}>
                <div>
              籃球梅竹賽
                </div>
                <div >
              看籃球囉
                </div>
              </div>
              <div className={style.del}>
                <i className={`fa fa-trash fa-lg ${style.shad}`} />
              </div>
            </div>
            <div className={style.create}>
              <i className={`fa fa-plus-circle fa-lg ${style.shad}`} />
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}
export default bilet
