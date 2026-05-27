import {Logout,MessageSquare,Settings,User} from 'lucide-react'
import {useDispatch,useSelector} from 'react-redux';
import { Link } from "react-router-dom";



const Navbar =()=>{
    const {authUser} = useSelector((state)=>state.auth);

    const dispatch = useDispatch();

    const handleLogout =()=>{
        //dispatch(logout())
    }
    return <>
        <header className='fixed top-0 w-full z-40 bg-white/80 backdrop-blur-lg border border-gray-200 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 h-16'>
                <div className='flex items-center justify-between h-full'>
                   {/*Left Logo */}
                   <div className='flex items-center gap-8'>
                    <Link to={"/"} className='flex items-center gap-2.5 hover:opacity-80 transition'>

                    </Link>

                   </div>
                </div>

            </div>
        </header>
    </>
}
export default Navbar