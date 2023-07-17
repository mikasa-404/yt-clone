import React from "react";

const Button = ({ name }) => {
    return(
  <span className="p-1 bg-gray-200 m-2 px-3 rounded-lg w-fit">{name} </span>);
};

const ButtonList = () => {
  const bList = [
    "All",
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
    <div className=" whitespace-nowrap overflow-hidden overflow-x-scroll">
      {/* <div className="p-1 bg-gray-200 m-2 px-3 rounded-lg">Mixes</div> */}
      {bList.map((item)=> <Button name={item}/>)}
    </div>

  );
};

export default ButtonList;
