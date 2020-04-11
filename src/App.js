import React, { useState } from 'react';
import './App.css';
import Car from './Car';
import Webcam from "react-webcam";

export const ClickedContext = React.createContext(false)

const App = () => {
  const [title, setTitle] = useState(0)
  const [clicked, setClicked] = useState(false)

  const webcamRef = React.useRef(null)
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  }

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );


  // const ClickedContext = useContext(false)

  const handleChange = title => {
    setTitle(title)
  }
  const addCount = () => {
    setTitle(t => t + 1)
  }
  const subCount = () => {
    setTitle(t => t - 1)
  }

  return (
    <div className="App">
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
      <h1 style={{ color: '#235faa', backgroundColor: '#ff8', width: 100, margin: '20px auto', borderRadius: '10px', padding: 10, border: '3px solid #1a4' }}>{title}</h1>
      <button className='car-btn' onClick={subCount}>-1</button>
      <button className='car-btn' onClick={addCount}>+1</button>
      <ClickedContext.Provider value={clicked}>
      <Car name='Volvo' year={2008} handleChange={handleChange}  />
      </ClickedContext.Provider>
      <button onClick={()=> setClicked(!clicked)}>click</button>
      {/* <Car name='Toyota' year='2012' handleChange={handleChange} />
      <Car name='Mitsubishi' year='2015' handleChange={handleChange} />
      <Car name='Lexus' year='2011' handleChange={handleChange} />
      <Car name='BMW' year='2014' handleChange={handleChange} /> */}
    </div>
  );
}

export default App;
