import React from 'react'
import styles from "./Switch.module.scss"

const Switch = ({switchValue,setSwitchValue}) => {

  // <div className={styles.switchContainer}>
  //       <Switch
  //         switchValue={switchValue}
  //         setSwitchValue={()=>setSwitchValue(!switchValue)}
  //       />
  //     </div>

  return (
    <label className={styles.switch}>
        <input className={styles.checkbox} type="checkbox" checked={switchValue} onChange={setSwitchValue}/>
        <span className={styles.slider}/>
    </label>
  )
}

export default Switch 