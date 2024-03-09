import { useState } from "react";
import HomeCard from "./HomeCard";
import data from '../data.json';
import { IoIosSearch } from "react-icons/io";

const Home = () => {
    const [search, setSearch] = useState("");
    const [filteredMovies, setFilteredMovies] = useState(data.moviedata);

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearch(query);

        const filtered = data.moviedata.filter(it =>
            it.title.toLowerCase().includes(query.toLowerCase()) || it.ratings.toString().includes(query) 
            // i had to return a string rep for the rating
        );
        setFilteredMovies(filtered);
    }

    return (
        <div className="bg-[#0B101B] h-full">

            <div className="flex justify-end">
            <input className="search bg-pink-200 text-black py-2 px-7 rounded-xl relative" type="text" placeholder="Search by title or rating..." value={search} onChange={handleSearch} />
            <span className="text-white absolute right-[215px] top-[165px] bg-pink-400 rounded-xl"><IoIosSearch/></span>
            </div>

            <div className="home flex flex-wrap gap-9 justify-center mt-20">
                {filteredMovies.map((movie) => (
                    <HomeCard key={movie.id} {...movie} />
                ))}
            </div>

        </div>
    )
}

export default Home;
