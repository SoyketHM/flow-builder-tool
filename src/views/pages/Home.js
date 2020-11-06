import React, { useState } from 'react';
import Card from '../components/card';
import Modal from '../components/modal';

function Home() {
    const [cards, setCards] = useState([{ id: 1, text: 'Add Text', picture: [] }]);
    const [card, setCard] = useState({});
    const [showModal, setShowModal] = useState(false);

    const addcard = () => {
        let cardId = cards.length + 1;
        setCards([...cards, { id: cardId, text: 'Add Text', picture: [] }]);
        // setShowModal(true)
        openModal(cardId);
    }
    const openModal = (id) => {
        let text = '';
        let picture = [];
        let index = cards.findIndex(el => el.id === id);
        if (index !== -1) {
            text = cards[index].text;
            picture = cards[index].picture;
        }
        setCard({ id, text, picture });
        setShowModal(!showModal)
    }
    const handleChange = (e) => {
        let newCard = { id: card.id, picture: card.picture };

        if (e.target.type === 'text') newCard.text = e.target.value;
        else newCard.text = card.text;

        setCard(newCard);
        let index = cards.findIndex(el => el.id === card.id);

        if (index !== -1) {
            if (e.target.type === 'text') {
                cards[index].text = e.target.value;
            } else {
                let reader = new FileReader();
                reader.onloadend = () => {
                    cards[index].picture = [...card.picture, {
                        file: e.target.files[0],
                        imagePreviewUrl: reader.result
                    }]
                }
                reader.readAsDataURL(e.target.files[0])
            }
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
