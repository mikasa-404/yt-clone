import React, { useEffect, useState, useRef } from "react";
import ytlogo from "../imgs/youtube_logo.jpg";
import hamButton from "../imgs/png-transparent-hamburger-button-computer-icons-menu-ganesha-angle-white-food.png";
import searchButton from "../imgs/search.png";
import userIcon from "../imgs/user.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState(["Loading suggestions... server might take a minute or two to start running"]);
  const [showSuggestions, setShowSuggestion] = useState(false);
  console.log(searchSuggestions)
  const suggestionsRef = useRef();

  const Scache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Scache[searchQuery]) {
        setSearchSuggestions(Scache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 150);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!suggestionsRef.current.contains(event.target)) {
        setShowSuggestion(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [suggestionsRef]);

  const getSearchSuggestions = async () => {
    const data = await fetch(
      `https://yt-server-zum8.onrender.com/api/data/${searchQuery}`
    );
    const json = await data.json();
    setSearchSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  return (
    <div className="grid grid-flow-col mt-1">
      <div className="1 flex m-1 col-span-2">
        <img
          className="h-8 m-2 p-1 cursor-pointer"
          src={hamButton}
          alt="hambutton"
          onClick={() => toggleMenuHandler()}
        ></img>
        <a href="/">
          <img className="h-8 m-2" alt="logo" src={ytlogo}></img>
        </a>
      </div>
      <div ref={suggestionsRef} className="m-1 col-span-6 relative">
        <div className="w-full flex items-center">
          <input
            className=" w-8/12 border-slate-300 border rounded-l-2xl m-0 mr-0 text-base h-9 px-4 focus:outline-none focus:shadow-outline focus:border-blue-700"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              return setSearchQuery(e.target.value);
            }}
            onClick={() => setShowSuggestion(true)}
          ></input>
          <Link to={"/results/" + searchQuery}>
            <button className="border-slate-300 border rounded-r-2xl ml-0 p-2 h-9 hover:bg-gray-100">
              <img
                className=" h-5 pl-3 pr-4"
                src={searchButton}
                alt="searchbtn"
              ></img>
            </button>
          </Link>
        </div>
        {showSuggestions && (
          <div className="bg-white absolute w-8/12 rounded-2xl z-10">
  
              <ul className="">
                {searchSuggestions.map((s, index) => (
                  <Link to={"/results/" + s} key={index}>
                    <li className="hover:bg-gray-200 px-4 py-1">{s}</li>
                  </Link>
                ))}
              </ul>
          
          </div>
        )}
      </div>

      {/* <div className="3 m-1  col-span-2">
        <img
          className="h-8 m-2 float-right mr-5 "
          src={userIcon}
          alt="userLogo"
        ></img>
      </div> */}
    </div>
  );  
};

export default Header;
