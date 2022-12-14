import React, {useEffect, useState} from "react";
import Modal from '../components/Modal';
import ModalContent from '../components/ModalContent';

const SearchResultTile = (props) => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const {data} = props;

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isModalVisible])

  return (
    <div className="result">
      <button onClick={() => setIsModalVisible(true)} className='result__button'>
        <div className="result__image-container">
          {data.primaryImage ? (
            <img className="result__image" src={data.primaryImageSmall} alt={data.title} />
          ) : 'No Image'}
        </div>
      </button>
      <div className="result__meta-data">
        <h3>
          {data.title.length > 150 ? (
            data.title.slice(0, 150) + '...'
          ) : (
            data.title
          )}
        </h3>

        <div>
          <p>{data.artistDisplayName || data.country}</p>
          <p>{data.objectDate}</p>
        </div>
      </div>
      {isModalVisible && (
        <Modal onModalClose={() => setIsModalVisible(false)}>
          <Modal.Header>{data.title}</Modal.Header>
          <Modal.Body>
            <ModalContent data={data} />
          </Modal.Body>
          <Modal.Footer>
            <Modal.Footer.CloseBtn>Close</Modal.Footer.CloseBtn>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  )
}

export default SearchResultTile;