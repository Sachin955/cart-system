import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../redux/slices/CartSlice'
import { clearWishList } from '../redux/slices/WishListSlice'

const Account = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.auth.user)
    const handleLogout = () => {
        dispatch(logout())
        dispatch(clearCart())
        dispatch(clearWishList())
        navigate('/login')
    }
    return (
        <div>
            {
                user && <div>Welcome, {user.name} <button onClick={handleLogout}>Logout</button></div>
            }
        </div>
    )
}

export default Account
