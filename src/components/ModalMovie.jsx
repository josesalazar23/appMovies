import React from "react";
import ReactModal from "react-modal";
import "../styles/index.css"


ReactModal.setAppElement('#app-root');

const ModalMovie = ({ modalShow, movieTitle, movieImg, movieInfo, setModalShow, movieDate }) => {
    const closeModal = () => {
      setModalShow(false);
    };
  
    return (
      <>
        <div className="modal">
          <ReactModal
            isOpen={modalShow}
            onRequestClose={closeModal}
            className="modal-content"
          >
              <div className="containerModal">
                <div className="modal-img">
                  <img src={`https://image.tmdb.org/t/p/w500/${movieImg}`} alt={movieTitle} />
                </div>
                <div className="modal-info">
                  <h2 className="modal-title">{movieTitle}</h2>
                  <h3 className="modal-description">{movieDate}</h3>
                  <h5 className="modal-description">{movieInfo}</h5>
                </div>
              </div>
            <button className="modal-close-btn" onClick={closeModal}>Cerrar Modal</button>
          </ReactModal>
        </div>
      </>
    )
  }
  
  export default ModalMovie;






