import React from 'react'
import './form-input.styles.scss'
const FormInput= ({handleChange,label,...other}) => {
  return (
    <div className="group">
      <input className="form-input" type="text" onChange={handleChange} {...other}/>
      {
          label ? <label className={`${other.value.length ? 'shrink':''} form-input-label`}>{label}</label>:null
      }
    </div>
  )
}
export default FormInput;
