import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "../styleComponent/Product.css";
export const Product=()=>{
    const [product,productState]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3004/product").then(res=>res.json()).then((val)=>{productState(val); console.log(product)})
    },[]);
    return (<div>
        <table>
          <thead>
                <tr id="r1">
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>More Details</th>
                </tr>
            </thead>
            </table>
        {product.map(el=>{return <table>
          
            <tbody>
                <tr id="r2">
                <td>{el.product}</td>
                <td><img src={el.image} alt="" /></td>
                <td>{el.price}</td>
                <td><Link to={`/products/${el.id}`}>More Details</Link></td>
                </tr>
            </tbody>
        </table>})}
    </div>)
}