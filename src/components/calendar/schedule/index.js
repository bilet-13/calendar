import React from 'react'
import styles from './style.scss'


const Schedule = () => (

  <div className={styles.container}>
    <div className={styles.month}>
      <div className={styles.arrow}> &#9665; </div>
      <div className={styles.monthTitle}> March </div>
      <div className={styles.arrow2}> &#9655; </div>
    </div>
    <div className={styles.day}>
      <div className={styles.dayItem}> Mon </div>
      <div className={styles.dayItem}> Tue </div>
      <div className={styles.dayItem}> Wed </div>
      <div className={styles.dayItem}> Thu </div>
      <div className={styles.dayItem}> Fri </div>
      <div className={styles.dayItem}> Sat </div>
      <div className={styles.dayItem}> Sun </div>
    </div>
    <div className={styles.date}>
      <div className={styles.dateItem}>
        <div className={styles.dateNumberNot}>26</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumberNot}>27</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumberNot}>28</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumberNot}>29</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumberNot}>30</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>1</div>
        <div className={styles.colorbarHoli} />
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>2</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>3</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>4</div>
        <div className={styles.colorbarQuiz} />
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>5</div>
        <div className={styles.colorbarQuiz} />
        <div className={styles.colorbarHW} />
        <div className={styles.colorbarHoli} />
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>6</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>7</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>8</div>
        <div className={styles.colorbarHoli} />
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>9</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>10</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>11</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>12</div>
        <div className={styles.colorbarHW} />
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>13</div>
        <div className={styles.colorbarHoli} />
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>14</div>
        <div className={styles.colorbarHW} />
        <div className={styles.colorbarHoli} />
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>15</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>16</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>17</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>18</div>
        <div className={styles.colorbarHoli} />
        <div className={styles.colorbarQuiz} />
        <div className={styles.colorbarQuiz} />
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>19</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>20</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>21</div>
        <div className={styles.colorbar} />
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>22</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>23</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>24</div>
        <div className={styles.colorbarHW} />
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>25</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>26</div>
        <div className={styles.colorbarHW} />
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>27</div>
        <div className={styles.colorbarQuiz} />
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>28</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>29</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>30</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumber}>31</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumberNot}>1</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumberNot}>2</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumberNot}>3</div>
        <div className={styles.colorbarQuiz} />
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumberNot}>4</div>
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumberNot}>5</div>
        <div className={styles.colorbarHW} />
        <div className={styles.colorbarQuiz} />
        <div className={styles.colorbarHoli} />
      </div>
      <div className={styles.dateItem}>
        <div className={styles.dateNumberNot}>6</div>
      </div>
    </div>
    <div className={styles.infobar}>
      <div className={styles.infoItem}>
        <div className={styles.colorbarQuiz} />
        <div className={styles.thing}> Quiz </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.colorbarHW} />
        <div className={styles.thing}> HW </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.colorbarHoli} />
        <div className={styles.thing}> Holi </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.colorbarActi} />
        <div className={styles.thing}> Acti </div>
      </div>
    </div>
  </div>

)

export default Schedule
