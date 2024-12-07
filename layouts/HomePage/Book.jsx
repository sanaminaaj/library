import React from 'react'
import "./Book.css"
export default function Book({id,author,name,img}) {
  return (
    <>
    <div className='box'>
    <img src={img} width={300} height={300} alt=""></img>
    <div>
    <p>{name}</p>
    <p>{author}</p>
    </div>
    </div>
    </>
  )
}
