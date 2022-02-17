import React from 'react';
import CardList from '../Cards/CardList';
import AddDev from '../Modal/AddDev';
import Blobs from './Blobs.png'
import './TabelDev.css'

function TabelDev(props) {
    return (
        <div>
            <img className='blobs' style={{ position: 'absolute',overflow:'hidden', height: '90vh'}}  src={Blobs}></img>
            <div>
            <input style={{color:'black'}} onChange={(e) => props.onSearchDev(e.target.value)} className='input-busca' type="text" placeholder="Buscar Dev"></input>
            {/* <button className='addDev-button' onClick={() => props.onSubmitCard({ id: 5, title: 'CARD 1', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/200' })} className="btn btn-add"><span style={{backgroundColor: '#27AE60', color:'#ffffff'}}>Adicionar Desenvolvedor</span></button> */}
            <AddDev setCardsData={props.setCardsData} quantidadesDev={props.quantidadesDev} onSubmitCard={props.onSubmitCard}/>
            </div>
            <section className="container">
                <CardList filteredDevs={props.filteredDevs}  onSubmitUpdateDev={props.onSubmitUpdateDev} onSubmitDeleteDev={props.onSubmitDeleteDev} cardsData={props.cardsData}/>
            </section>
        </div>
    );
}

export default TabelDev;