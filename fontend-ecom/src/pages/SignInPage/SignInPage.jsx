import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import imageLogo from '../../assets/images/loginImg.png'
import { Divider, Image } from 'antd'
import {
  EyeFilled,
  EyeInvisibleFilled
} from '@ant-design/icons';
const SignInPage = () => {
  const [isShowPassword,setisShowPassword] = useState(false)
  return (
   <div style={{display:'flex', alignItems:'center',justifyContent:'center',background:'rgba(0,0,0,0.53)',height:'100vh'}}>
    <div style={{width:'800px', height:'445px', borderRadius:'6px', backgroundColor:'#fff',display:'flex'}}>
        <WrapperContainerLeft>
            <h1>Xin Chào</h1>
            <p>Đăng nhập vào tạo tài khoản</p>
            <InputForm style={{marginBottom:'10px'}} placeholder="abc@gmail.com"></InputForm>
            <div style={{position:'relative'}}>
              <span
                style={{
                  zIndex:10,
                  position: 'absolute',
                  top:'4px',
                  right:'8px'
                }}
              >
               {
                 isShowPassword ?(
                   <EyeFilled/>
                 ):(
                  <EyeInvisibleFilled/>
                 )
               }
              </span>
              <InputForm placeholder="password" type={isShowPassword ? "text" : "password"}></InputForm>
            </div>
            <button style={{ background:'rgb(255,57,69)',
                          height:'48px',
                          width: '100%',
                          color:'#fff',
                          border:"none",
                          borderRadius:"4px",
                          margin:'26px 0 10px',
                          fontSize: '20px',
                          }}>Đăng nhập</button>
            <p>
              <WrapperTextLight>Quên mật khẩu ?</WrapperTextLight>
            </p>
            <p>Chưa có tài khoản? <WrapperTextLight>Tạo tài khoản</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
             <Image src={imageLogo} preview={false} height="203px" width="203px"></Image>
             <h4>Mua sắm tại Tiki</h4>
        </WrapperContainerRight>
    </div>
   </div>
  )
}

export default SignInPage