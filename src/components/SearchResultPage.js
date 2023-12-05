import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { VIDEO_SEARCH_API } from '../utils/constants';
import SearchCard from './SearchCard';

const SearchResultPage = () => {
  const searchQuery = useParams();
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(VIDEO_SEARCH_API+searchQuery.query);
    const json = await data.json();
    // const json = {
    //   "kind": "youtube#searchResult",
    //   "etag": "D-VTOgr9tnfxP3RfuZLj8l7_cmM",
    //   "id": {
    //     "kind": "youtube#video",
    //     "videoId": "QOGxLOld66U"
    //   },
    //   "snippet": {
    //     "publishedAt": "2023-12-02T02:05:15Z",
    //     "channelId": "UCykBuWH5R7wT60JfSDsCZRg",
    //     "title": "Old Bollywood LOVE Hindi songs 💞Bollywood 90s HIts Hindi Romantic Melodies Songs",
    //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum, sit ipsam expedita rerum sapiente eos, nihil debitis aspernatur blanditiis odit aliquid modi temporibus alias reprehenderit distinctio maiores provident facilis!",
    //     "thumbnails": {
    //       "default": {
    //         "url": "https://i.ytimg.com/vi/QOGxLOld66U/default_live.jpg",
    //         "width": 120,
    //         "height": 90
    //       },
    //       "medium": {
    //         "url": "https://i.ytimg.com/vi/QOGxLOld66U/mqdefault_live.jpg",
    //         "width": 320,
    //         "height": 180
    //       },
    //       "high": {
    //         "url": "https://i.ytimg.com/vi/QOGxLOld66U/hqdefault_live.jpg",
    //         "width": 480,
    //         "height": 360
    //       }
    //     },
    //     "channelTitle": "Love India",
    //     "liveBroadcastContent": "live",
    //     "publishTime": "2023-12-02T02:05:15Z"
    //   }
    // }
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