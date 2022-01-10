import React from 'react';

import BookReader from './BookReader';
import { useModal } from './../context/ModalCtx';

const Modals = () => {

    const { isOpenBookReader } = useModal()

    return (
        <div>
            {isOpenBookReader
                ? <BookReader />
                : null
            }
        </div>
    );
};

export default Modals;