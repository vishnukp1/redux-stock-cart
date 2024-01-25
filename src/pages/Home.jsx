import { useDispatch } from "react-redux";
import { Products } from "../Data/Data";
import { addcart } from "../reducer/cartReducer";
import { useNavigate } from "react-router-dom";

function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(Products);
  return (
<div>
    {
        Products.map((item,index)=>{
            return(
                <div key={index}>
                    <div>
            {item.name}{" "} {item.price}
                </div>
                <button onClick={()=>dispatch(addcart(item))}>add to cart</button>
                </div>
            )
        })
    }
    <button style={{marginTop:"10px"}} onClick={()=>navigate("/cart")}> GO TO CART</button>
</div>
  )
}

export default Home