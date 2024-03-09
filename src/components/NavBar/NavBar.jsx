import { NavLink } from "react-router-dom"
// import { IoIosSearch } from "react-icons/io";
import { SiThemoviedatabase } from "react-icons/si";



const NavBar = () => {

    return (

        <div className="navbar flex  justify-center mb-6 pt-3">

            <div className=" flex mt-6">

            <div className="flex gap-12 justify-center text-[80px]">
            <NavLink to={'/'} className='font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#EB568E] from-30%  to-[#1447E3] text-[#EB568E]'><SiThemoviedatabase/></NavLink>
            </div>

            </div>

            {/* <div className="search-bar pl-9 pt-4 pr-6">
                <input type="text" className="relative bg-pink-200 rounded-xl py-3 px-10 border-none" placeholder="search movie here..."/>
                <IoIosSearch className="bg-pink-400 rounded-xl absolute top-[46px] right-[260px]"/>
            </div> */}

        </div>
    )
}

export default NavBar
