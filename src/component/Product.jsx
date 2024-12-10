import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

const Product = () => {
  return (
    <div>
      <h1 className='heading text-center m-2' id='product'>Products Catagory</h1>
      <div className='row col-11 mx-auto gy-4'>
       {
        Sdata.map((val,ind)=>{
          return <Card 
          key={ind}
          imgsrc={val.imgsrc}
          title={val.title}
          desc={val.desc}
            />
        })
       }
      </div>
    </div>
  )
}

export default Product
