import React from 'react';

const ImageSubCategory = () => {
    return (
        <div className="subcategory">
            <img className="subcategory__image" src={require(`../../Assets/Images/${img}.jpg`)} alt={category} />
            <h2 className="subcategory__title">{category}</h2>
        </div>
    )
}

export default ImageSubCategory;
