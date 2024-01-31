import React from "react";
import { useSelector } from "react-redux";

const HideSprite = ({ comp_id }) => {
  const character = useSelector((state) => state.sprite);

  const handler = () => {
    const el = document.getElementById(character.active);
    el.style.display = "none";
  };
  return (
    <div elevation={3}>
      <div
        id={comp_id}
        className="movebox bg-yellow-500"
        onClick={() => handler()}
      >
        Hide Sprite
      </div>
    </div>
  );
};

export default HideSprite;
