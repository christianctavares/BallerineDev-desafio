import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import './Modal.css'
import DefaultUser from './DefaultUser.jpeg'

const Form = styled.form`
max-width: 700px;
padding: 2rem;
box-sizing: border-box;
background-color: #1d1d1;
`;

const FormField = styled.div`
    display: flex;
    margin: 0 0 1rem 0;
`

const Label = styled.label`
padding: 0.2rem;
box-sizing: border-box;
justify-content: space-between;
font-size: 1.1rem;
text-align: left;
`

const Input = styled.input`
    border: 2px solid #aaa;
    border-radius: 30px;
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 1.1rem;
    background-color: white
`

const Button = styled.button`
            border: 2px solid #aaa;
            border-radius: 30px;
            width: 50%;
            padding: 0.5rem;
            box-sizing: border-box;
            justify-content: space-between;
            font-size: 1.1rem;
            cursor: pointer;
    `
function AddDev(props) {

    const [showModal, setShowModal] = useState(false);
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [github, setGitHub] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [imgUrl, setImgUrl] = useState(DefaultUser)

    const onFormSubmit = (e) => {
        e.preventDefault()
        const newCard = {id:props.quantidadesDev + 1, nome: nome, imgUrl: imgUrl, cargo: cargo, github: github, linkedin: linkedin }
        props.onSubmitCard(newCard)
        setShowModal(false)
    }

    const handleOpenModal = () => {
        setNome('')
        setCargo('')
        setGitHub('')
        setLinkedin('')
        setImgUrl('')
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const animation = useSpring({
        config: {
            duration: 350
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });


    return (

        <div>
            <button className='addDev-button' onClick={handleOpenModal} className="btn btn-add"><span style={{ backgroundColor: '#27AE60', color: '#ffffff' }}>Adicionar Desenvolvedor</span></button>
            <ReactModal
                isOpen={showModal}
                className="Modal"
                overlayClassName="Overlay"
                onRequestClose={handleCloseModal}
                ariaHideApp={false}
            >
                <animated.div style={animation}>
                    <div >
                        <h1 style={{ backgroundColor: '#343333' }}>Adicionar Desenvolvedor</h1>
                        <Form onSubmit={onFormSubmit}>
                            <FormField>
                                <Label>Nome:</Label>
                                <Input
                                    value={nome}
                                    onChange={
                                        (e) => {
                                            setNome(e.target.value)
                                        }
                                    }
                                    required />
                            </FormField>
                            <FormField>
                                <Label for="avatar-input">Avatar:</Label>
                                <Input
                                    value={imgUrl}
                                    onChange={(e) => setImgUrl(e.target.value)}
                                    type="text"
                                    name="avatar-input"
                                    required />
                            </FormField>
                            <FormField>
                                <Label>Cargo</Label>
                                <Input
                                    value={cargo}
                                    onChange={(e) => setCargo(e.target.value)}
                                    type="text"
                                    name="cargo-input"
                                    required />
                            </FormField>
                            <FormField>
                                <Label>GitHub</Label>
                                <Input
                                    value={github}
                                    onChange={(e) => setGitHub(e.target.value)}
                                    type="text"
                                    name="github-input"
                                    required />
                            </FormField>
                            <FormField>
                                <Label>Linkedin</Label>
                                <Input
                                    value={linkedin}
                                    onChange={(e) => setLinkedin(e.target.value)}
                                    type="text"
                                    name="linkedin-input"
                                    required />
                            </FormField>
                            <FormField>
                                <Button style={{ backgroundColor: 'white' }} value="Sign Up" onClick={handleCloseModal}>Cancelar</Button>
                                <Button style={{ backgroundColor: '#16b95a' }} value="Sign Up" >Adicionar</Button>
                            </FormField>
                        </Form>
                    </div>
                </animated.div>
            </ReactModal>
        </div>
    );
}

export default AddDev;
