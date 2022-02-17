import React from 'react';
import Blobs from './Blobs.png'
import ProgramadorMain from './ProgramadorMain.png'
import './LandArea.css'
import { Link } from 'react-router-dom';

function LandArea() {
    return (
        <div>
            <img alt='Blobs' className='blobs' style={{ position: 'absolute',overflow:'hidden', height: '90vh'}} src={Blobs}></img>
            <section className="container">
                <div className="one">
                    <div className='lado-one'>
                        <h1 className='tituloMenu'>O maior banco de devs do Brasil</h1>
                        <p className='descricaoMenu'>
                            Nao importa se front ou back end, fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.
                        </p>
                        <Link to='/TabelDev' >
                        <button className="button-two"><span>Entre agora</span></button>
                        </Link>
                        <hr style={{ height: 1, border: 'none', backgroundColor: '#27AE60', width: 50, marginTop: 15, marginLeft: 75, position: 'relative' }} />

                    </div>
                </div>
                <div className="two">
                    <img alr='boneco' className='boneco' style={{ position: 'absolute', width: 500, marginTop: 15 }} src={ProgramadorMain}></img>
                    
                </div>
            </section>
        </div>
    );
}

export default LandArea;