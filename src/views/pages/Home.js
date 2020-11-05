import React, { useState } from 'react';

function Home() {
    const [cards, setCards] = useState([{ id: 1, text: 'Add Text' }]);
    const [showModal, setShowModal] = useState(false);
    const addcard = () => {
        setCards([...cards, { id: cards.length + 1, text: 'Add Text' }]);
        setShowModal(true)
    }
    return (
        <div className="container">
            <button className="btn btn-success" onClick={addcard} >+</button>
            <div className="card" style={{ width: 300, margin: 20, cursor: "pointer" }} onClick={() => setShowModal(true)}>
                <div className="card-header">
                    <i className="fas fa-play-circle" style={{ color: "#16bf16", fontSize: 24 }}></i>
                    <p>Starting Step</p>
                </div>
                <div className="card-body">Add trigger</div>
                <div className="card-footer" style={{ fontSize: 12, textAlign: "right" }}>The First Step</div>
            </div>
            {cards.map((card, index) => (
                <div className="card" style={{ width: 300, margin: 20, cursor: "pointer" }} key={card.id} onClick={() => setShowModal(true)}>
                    <div className="card-header d-flex flex-column">
                        <i className="fab fa-facebook-messenger" style={{ color: "#18dede", fontSize: 24 }}></i>
                        <span style={{ fontSize: 12 }}>Feedback</span>
                        <p>Send Message</p>
                    </div>
                    <div className="card-body">{card.text}</div>
                    <div className="card-footer" style={{ fontSize: 12, textAlign: "right" }}>Next Step</div>
                </div>
            ))}
            { showModal ? (
                <div className="modal" style={{ display: "block" }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>

                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-
                                    dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}



        </div>
    )
}

export default Home
