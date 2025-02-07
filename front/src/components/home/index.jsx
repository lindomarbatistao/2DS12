import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa'
import './styles.css'

export default function Home() {
    const [dados, setDados] = useState([])
    const token = localStorage.getItem('token')
    console.log("Token Home", token)

    useEffect(() => {

        if (!token) return;

        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/professores',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                setDados(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [dados])

    const apagar = async (id)=>{
        if (window.confirm("Tem certeza? ")){
            try {
                await axios.delete(`http://127.0.0.1:8000/api/professor/${id}`,
                    {
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                setDados(dados.filter((professor)=>{professor.id !== id}))
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <div className="container_home">
            <body>
                <header>
                    <h1>Lista de professores</h1>
                </header>

                <div className="lista">
                    <table>
                        <thead>
                            <tr>
                                <th>Ações</th>
                                <th>ID</th>
                                <th>NI</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Ocupação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((professor) => (
                                <tr key={professor.id}>
                                    <td>
                                        <FaEdit className="edit" />
                                        <FaTrash className="delete" onClick={()=>apagar(professor.id)}/>
                                    </td>
                                    <td>{professor.id}</td>
                                    <td>{professor.ni}</td>
                                    <td>{professor.nome}</td>
                                    <td>{professor.email}</td>
                                    <td>{professor.tel}</td>
                                    <td>{professor.ocupacao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <footer>
                    <div className="btn1">
                        <FaPlus className="adicionar"/>
                    </div>
                    <div className="pesquisar">
                        <input placeholder="id"/>
                    </div>
                    <div className="btn2">
                        <FaSearch className="procurar" />
                    </div>
                </footer>
            </body>
        </div>
    )
}
