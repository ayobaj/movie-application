import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import { IoMdStar } from "react-icons/io";

//created singlePage component for each HomeCard
// i also created a route link to this page in the App component

const SinglePage = () => {
  let movData = data.moviedata;

  const { id } = useParams();

  const [item, setItem] = useState([]);

  // use this hook to carry out a find function for each id stored in the data.json and passed the [id and movData] as dependencies
  useEffect(() => {
    let item = movData.find((it) => it.id === parseInt(id));

    if (item) {
      setItem(item);
    }
  }, [id, movData]);

  console.log(item.traiilerURL);

  return (
    <div className="bg-[#0B101B] text-transparent bg-clip-text bg-gradient-to-r from-[#EB568E] from-30%  to-[#1447E3]  hover:ring-offset-violet-300">
      {item ? (
        <section>
          <div className="flex justify-center">

            {/* <video
              className=" w-[600px] h-[350px]"
              src={item?.traiilerURL}
              controls
            ></video> */}
            
            <iframe width="600" height="350" src={item.traiilerURL} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div className="flex gap-9 mt-16">
            <div className="w-[290px]">
              <img src={item.posterURL}></img>
            </div>

            <div className=" mt-20">
              <h2 className="">{item.title}</h2>

              <div className="text-yellow-300 flex items-center ">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <span className="pl-2">{item.ratings}</span>
              </div>

              <h2>{item.year}</h2>

              <h2>{`Director: ${item.director}`}</h2>

              <h2>{item.description}</h2>

              <h3></h3>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default SinglePage;
