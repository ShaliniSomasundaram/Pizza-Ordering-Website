import React, { useEffect, useState } from 'react';
import style from "../styles/cart.module.css"
import { MdDelete } from "react-icons/md";

function Cart({cart,setCart}) {
  let [total,setTotal] = useState(0)

  let handle = () => {
    let ans = 0;
    cart.forEach((item) => {
      ans += item.price * item.quan;
    });
    setTotal(ans);
  }

  useEffect(()=>{
    handle()
  })


  let remove = (id) => {
    let arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  }
  
  let handlecart = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].quan += d;
		
		if (tempArr[ind].quan === 0)
			tempArr[ind].quan = 1;
		setCart([...tempArr])
	}


  return (
    <div>
      {cart.length > 0 ? 
    <div id={style.cart}>
      <h2>Cart Contents</h2>
      <section>
          <div>
            <p>Name</p>
          </div>
          <article>
            <p>Quantity</p>
          </article>
          <aside>
            <p>Price</p>
          </aside>
      </section>
      {cart.map((x)=>{
        return(
          <div id={style.cartt} key={x.id}>
            <section>
                <div>
                  <section>
                    <img src={x.image} alt={x.name} />
                    <p>{x.name}</p>
                  </section>
                </div>
                <article>
                  <button onClick={()=>{handlecart(x,-1)}}>-</button>
                  <p>{x.quan}</p>
                  <button onClick={()=>{handlecart(x,+1)}}>+</button>
                </article>
                <aside>
                  <p>₹{x.price*x.quan}</p>
                  <button onClick={()=>{remove(x.id)}}><MdDelete/></button>
                </aside>
            </section>
          </div>
        )
      })}
      <article>
        <div>
          <p id={style.p1}>Grand Total</p>
          <p id={style.p2}>₹{total}</p>
        </div>
      </article>
    </div> : <div style={{textAlign:"center",fontFamily:"cursive",fontWeight:"bolder",fontSize:"40px",color:"#183D3D"}}>Your Cart Is Empty</div>}
    </div>
  );
}

export default Cart;
