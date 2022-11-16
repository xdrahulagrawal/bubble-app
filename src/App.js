import { useState } from "react";
import './assests/styles/App.css'

function App() {
  const [points, setPoints] = useState([])
  const _handleClick = (e) => {
    const { clientX, clientY } = e
    setPoints([...points, { x: clientX, y: clientY }])
  }

  return (
    <div onClick={_handleClick} className='main-container'>
      {points.map((point, index) => (
        <div key={index} className='points' style={{ left: point.x + "px", top: point.y + "px" }}></div>
      ))}
    </div>
  );
}

export default App;
