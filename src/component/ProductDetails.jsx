import { useState } from "react"
import { useParams } from "react-router-dom"
export const Detail=()=>{
   const [item,state]=useState({});
    const {id}=useParams();
    fetch(`http://localhost:3004/product/${id}`).then(res=>res.json()).then((res)=>{state(res) 
     
    })
    return <>
    <div><h1> {item.product}</h1><p> Rupees:  {item.price}</p><p>{item.detail}</p></div>
     </>    
}