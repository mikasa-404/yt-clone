import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-100 m-1 p-2 px-3 rounded-lg">{name} </button>
  );
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
    "Sports",
    "FIFA",
    "MotoGP",
    "Marvel",
  ];
  return (
    <div className="z-20 fixed overflow-x-auto no-scrollbar text-sm whitespace-nowrap px-4 pb-2 mr-4 mt-14 bg-white">
      <button className="bg-black m-1 p-2 px-3 rounded-lg text-white">
        All{" "}
      </button>
      {bList.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
