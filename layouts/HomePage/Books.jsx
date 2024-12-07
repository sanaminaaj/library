import React, { useEffect, useState } from 'react'
import Book from './Book';
import "./Book.css";
export default function Books() {
    const [booksList,setBooksList]=useState([
        {id:1,img:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532800837i/40968799.jpg",name:"Between the Water and the Woods",author:"Simone Snaith"},        {id:1,img:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328843704i/137949.jpg",name:"Amalia: Diary 3",author:"Ann M. Martin"}

    ]);
  return (
    <div className='books'>
            {
                booksList.map(
                    book=>(
                        <Book id={book.id} img={book.img} name={book.name} author={book.author}></Book>
                    )
                    
                )
            }
    </div>
  )
}
