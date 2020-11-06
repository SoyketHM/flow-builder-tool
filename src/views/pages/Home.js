import React, { useState } from 'react';
import Card from '../components/card';
import Modal from '../components/modal';

function Home() {
    const [cards, setCards] = useState([{ id: 1, text: 'Add Text' }]);
    const [card, setCard] = useState({});
    const [showModal, setShowModal] = useState(false);
    const addcard = () => {
        let cardId = cards.length + 1;
        setCards([...cards, { id: cardId, text: 'Add Text' }]);
        // setShowModal(true)
        openModal(cardId);
    }
    const openModal = (id) => {
        let text = '';
        let index = cards.findIndex(el => el.id === id);
        if (index !== -1) {
            text = cards[index].text;
        }
        setCard({ id, text });
        setShowModal(!showModal)
    }
    const handleChange = (e) => {
        let newCard = {
            id: card.id,
            text: e.target.value
        };
        setCard(newCard);
        let index = cards.findIndex(el => el.id === card.id);
        if (index !== -1) {
            cards[index].text = card.text;
        }
    }
    return (
        <div className="container" style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
                <Card cards={cards} openModal={openModal} setShowModal={setShowModal}></Card>
                <Modal card={card} handleChange={handleChange} setShowModal={setShowModal} setCard={setCard} showModal={showModal}></Modal>
                
            </div>

            <i className="fas fa-plus-circle" style={{ color: "#008000", fontSize: 50, margin: 20 }} onClick={addcard}></i>


        </div >
    )
}

export default Home
