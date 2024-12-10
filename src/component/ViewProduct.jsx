import React from 'react'
import View from './View'
import Snekars from './Snekars'
import Homedecore from './Homedecore'
import Camera from './Camera'

const ViewProduct = () => {
  return (
    <>
      <div className='row col-11 mx-auto gy-4'>
      {
        Snekars.map((val,ind)=>{
          return <View 
          key={ind}
          imgsrc={val.imgsrc}
          title={val.title}
          desc={val.desc}
          price={val.price}
            />
        })
       } 
       {
        Homedecore.map((val,ind)=>{
          return <View 
          key={ind}
          imgsrc={val.imgsrc}
          title={val.title}
          desc={val.desc}
          price={val.price}
            />
        })
       }{
        Camera.map((val,ind)=>{
          return <View 
          key={ind}
          imgsrc={val.imgsrc}
          title={val.title}
          desc={val.desc}
          price={val.price}
            />
        })
       }
      </div>
    </>
  )
}

export default ViewProduct;
