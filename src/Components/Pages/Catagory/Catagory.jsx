import React, { useState, useEffect } from 'react'
import style from './Catagory.module.css'

function Catagory() {
  const[catagory,setCatagory]=useState([])

  useEffect(()=>{
    const catagory=async()=>{
      const url="https://api.coingecko.com/api/v3/coins/categories/list"
      const options={method:"GET",headers:{accept:"application/json"}}
      try{
        const response=await fetch(url,options)
        if(!response.ok){
          throw new Error("Failed to fetch data")
        }
        const catagory=await response.json()
        console.log(catagory)
        setCatagory(catagory)
      }catch(error){
        console.log("the error is ",error)
      }
    }
    catagory()
  }, [])

  return (
    <div className={style.catagory}>
      <div className={style.catagory_container}>
        <div className={style.catagory_title}>
          
          <div className={style.listContainer}>
          <ul>

            {catagory.slice(0,70).map((each) => (
              <li key={each.category_id}>
                {each.name}
              </li>
            ))}
          </ul>
          </div>
          
        </div>
      </div>
    </div>

  )
}

export default Catagory