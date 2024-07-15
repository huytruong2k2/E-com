import React from 'react'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'


const ProductDetailsPage = () => {
  return (
    <div style={{padding: "0 120px", background:"#efefef",height:"1000px"}}>
       <div>
         <h5>Trang chủ</h5>
       </div>
       <div style={{display:'flex',background:'#fff'}}>
          <ProductDetailsComponent></ProductDetailsComponent>
        </div> 
    </div>
  )
}

export default ProductDetailsPage