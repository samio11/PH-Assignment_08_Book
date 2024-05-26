import React from 'react';
import { getWishInfo } from './localStorageLogic';

const WishedListBooks = () => {
    const wishedBook = getWishInfo()
    console.log(wishedBook);
    return (
        <div>
            this is Wished list Books
        </div>
    );
};

export default WishedListBooks;