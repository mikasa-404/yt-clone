import React, { useEffect, useState } from "react";
import { CATEGORY_API } from "../utils/constants";
import { useSelector } from "react-redux";

const Button = ({ name, setId, id, selected, setSelected }) => {
  return (
    <button
      className={` ${
        selected === id ? "bg-black text-white" : "bg-gray-100 text-black"
      }  relative m-1 p-2 px-3 rounded-lg`}
      onClick={() => {
        console.log("click");
        setId(id);
        setSelected(id);
      }}
    >
      {name}
    </button>
  );
};

const ButtonList = ({ setId }) => {
  const [bList, setBList] = useState([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    fetchButtonList();
  }, []);

  const fetchButtonList = async () => {
    const data = await fetch(CATEGORY_API);
    const datajson = await data.json();
    console.log(datajson.items);
    const newData = datajson.items.map((item) => {
      return {
        id: item.id,
        title: item.snippet.title,
      };
    });
    setBList(newData);
  };
  const isMenuOpen = useSelector((store) => store.app.isOpen);

  return (
    <div
      className={`fixed flex top-0 ${
        isMenuOpen ? "left-56" : "left-20"
      } right-0  overflow-x-auto no-scrollbar whitespace-nowrap bg-white text-sm py-2 px-4 mt-14`}
    >
      <button
        className={`${
          selected === 0 ? "bg-black text-white" : "bg-gray-100 text-black"
        } m-1 p-2 px-3 rounded-lg text-white`}
        onClick={() => {
          setId(0);
          setSelected(0);
        }}
      >
        All
      </button>
      {bList.map((item) => (
        <Button
          key={item.id}
          id={item.id}
          name={item.title}
          setId={setId}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default ButtonList;
