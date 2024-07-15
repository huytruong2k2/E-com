import { Button, Input } from 'antd'
import React from 'react'
import {
    SearchOutlined
  } from '@ant-design/icons';
import InputComponent from '../inputComponent/inputComponent';

const ButtonInputSearch = (props) => {
  const {
        size,
        placeholder,
        textButton,
        bordered,
        backgroundColorInput = '#fff',
        backgroundColorButton=`rgb(13,92,182)`,
        colorButton='#fff'
    } = props
  return (
    <div style={{display:'flex'}}>
        <InputComponent
          size={size} 
          placeholder={placeholder} 
          bordered={bordered}
          style={{backgroundColor:backgroundColorInput}}></InputComponent>
        <Button 
            size={size} 
            style={{backgroundColor:backgroundColorButton, 
            color:colorButton,
            border: !bordered && 'none'}}
            icon={<SearchOutlined/>}><span style={{color: colorButton}}>{textButton}</span></Button>
    </div>
  )
}

export default ButtonInputSearch