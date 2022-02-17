import React from 'react';
import './Card.css'
import CardContainer from './CardContainer';
function CardList(props) {
    // const Card = (props) => (
    //     <div className="card" key={props.key}>
    //         <img src={props.imgUrl}
    //             alt={props.alt || 'Image'} />
    //         <div className="card-content">
    //             <h2>{props.title}</h2>
    //             <p>{props.content}</p>
    //             <div>
    //                 <div className='one-card'>
    //                     <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faLinkedin} />
    //                     <FontAwesomeIcon icon={faLinkedin} />
    //                 </div>
    //                 <div>
    //                     <button className="btn btn-main"><span>Ver mais</span></button>
    //                     <div style={{ paddingLeft: '20px', width: '100%' }}>

    //                         <button style={{ backgroundColor: '#dbb801' }} className="btn btn-small"><span style={{ backgroundColor: '#dbb801', color: '#0E0D0D' }}>Editar</span></button>
    //                         <button style={{ backgroundColor: '#f42626' }} className="btn btn-small"><span style={{ backgroundColor: '#f42626', color: '#0E0D0D' }}>Deletar</span></button>
    //                     </div>
    //                 </div>

    //             </div>

    //         </div>
    //     </div>
    // );

    // const CardContainer = (props) => (
    //     <div className="cards-container">
    //         {
                
    //             props.cardsData.map((card) => (
    //                 <Card key={card.id} title={card.title}
    //                     content={card.content}
    //                     imgUrl={card.imgUrl} />
    //             ))
    //         }
    //     </div>
    // );

    
    return (
        
        <div className="container">
            <CardContainer filteredDevs={props.filteredDevs}   onSubmitUpdateDev={props.onSubmitUpdateDev} onSubmitDeleteDev={props.onSubmitDeleteDev} cardsData={props.cardsData} quantidadesDev={props.quantidadesDev} />
        </div>
    );
}
export default CardList