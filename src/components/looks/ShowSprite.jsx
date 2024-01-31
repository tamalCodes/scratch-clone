import React from "react";
import { useSelector } from "react-redux";

const Show = ({ comp_id }) => {
  const character = useSelector((state) => state.sprite);

  const handleDisplay = () => {
    const el = document.getElementById(character.active);
    el.style.display = "inline-block";
  };

  return (
    <div elevation={3}>
      <div
        id={comp_id}
        className="movebox bg-yellow-500"
        onClick={() => handleDisplay()}
      >
        Show Sprite
      </div>
    </div>
  );
};

// mapping state to component
// const mapStateToProps = (state) => {
//   return {
//     character: state.sprite,
//   };
// };

export default Show;
