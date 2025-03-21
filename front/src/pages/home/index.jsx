import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useNavigate } from 'react-router-dom'
import './styles.css'


export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="container_home">
            <Header />
            <div className="body_home">
                <h1>Home</h1>
                <button onClick={() => navigate('/teacher')}>Teachers</button>
                <button onClick={() => navigate('/subjects')}>Subjects</button>
            </div>
            <Footer />
        </div>
    )
}