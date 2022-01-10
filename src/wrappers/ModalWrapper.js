import React from 'react';

import styles from '../assets/scss/componentsStyles/Modal.module.scss';

const ModalWrapper = ({ children, setIsOpenModalComponent, isOpenModalComponent }) => {
    return isOpenModalComponent ? (
        <div
            id="overlay"
            className={styles.modalBackground}
            onClick={function (e) {
                if (e.target.id !== 'overlay') return;
                setIsOpenModalComponent(false);
            }}
        >
            {children}
        </div>
    ) : null;
};

export default ModalWrapper;
