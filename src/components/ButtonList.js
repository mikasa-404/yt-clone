import React from "react";

const Button = ({ name }) => {
    return(
  <button className="bg-gray-100 m-1 p-2 px-3 rounded-lg">{name} </button>);
};

const ButtonList = () => {
  const bList = [
    "Mixes",
    "Music",
    "Taylor Swift",
    "T-Series",
    "Lo-fi",
    "Playlists",
    "K-pop",
    "Soundtracks",
    "Indie",
    "Sports",
    "FIFA",
    "MotoGP",
    "Marvel",
    "lorem",
    "ipsum",
    "Sports",
    "FIFA",
    "MotoGP",
    "Marvel",
    "lorem",
    "ipsum"
  ];
  return (
    <div className=" whitespace-nowrap overflow-hidden overflow-x-scroll no-scrollbar m-3 text-sm">
      <button className="bg-black m-1 p-2 px-3 rounded-lg text-white">All </button>
      {bList.map((item, index)=> <Button key={index} name={item} />)}
    </div>

  );
};

export default ButtonList;
