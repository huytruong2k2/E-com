import React from 'react'
import { Button, Input } from 'antd'

const InputComponent = ({ size,placeholder,bordered,style,}) => {
  return (
    <div>
         <Input  
          size={size} 
          placeholder={placeholder} 
          style={style}>
       
          </Input>
    </div>
  )
}

export default InputComponent