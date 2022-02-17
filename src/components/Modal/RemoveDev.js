import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import './Modal.css'

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
    width: 100%
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
const H1 = styled.h1`
    text-alignment: center !important;
    background-color: rgb(52, 51, 51);
`


function RemoveDev(props) {

    const [showModal, setShowModal] = useState(false);


    const handleOpenModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
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
            <button style={{ backgroundColor: '#f42626', cursor: 'pointer' }} onClick={handleOpenModal} className="btn btn-small"><span style={{ backgroundColor: '#f42626', color: '#0E0D0D' }}>Deletar</span></button>

            <ReactModal
                isOpen={showModal}
                className="Modal"
                overlayClassName="Overlay"
                onRequestClose={handleCloseModal}
                ariaHideApp={false}
            >
                <animated.div style={animation}>
                    <div >
                        <H1 style={{ backgroundColor: '#343333', textAlignment: 'center !important' }}>Deletar Desenvolvedor</H1>
                        <Form onSubmit={onFormSubmit}>
                            <FormField>
                                <Label>Tem certeza que deseja deletar este desenvolvedor?</Label>
                            </FormField>
                            <FormField>
                                <Button style={{ backgroundColor: 'white' }} value="Sign Up" onClick={handleCloseModal}>Cancelar</Button>
                                <Button onClick={() => props.onSubmitDeleteDev(props.id)} style={{ backgroundColor: '#f42626' }} value="Sign Up" >Deletar</Button>
                            </FormField>
                        </Form>
                    </div>
                </animated.div>
            </ReactModal>
        </div>
    );
}

export default RemoveDev;
