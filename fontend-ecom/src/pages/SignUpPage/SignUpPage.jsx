import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import imageLogo from '../../assets/images/loginImg.png'
import { Divider, Image } from 'antd'

const SignUpPage = () => {
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center',background:'rgba(0,0,0,0.53)',height:'100vh'}}>
    <div style={{width:'800px', height:'445px', borderRadius:'6px', backgroundColor:'#fff',display:'flex'}}>
        <WrapperContainerLeft>
            <h1>Xin Chào</h1>
            <p>Đăng nhập vào tạo tài khoản</p>
            <InputForm style={{marginBottom:'10px'}} placeholder="abc@gmail.com"></InputForm>
            <InputForm style={{marginBottom:'10px'}} placeholder="password"></InputForm>
            <InputForm placeholder="Comfirm password"></InputForm>
            <button style={{ background:'rgb(255,57,69)',
                          height:'48px',
                          width: '100%',
                          color:'#fff',
                          border:"none",
                          borderRadius:"4px",
                          margin:'26px 0 10px',
                          fontSize: '20px',
                          }}>Đăng nhập</button>
            <p>Bạn đã có tài khoản? <WrapperTextLight>Đăng nhập</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
             <Image src={imageLogo} preview={false} height="203px" width="203px"></Image>
             <h4>Mua sắm tại Tiki</h4>
        </WrapperContainerRight>
    </div>
   </div>
  )
}

export default SignUpPage