import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from "./pages/login";
import Home from "./pages/home";
import Teacher from "./pages/teachers";
import Subject from "./pages/subjects";

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/subject" element={<Subject/>}/>
      </Routes>
    </Router>
  )
}