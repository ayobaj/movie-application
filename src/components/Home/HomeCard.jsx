/* eslint-disable react/prop-types */
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";


const HomeCard = ( {id, title, director, year, posterURL, description, ratings }) => {
    return (
        <div>
            <div className=" moviecard flex flex-col  text-transparent bg-clip-text bg-gradient-to-r from-[#EB568E] from-30%  to-[#1447E3] w-[200px] gap-[5px] hover:ring-offset-violet-300">

                <div className="">
                    {/* when the image is clicked the a new page (singlePage) is loaded based on the id which is shown below */}
                    <Link to={`/singlepage/${id}`}>
                        <img src={posterURL}></img>
                    </Link>
                </div> 

                <h1 className="">{title}</h1>

                <div className="text-yellow-300 flex items-center "><IoMdStar/><IoMdStar/><IoMdStar/><IoMdStar/><IoMdStar/><span className="pl-2">{ratings}</span></div>

                <p className="">{year}</p>

                <p className="">{`Director: ${director}`}</p>

                <div className="">{description}</div>
                
            </div>
        </div>
    )
}

export default HomeCard
