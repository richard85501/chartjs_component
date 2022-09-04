import React from 'react'
import styles from "./Checkbox.module.scss"

const Checkbox = ({checkboxChecked,setCheckboxChecked}) => {

  // <div className={styles.checkboxContainer}>
  //       <Checkbox
  //         checkboxChecked={checkboxChecked}
  //         setCheckboxChecked={setCheckboxChecked}
  //       />
  //     </div>

  return (
    <label className={styles.checkbox}>
        <input type="checkbox" checked={checkboxChecked} onChange ={()=>setCheckboxChecked(!checkboxChecked)}/>
        <span className={styles.checkedDiv}/>
    </label>
  )
}

export default Checkbox