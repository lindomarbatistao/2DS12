import React, {useEffect, useState} from "react";
import './styles.css'

const ModalProfessores = ({
    isOpen,
    onClose,
    professorSelecionado,
    criar,
    atualizar
})=>{
    if(!isOpen) return null

    const [id, setId] = useState(professorSelecionado?.id || '')
    const [ni, setNi] = useState(professorSelecionado?.ni || '')
    const [nome, setNome] = useState(professorSelecionado?.nome || '')
    const [email, setEmail] = useState(professorSelecionado?.email || '')
    const [cel, setCel] = useState(professorSelecionado?.cel || '')
    const [ocup, setOcup] = useState(professorSelecionado?.ocup || '')

    useEffect(()=>{
        if(professorSelecionado){
            setId(professorSelecionado.id || '')
            setNi(professorSelecionado.ni || '')
            setNome(professorSelecionado.nome || '')
            setEmail(professorSelecionado.email || '')
            setCel(professorSelecionado.cel || '')
            setOcup(professorSelecionado.ocup || '')
        }else{
            setId('')
            setNi('')
            setNome('')
            setEmail('')
            setCel('')
            setOcup('')
        }
    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const novoProfessor = {ni, nome, email, cel, ocup}
        if(professorSelecionado){
            atualizar({...professorSelecionado})
        }else{
            criar(novoProfessor)
        }
    }

    return(
        <div className="modal-modal">
            <div className="container-modal">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{professorSelecionado ? "Editar" : "Cadastrar"}</h2>
                <div className="body-modal">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="ni-modal"
                            value={ni}
                            placeholder="ni"
                            onChange={(e)=>setNi(e.target.value)}
                        />
                        <input
                            className="nome-modal"
                            value={nome}
                            placeholder="nome"
                            onChange={(e)=>setNome(e.target.value)}
                        />
                        <input
                            className="email-modal"
                            value={email}
                            placeholder="email"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <input
                            className="cel-modal"
                            value={cel}
                            placeholder="cel"
                            onChange={(e)=>setCel(e.target.value)}
                        />
                        <input
                            className="ocup-modal"
                            value={ocup}
                            placeholder="ocup"
                            onChange={(e)=>setOcup(e.target.value)}
                        />
                        <button type="submit">Salvar</button> 
                    </form>
                </div>
            </div>
        </div>
    )
}


export default ModalProfessores
