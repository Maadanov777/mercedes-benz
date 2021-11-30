import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductContext';

const EditProduct = ({item}) => {
    const {editProduct} = useContext(productsContext)
    const [editedData, setEditedData] = useState(item)


    function handleValue(e) {
        let newProduct = {
          ...editedData,
        }
        newProduct[e.target.name] = e.target.value
        setEditedData(newProduct)
      }

      function handleAdd() {
        editProduct(editedData.id, editedData)
      }

    return (
        <div>
            {item ? 
            (<div className='modalAdd'>
            <h2>Основные данные</h2>
            <input placeholder='КЛАСС' value={editedData.class} name='class' onChange={(e) => handleValue(e)}/>
            <input placeholder='МОДЕЛЬ'value={editedData.model} name='model' onChange={(e) => handleValue(e)} />
            <input placeholder='ЦЕНА' value={editedData.price} name='price' onChange={(e) => handleValue(e)} />
            <h2>Видео</h2>
            <input placeholder='ВИДЕО' value={editedData.video} name='video' onChange={(e) => handleValue(e)} />
            <h2>Главные изображения</h2>
            <input placeholder='ГЛАВНОЕ ИЗОБРАЖЕНИЕ' value={editedData.image} name='image' onChange={(e) => handleValue(e)} />
            <input placeholder='ИЗОБРАЖЕНИЕ ФОНА' value={editedData.bg_image} name='bg_image' onChange={(e) => handleValue(e)} />
            <h2>Изображения интерьера</h2>
            <input placeholder='ИНТЕРЬЕР 1' value={editedData.int_img1} name='int_img1' onChange={(e) => handleValue(e)} />
            <input placeholder='ИНТЕРЬЕР 2' value={editedData.int_img1}  name='int_img2' onChange={(e) => handleValue(e)} />
            <input placeholder='ИНТЕРЬЕР 3' value={editedData.int_img1} name='int_img3' onChange={(e) => handleValue(e)} />
            <h2>Изображения экстерьера</h2>
            <input placeholder='ЭКСТЕРЬЕР 1' value={editedData.exterior.ext_img1} name='ext_img1' onChange={(e) => handleValue(e)} />
            <input placeholder='ЭКСТЕРЬЕР 2' value={editedData.exterior.ext_img1} name='ext_img2' onChange={(e) => handleValue(e)} />
            <input placeholder='ЭКСТЕРЬЕР 3' value={editedData.exterior.ext_img1} name='ext_img3' onChange={(e) => handleValue(e)} />
            <button onClick={handleAdd}>ДОБАВИТЬ</button>
            </div>)
 : (<h1>Loading</h1>)}
        </div>
    );
};

export default EditProduct;