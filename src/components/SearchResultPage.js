import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VIDEO_SEARCH_API } from "../utils/constants";
import SearchCard from "./SearchCard";
import { useSelector } from "react-redux";

const SearchResultPage = () => {
  const searchQuery = useParams();
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const data = await fetch(VIDEO_SEARCH_API + searchQuery.query);
    const json = await data.json();
    setSearchResults(json?.items);
  };
  console.log(searchResults);
  const isMenuOpen = useSelector((store) => store.app.isOpen);

  return (
    <div className="flex">
      <div className={`${isMenuOpen ? "w-52" : "w-20"} h-full`}></div>
      <div className="mx-10 ">
        <div className="w-full h-12"></div>

        {searchResults.map((result) => (
          <SearchCard data={result} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultPage;
