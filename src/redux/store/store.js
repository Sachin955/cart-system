import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../slices/ProductSlice'
import cartReducer from '../slices/CartSlice'
import wishListReducer from '../slices/WishListSlice'
import authReducer from '../slices/authSlice'

const store = configureStore({
    reducer:{
        product: productReducer,
        cart: cartReducer,
        wishList: wishListReducer,
        auth:authReducer
    }
})
export default store;