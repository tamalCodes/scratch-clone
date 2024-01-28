// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { setRepeat } from "../../redux/events/eventActions";

// const Repeat = ({ compId, events, setRepeat }) => {
//   const [repeat, setRepeatState] = useState(0);
//   const handleRepeatChange = (e) => {
//     const val1 = parseInt(e.target.value);
//     setRepeatState(val1);
//     const current = events.repeat;
//     current[compId] = val1;
//     setRepeat(current);
//   };
//   return (
//     <div elevation={3}>
//       <div className="rounded text-center bg-red-400 p-2 my-3">
//         <div className="grid grid-cols-2 my-2">
//           <div className="text-white">Repeat</div>
//           <input
//             className="mx-2 p-1 py-0 text-center"
//             type="number"
//             value={repeat}
//             onChange={(e) => {
//               handleRepeatChange(e);
//             }}
//           />
//         </div>
//         <div
//           id={compId}
//           className="text-center bg-red-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
//         >
//           Repeat By {repeat}
//         </div>
//       </div>
//     </div>
//   );
// };
// function mapStateToProps(state) {
//   return {
//     events: state.event,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     setRepeat: (value) => dispatch(setRepeat(value)),
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Repeat);

import React from "react";

const RepeatCtr = () => {
  return <div>RepeatCtr</div>;
};

export default RepeatCtr;
