import cart from '../assets/cart.png'

export const CartWidget = () =>{
    return(
    <>
    <img src={cart} height={30}/> 
    <span>0</span>
    </>
    )
}