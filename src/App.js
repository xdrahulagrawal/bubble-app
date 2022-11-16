import { useState } from "react";
import './assests/styles/App.css'

function App() {
  const [points, setPoints] = useState([])
  const [popped, setPopped] = useState([])
  const _handleClick = (e) => {
    const { clientX, clientY } = e
    setPoints([...points, { x: clientX, y: clientY }])
  }

  const _handleUndoBtn = () => {
    const newPoints = [...points]
    const poopedPoint = newPoints.pop();
    if (!poopedPoint) return
    setPoints(newPoints)
    setPopped([...popped, poopedPoint])
  }

  const _handleRedoBtn = () => {
    const newPopped = [...popped]
    const poppedPoint = newPopped.pop();
    if (!poppedPoint) return
    setPoints([...points, poppedPoint])
    setPopped(newPopped)
  }

  return (
    <>
      <button onClick={_handleUndoBtn} className='primary'>Undo</button>
      <button onClick={_handleRedoBtn} className={popped.length === 0 ? 'disable' : 'primary'} disabled={popped.length === 0 ? true : false}>Redo</button>
      <div onClick={_handleClick} className='main-container'>
        {points.map((point, index) => (
          <div key={index} className='points' style={{ left: point.x + "px", top: point.y + "px" }}></div>
        ))}
      </div>
    </>

  );
}

export default App;
