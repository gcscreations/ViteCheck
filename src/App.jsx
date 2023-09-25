import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MindARViewer from './mindar-viewer';
import MindarThreeViewer from "./mindar-three-viewer.jsx";
function App() {

    const [started, setStarted] = useState(null);
    return (
        <div className="App">

            <div className="control-buttons">
                {started === null && <button onClick={() => {setStarted('aframe')}}>Start AFRAME version</button>}

            </div>

            {started === 'aframe' && (
                <div style={{ width: "100vw", height: "100vh" }} className="container">
                    <MindARViewer/>
                    <video></video>
                </div>
            )}

        </div>
    );
}


export default App
