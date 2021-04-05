import React, { Component, useState, useEffect } from "react";
import "./Hooks.css";

// class Hooks extends Component {
//   state = {
//     count: 0,
//   };

//   onUpdate = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   componentDidMount() {
//     document.title = `Title Change: ${this.state.count}`;
//   }

//   componentDidUpdate() {
//     document.title = `Title Change: ${this.state.count}`;
//   }

//   componentWillUnmount() {
//     document.title = "React JS";
//   }

//   render() {
//     return (
//       <div className="container-hooks">
//         <p>Nilai Sekarang: {this.state.count}</p>
//         <button onClick={this.onUpdate}>Update Value</button>
//       </div>
//     );
//   }
// }

const Hooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Title Change: ${count}`;
    return () => {
      document.title = "React JS";
    };
  });

  return (
    <div className="container-hooks">
      <p>Nilai Sekarang: {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Value</button>
    </div>
  );
};

export default Hooks;

// Link Tutoral: https://www.youtube.com/watch?v=Iv-V_BTwuSA&list=PLU4DS8KR-LJ03qEsHn9zV4qdhcWtusBqb&index=35
