import React from 'react'
import './cart.css'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../rtk/Slices/slice-cart';
import { clear } from '../../rtk/Slices/slice-cart';

export default function Cart() {
  const cart= useSelector((state) =>state.cart)
  const dispatch=useDispatch()
  const totalPrice=cart.reduce((acc,item)=>{
    acc+=item.price*item.quantity ;
    return acc;

  },0)
  return (
        <div className='cart container'>
      <h1>welcome to cart</h1>
      <button onClick={()=>dispatch(clear())}>Clear all products</button>
      <h5>Total price:{totalPrice.toFixed(2)}</h5>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Img</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {cart.map((item)=>(
      
        <tr style={{paddingTop:'50px'}} key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td><img style={{width:'50px',height:'50px'}} src={item.image} alt=''/></td>
          <td>{item.price}$</td>
          <td>{item.quantity}</td>
          <td>
            <button onClick={()=>dispatch(deleteFromCart(item))} className='cart-btn'>Delete</button>
          </td>

        </tr>
        
      ))}
      

      </tbody>
    </Table>
      </div>
  )
}
