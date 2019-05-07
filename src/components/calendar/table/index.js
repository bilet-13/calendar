import React from 'react'
import style from './style.scss'
class bilet extends React.Component {
  render () {
    return (
      <div>

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
              寫作業寫作業寫作業寫作業
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
              小考小考小考小考小考小考!!!!
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
              報告報告報告~~~~
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
              籃球球球球球球球球球球球球球球球
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

      </div>
    )
  }
}
export default bilet
//********************************************************************************************************************