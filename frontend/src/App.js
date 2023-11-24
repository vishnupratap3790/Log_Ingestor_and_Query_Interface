import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QueryPage from './QueryPage';
import Loglevel from './components/loglevel'
import Logmessage from './components/logmessage'
import Home from './Home';
import React from "react";
import Logresourceid from './components/Logresourceid';
import Logtraceid from './components/Logtraceid';
import Logspanid from './components/Logspanid';
import Logparentresourceid from './components/Logparentresourceid';
import Logcommit from './components/Logcommit';
import Logtimestamp from './components/Logtimestamp';
import Logmultiplefilter from './components/Logmultiplefilter';
import Logdaterange from './components/Logdaterange';
const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/query-page" element={<QueryPage/>} />
          <Route exact path="/loglevel" element={<Loglevel/>} />
          <Route exact path="/logmessage" element={<Logmessage/>} />
          <Route exact path="/Logresourceid" element={<Logresourceid/>} />
          <Route exact path="/Logtraceid" element={<Logtraceid/>} />
          <Route exact path="/Logspanid" element={<Logspanid/>} />
          <Route exact path="/Logparentresourceid" element={<Logparentresourceid/>} />
          <Route exact path="/Logcommit" element={<Logcommit/>} />
          <Route exact path="/Logtimestamp" element={<Logtimestamp/>} />
          <Route exact path="/Logmultiplefilter" element={<Logmultiplefilter/>} />
          <Route exact path="/Logdaterange" element={<Logdaterange/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;