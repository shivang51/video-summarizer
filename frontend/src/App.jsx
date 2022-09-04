import { useState } from 'react'
import './App.css'
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom';

import Home from "./components/Home"
import Content from "./components/Content"
import Results from "./components/Results"




export default function App() {  

    const [tokens, setTokens] = useState([]);
    return (
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route
            path="/content"
            element={<Content setTokens={setTokens}/>}
          ></Route>
          <Route
            path="/results"
            element={<Results tokens={tokens} />}
          ></Route>
      </Routes>

        </div>
    );
 }

