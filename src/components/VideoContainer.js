import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = ({ categoryId }) => {
  const [videos, setVideos] = useState([]);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    fetchVideos(true);
  }, [categoryId]);

  useEffect(() => {
    if (scroll) {
      fetchVideos(false);
    }
  }, [scroll]);

  const fetchVideos = async (isNewCategory) => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API + categoryId);
      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }
      const datajson = await response.json();
      const newData = isNewCategory
        ? datajson?.items
        : videos.concat(datajson?.items);
      setVideos(newData);
    } catch (error) {
      console.log(error);
      setVideos([]);
    } finally {
      setScroll(false);
    }
  };

  const isMenuOpen = useSelector((store) => store.app.isOpen);

  const handleScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 2 >=
        document.documentElement.scrollHeight
      ) {
        setScroll(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      className={
        "p-4 " + (isMenuOpen ? "grid grid-cols-3" : " grid grid-cols-4")
      }
    >
      {videos.map((vid, index) => (
        <Link key={vid?.id + index} to={"/watch?v=" + vid.id}>
          <VideoCard info={vid} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
