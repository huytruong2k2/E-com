import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButton, WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/sliderComponent/sliderComponent'
import CardComponent from '../../components/cardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import { Button } from 'antd'

const HomePage = () => {
  const arr = ['TV','Tu lanh','Laptop']
  return (
   <>
    <div style={{padding: '0 120px'}}>
        <WrapperTypeProduct>
        {arr.map((items)=>{
          return (
            <TypeProduct name={items} key={items}></TypeProduct>
          )
        })}
        </WrapperTypeProduct>
    </div>
    <div id="container" style={{backgroundColor:'#efefef',padding: '0 120px',height:'1000px'}}>
          <SliderComponent></SliderComponent>
          <WrapperProducts>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
          </WrapperProducts>
          <div style={{width:'100%',display: 'flex',justifyContent:"center",marginTop:'10px'}}>
              <WrapperButton style={{border:'1px solid rgb(11,116,229)', color:"rgb(11,116,229)", width:'240px',height:'38px', borderRadius:"4px"}}>Xem Thêm</WrapperButton>
          </div>
    </div>
   </>
  )
}

export default HomePage