import React from 'react';

function FlowerCard({ id, image, altText,name, price, handleClick }) {
    return (
        <div className="flower-card" id={id}>
            <img src={image} alt={altText} className='flowers' />
            <span>
                 <span className="flower-card-name">{name}</span>
                 <span className='price_catalog'>{price}</span> руб
            </span>
            <button type="button" className='btn_input mt-2'
                    onClick={() => handleClick(image, altText,id,name, price)}>
                Выбрать
            </button>
        </div>
    );
}

export default FlowerCard;
