import { Input } from 'antd'
import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const InputForm = (props) => {
    const [valueInput, setvalueInput] = useState('')
    const {placeholder = "Nhập text", ...rests} = props
  return (
   
        <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rests}>
        </WrapperInputStyle>
  )
}

export default InputForm