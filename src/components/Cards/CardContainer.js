import { useEffect, useState } from 'react';
import Card from './Card';
import './Card.css'

function CardContainer(props) {
    
    // const [lista, setLista] = useState(props.cardsData);
    // console.log('props.cardsData: ', props.cardsData);

    // useEffect(() => {
    //     console.log('Cheguei aqui');
    //     if(props.filteredDevs === []){
    //         setLista(props.cardsData)
    //         console.log('setLista(lista): ', setLista(lista));
    //     }
    //     setLista(props.filteredDevs)
    // },[props.filteredDevs])
    return (
        <div div className="cards-container" >
            {
                props.cardsData.map((card) => (
                    <Card
                        onSubmitUpdateDev={props.onSubmitUpdateDev}
                        onSubmitDeleteDev={props.onSubmitDeleteDev}
                        id={card.id} nome={card.nome}
                        cargo={card.cargo}
                        github={card.github}
                        linkedin={card.linkedin}
                        title={card.title}
                        content={card.content}
                        imgUrl={card.imgUrl} />
                ))
            }
        </div>
    )



}

export default CardContainer;