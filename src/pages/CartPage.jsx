import { useDispatch, useSelector } from "react-redux"
import { decreaseQuantity, deletecart, increaseQuantity } from "../reducer/cartReducer"


function CartPage() {
  const cart = useSelector((item)=>item.cart.item)
  const dispatch = useDispatch()
  console.log("cart =>",cart);
  return (
<div>
    {
        cart.map((item,index)=>{
            return(
                <div key={index}>
                    <div>
            {item.name}{" "} {item.price}
                </div>
                <button onClick={()=>dispatch(decreaseQuantity(item.id))}> decrease</button>{item.quantity}
                <button onClick={()=>dispatch(increaseQuantity(item.id))}> increase</button>
                <button onClick={()=>dispatch(deletecart(item.id))}> delete</button>
                </div>
            )
        })
    }
</div>
  )
}

export default CartPage