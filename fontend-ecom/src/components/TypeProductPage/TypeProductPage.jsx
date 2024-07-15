import React, { Fragment } from 'react'
import NavbarComponent from '../NavbarComponent/NavbarComponent'
import CardComponent from '../cardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProductPage = () => {
    const onChange = () => {

    }
  return (
    <div style={{padding: '0 120px' , background:'#efefef'}}>
         <Row style={{flexWrap:'nowrap',paddingTop:'10px'}}>
        <WrapperNavbar span={4} >
            <NavbarComponent></NavbarComponent>
        </WrapperNavbar>
        <Col span={20}>
        <WrapperProducts span={20}>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent> <CardComponent></CardComponent> <CardComponent></CardComponent> <CardComponent></CardComponent>  
        </WrapperProducts>
        <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{textAlign:"center", marginTop:'10px'}}></Pagination>
        </Col>
    </Row>
    </div>
  )
}

export default TypeProductPage