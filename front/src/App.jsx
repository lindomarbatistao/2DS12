import React from "react"
import './App.css'

export default function Login(){
  return(
    <div className="container">
      <h1>Login</h1>
      <input
        placeholder="User"
        className="caixa"
      />
      <input
        placeholder="Password"
        className="caixa"
        type="password"
      />
    </div>
  )
}

