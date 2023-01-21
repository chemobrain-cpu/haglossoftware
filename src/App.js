import React, { useEffect, Suspense } from "react"
import { Route, Routes } from 'react-router-dom'
import './App.css'
//importing redux action to log user in initially
import { checkIfIsLoggedIn } from "./store/action/userAppStorage";
import { useDispatch } from "react-redux";
import Spinner from "react-activity/dist/Spinner"
import "react-activity/dist/Spinner.css"

const Home = React.lazy(() => import('./screen/general_screen/Home'))



function App() {
  let dispatch = useDispatch()
  useEffect(async () => {
    await dispatch(checkIfIsLoggedIn())
  }, [])

  return (
    <div className="App">

      <Suspense fallback={<div style={{ display: 'flex', justifyContent: "center", alignItems: "center", width: '100vw', height: '100vh' }} >
        <Spinner size={30} color="#1652f0" />

      </div>}>

        <Routes>
          {/* Admin Routes*/}
          <Route path='/' element={<Home />} />
        </Routes>
      </Suspense>


    </div>

  );
}

export default App;
