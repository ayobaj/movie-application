import { useState } from "react"
import Home from "./Home"
import data from "../data.json"


const Homes = () => {

    const movData = data.moviedata;
    const [items, setItems] = useState(movData)
    return (
        <div>
            <Home items={items}/>
        </div>
    )
}

export default Homes

