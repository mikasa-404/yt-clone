import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { VIDEO_SEARCH_API } from '../utils/constants';
import SearchCard from './SearchCard';

const SearchResultPage = () => {
  const searchQuery = useParams();
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const data = await fetch(VIDEO_SEARCH_API+searchQuery.query);
    const json = await data.json();
    setSearchResults(json?.items);
  }
  console.log(searchResults)


  return (
    <div className='mx-10'>
      {searchResults.map((result)=>
        <SearchCard data={result}/>
      )}
      


    </div>

  );
}

export default SearchResultPage