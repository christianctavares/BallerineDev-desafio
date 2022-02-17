import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import LandArea from './components/LandArea/LandArea';
import TabelDev from './components/TabelDev/TabelDev';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom';
import ModalExample from './components/Modal/AddDev';

function App() {
  const cardsDataCargaInicial = [
    { id: 1, title: 'CARD 1', nome: 'Clark Kent', cargo: 'Fotografo', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9_xNr6A0tuw5N5Xh6rZqY_8qMT2uvwrxq_u4tUbQW1EhRqootv5AWlVU01ARsZqcX_Y&usqp=CAU' },
    { id: 2, title: 'CARD 2',linkedin: 'https://www.linkedin.com/in/christian-tavares13/', github: 'https://github.com/christianctavares', nome: 'Christian', cargo: 'Estagiario na Globo', imgUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQFbCsVl4qHxzw/profile-displayphoto-shrink_200_200/0/1635446814879?e=1650499200&v=beta&t=aRLtqlb5Twci_ZcvWw9VJkKbl2gMTYP6yA5DZ8o5nLs' },
    { id: 3, title: 'CARD 3', nome: 'Peter Parker', cargo: 'Fotografo', imgUrl: 'https://static1.purebreak.com.br/articles/7/86/10/7/@/322666-de-homem-aranha-longe-de-casa-peter-200x200-2.jpg' },
    { id: 4, title: 'CARD 4', nome: 'Tony Stark', cargo: 'Herdeiro', imgUrl: 'https://www.personality-database.com/profile_images/148.png' },
  ]

  const [cardsData, setCardsData] = useState(cardsDataCargaInicial)
  const [filteredDevs, setFilteredDevs] = useState(cardsData)

  const [lista, setLista] = useState(cardsData);
  

    useEffect(() => {
        if(filteredDevs === []){
            setLista(cardsData)
        }
        setLista(filteredDevs)
    },[filteredDevs])

  const onSubmitCard = (card) => {
    const newList = [...cardsData, card]
    setCardsData(newList)
    setFilteredDevs(newList)
    setLista(newList)
  }

  const onSubmitDeleteDev = (id) => {
    const newList = cardsData.filter((card) => card.id !== id)
    setCardsData(newList)
    setFilteredDevs(newList)
    setLista(newList)
  }

  const onSearchDev = (name) => {
    const devs = cardsData;

    if (name === '') {
      setCardsData(cardsData)
      setFilteredDevs(cardsData)

    } else {
      const devsFiltered = devs.filter(dev => dev.nome.toLowerCase().includes(name.toLowerCase()));
      setFilteredDevs(devsFiltered)
    }


  }

  const onSubmitUpdateDev = (user) => {
    debugger
    const userId = cardsData.findIndex((obj => obj.id === user.id))
    const newList = prev => prev.map(item => (item.id === user.id ?
      cardsData[userId].nome = { nome: user.nome, cargo: user.cargo, github: user.github, linkedin: user.linkedin, imgUrl: user.imgUrl } : item))
    setCardsData(newList)
    setFilteredDevs(newList)
    setLista(newList)

  }


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route path='/' exact="true" component={LandArea} />
        <Route path='/tabelDev'>
          <TabelDev setCardsData={setCardsData}  onSearchDev={onSearchDev} quantidadesDev={cardsData.length} onSubmitUpdateDev={onSubmitUpdateDev} onSubmitDeleteDev={onSubmitDeleteDev} onSubmitCard={onSubmitCard} filteredDevs={filteredDevs} cardsData={lista} />
        </Route>
        <Route path='/teste'>
          <ModalExample />
        </Route>
      </BrowserRouter>



    </div>
  );
}

export default App;
