import { Col, Image, InputNumber, Row } from 'antd'
import React from 'react'
import Anh1 from '../../assets/images/anh1.png'
import Anh2 from '../../assets/images/anh2.jpg'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import {StarFilled,PlusOutlined,MinusOutlined} from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailsComponent = () => {
    const onChange = () => {

    }
  return (
    <Row style={{padding: '16px', background:"#fff",borderRadius:"4px"}}>
        <Col span={10} style={{borderRight:"1px solid #e5e5e5", paddingRight:'8px'}}>
            <Image src={Anh1} alt='image product'></Image>
            <Row style={{paddingTop:'10px',justifyContent:'space-between'}}>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={Anh2} alt='image product' preview={false}></WrapperStyleImageSmall>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={Anh2} alt='image product' preview={false}></WrapperStyleImageSmall>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={Anh2} alt='image product' preview={false}></WrapperStyleImageSmall>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={Anh2} alt='image product' preview={false}></WrapperStyleImageSmall>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={Anh2} alt='image product' preview={false}></WrapperStyleImageSmall>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={Anh2} alt='image product' preview={false}></WrapperStyleImageSmall>
                </WrapperStyleColImage>
            </Row>
        </Col>
        <Col span={14} style={{paddingLeft:'10px'}}>
            <WrapperStyleNameProduct>
                 Apple iPhone 15 Pro
            </WrapperStyleNameProduct>
            <div>
                <StarFilled style={{fontSize:"12px", color:"rgb(253,216,54"}}/>
                <StarFilled style={{fontSize:"12px", color:"rgb(253,216,54"}}/>
                <StarFilled style={{fontSize:"12px", color:"rgb(253,216,54"}}/>
                <WrapperStyleTextSell> | Đã bán 1000+ </WrapperStyleTextSell>
            </div>
            <WrapperPriceProduct>
                <WrapperPriceTextProduct>30.000.000</WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <WrapperAddressProduct>
                <span>Giao đến </span>
                <span className='address'>Đường Lâm, Sơn tây, Hà Nội</span>
                <span className='change-address'>-Đổi địa chỉ</span>
            </WrapperAddressProduct>
            <div style={{margin: '10px 0 20px',padding:'10px 0' ,borderTop:"1px solid #ccc", borderBottom:"1px solid #ccc"}}>
                <div style={{marginBottom:"6px"}}>Số lượng</div>
                <WrapperQualityProduct>
                    <button style={{border: 'none', background:'transparent'}}>
                        <MinusOutlined  style={{color:'#000',fontSize:'20px'}} />
                    </button>
                    <WrapperInputNumber  defaultValue={0} onChange={onChange} size='small'/>
                    <button style={{border: 'none', background:'transparent'}}>
                        <PlusOutlined  style={{color:'#000',fontSize:'20px'}} />
                    </button>
                </WrapperQualityProduct>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                <button style={{ background:'rgb(255,57,69)',
                        height:'48px',
                        width: '220px',
                        color:'#fff',
                        border:"none",
                        borderRadius:"4px"}}>Chọn mua</button>

                <button style={{ background:'#fff',
                        height:'48px',
                        width: '220px',
                        color:'rgb(13,92,182)',
                        border:'1px solid rgb(13,92,182)',
                        borderRadius:"4px",
                        fontSize:'15px'}}>Mua trước trả sau</button>
            </div>
        </Col>
    </Row>
  )
}

export default ProductDetailsComponent