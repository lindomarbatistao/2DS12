import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useNavigate } from 'react-router-dom'
import './styles.css'


export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="home-container">
            <Header />
            <div className="body_home">
                <h1>Home</h1>
                <button className="button" onClick={() => navigate('/teacher')}>Teachers</button>
                <button className="button" onClick={() => navigate('/subject')}>Subjects</button>
            </div>
            <Footer />
        </div>
    )
}