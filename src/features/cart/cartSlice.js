const initialState ={
    cartItems:[]
}
export default function cartReducer(state=initialState,action){
    switch(action.type){
        case "cart/addItem":
            const newItem = action.payload
            return {...state,cartItems:[...state.cartItems,newItem]}
            case "cart/deleteItem":
                const itemId = action.payload
                return {...state,cartItems:state.cartItems.filter((it)=>it.productId !== itemId)}
        default:
            return state    
    }
}

export function addItem(newItem){
    return {type:"cart/addItem",payload:newItem}
}
export function deleteItem(id){
    return {type:"cart/deleteItem",payload:id}
}