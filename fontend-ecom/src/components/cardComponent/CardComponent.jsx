import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style'
import {
  StarFilled
} from '@ant-design/icons';

const CardComponent = () => {
  return (
    <WrapperCardStyle 
        hoverable
        headStyle={{width:'200px',height:'200px'}}
        bodyStyle={{padding:'10px'}}
        style={{width: 200}}
        cover={<img alt='example' src='https://kenh14cdn.com/203336854389633024/2023/11/14/8-16993566635001222177441-1699861212467530923080-1699869616224-169986961669158185076-1699930136931720910195.jpg'></img>}
    >
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReportText>
          <span style={{marginRight:'4px'}}>
              <span> 4.96 </span>
              <StarFilled style={{fontSize:'12px', color: 'yellow'}}/>
          </span>
          <span>| Đã bán 1000+</span>
        </WrapperReportText>
        <WrapperPriceText>
            1.000.000 Đ 
            <WrapperDiscountText>-5%</WrapperDiscountText>
        </WrapperPriceText>
    </WrapperCardStyle>
  )
}

export default CardComponent