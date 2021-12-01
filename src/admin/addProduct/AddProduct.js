import React, { useContext, useState } from 'react';
import { productsContext } from '../../contexts/ProductContext';
import './addProduct.css'

const AddProduct = () => {
    const { addProduct } = useContext(productsContext)
    const [car, setCar] = useState({})
    const [exterior, setExterior] = useState({})
    const [interior, setInterior] = useState({})


    function handleExteriorInput(e) {
        let obj = {
            ...exterior,
                [e.target.name]: e.target.value,

        }
        setExterior(obj)
    }

    function handleInteriorInput(e) {
        let obj = {
                ...interior,
                [e.target.name]: e.target.value,

        }
        setInterior(obj)
    }

    function handleMainInput (e) { 
        let obj = {
            ...car,
            [e.target.name]: e.target.value,
        }
        setCar(obj)
    }

    function handleAdd() {
        let obj = {
            ...car,
            exterior,
            interior,
        }
        addProduct(obj)
}
    return (
        <div className='modalAdd'>
            <h2>Основные данные</h2>
            <input placeholder='КЛАСС' name='class' onChange={handleMainInput}/>
            <input placeholder='МОДЕЛЬ' name='model' onChange={handleMainInput}/>
            <input placeholder='ЦЕНА' name='price' onChange={handleMainInput}/>
            <h2>Видео</h2>
            <input placeholder='ВИДЕО' name='video' onChange={handleMainInput}/>
            <h2>Главные изображения</h2>
            <input placeholder='ГЛАВНОЕ ИЗОБРАЖЕНИЕ' name='image' onChange={handleMainInput}/>
            <input placeholder='ИЗОБРАЖЕНИЕ ФОНА' name='bg_image' onChange={handleMainInput}/>
            <h2>Изображения интерьера</h2>
            <input placeholder='ИНТЕРЬЕР 1' name='int_img1' onChange={handleInteriorInput}/>
            <input placeholder='ИНТЕРЬЕР 2' name='int_img2' onChange={handleInteriorInput}/>
            <input placeholder='ИНТЕРЬЕР 3' name='int_img3' onChange={handleInteriorInput}/>
            <h2>Изображения экстерьера</h2>
            <input placeholder='ЭКСТЕРЬЕР 1' name='ext_img1' onChange={handleExteriorInput}/>
            <input placeholder='ЭКСТЕРЬЕР 2' name='ext_img2' onChange={handleExteriorInput}/>
            <input placeholder='ЭКСТЕРЬЕР 3' name='ext_img3' onChange={handleExteriorInput}/>
            <button onClick={handleAdd}>ДОБАВИТЬ</button>
        </div>
    );
};

export default AddProduct;