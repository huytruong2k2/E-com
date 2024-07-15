import { Badge, Col, Row} from 'antd'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccout, WrapperHeaderTextHeader,WrapperTextHeaderSmall } from './style'
import Search from 'antd/es/transfer/search'
import { AudioOutlined } from '@ant-design/icons'

import {
   UserOutlined,
   CaretDownOutlined,
   ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperHeaderTextHeader>TiKi</WrapperHeaderTextHeader>
        </Col>
        <Col span={12} >

            <ButtonInputSearch
               size="large"
               textButton="Tìm kiếm"
               placeholder="input search text"
            />
        </Col>
        <Col span={6} style={{display:'flex', gap:'20px', alignItems:'center'}}>
            <WrapperHeaderAccout>
              <UserOutlined style={{fontSize:'30px'}}/>
              <div>
                 <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                 <div>
                 <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                        <CaretDownOutlined />
                 </div>
              </div>
            </WrapperHeaderAccout>
            <div>
              <Badge count={4} size='small'>
                  <ShoppingCartOutlined style={{fontSize:"30px", color:'#fff'}}/>
              </Badge>
              <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
            </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent