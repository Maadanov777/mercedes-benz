import React, { useContext, useEffect } from 'react';
import './productDetail.css'
import ReactPlayer from "react-player";
import { productsContext } from '../../../contexts/ProductContext';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';


const ProductDetails = () => {
    const {currentProduct , getCurrentProduct} = useContext(productsContext)
    
    let id = useParams().id
    console.log(id)
    useEffect(() => {
       getCurrentProduct(id)
    }, [])

    return (
        <>
        {currentProduct ?
        <div className='productDetails'>
            <div className='productDetails__section-1'>
                <div className='productDetails__section-1__bg-img'>
                    <img src={currentProduct.bg_image} width='100%'/>
                </div>
                <div className='productDetails__section-1__container'>
                    <div className='productDetails__section-1__title'>
                        <p>Ваша личная вселенная</p>
                        <p>Новый</p>
                    </div>
                </div>
            </div>
            <div className='productDetailsCLS__section-2'>
                    <div className='productDetailsCLS__container-section-2'>
                        <div className='productDetails__section-2-top'>
                            <div className='productDetails__section-2-text'>
                                <div>
                                    <h2>Экстерьер</h2>
                                </div> 
                                <div>
                                    <p>Пространство стиля и комфорта</p>
                                    <p>Новый С-Класс – олицетворение современной роскоши. В его спортивном интерьере достойное место занимают инновации. Вертикальный сенсорный экран размером 30,2 см (11,9") на центральной консоли – цифровая доминанта салона. Современные декоративные элементы выдержаны в стилистике прогрессивного дизайна.</p>
                                </div>
                            </div>
                        </div>
                        <div className='productDetails__section-2-bottom'>
                            <div className='productDetails__section-2-video'>
                                <ReactPlayer
                                    width="100%"
                                    height='100%'
                                    url={currentProduct.video}
                                />
                            </div>
                            <div className='productDetails__section-2-details-photo'>
                                <div className='left-section-2-details-photo'>
                                    <img src={currentProduct.exterior.ext_img1} width='100%'/>
                                    <p>Передняя часть с динамичными выступами воздухозаборников.</p>
                                </div>
                                <div className='right-section-2-details-photo'>
                                    <div>
                                        <img src={currentProduct.exterior.ext_img2} width='100%'/>
                                        <p>Атлетичная задняя часть с элементом наружного освещения, разделенным крышкой багажника на две части.</p>
                                    </div>
                                    <div>
                                        <img src={currentProduct.exterior.ext_img3} width='90%'/>
                                        <p>Многоспицевые легкосплавные колесные диски, на заказ.</p>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>
                <div className='productDetailsCLS__section-3'>
                <div className='productDetailsCLS__container-section-2'>
                <div className='productDetails__section-2-top'>
                            <div className='productDetails__section-2-text'>
                                <div>
                                    <h2>Интерьер</h2>
                                </div> 
                                <div>
                                    <p>Начинайте каждый день правильно. </p>
                                    <p>Стремительные линии, спортивные сиденья и высококачественные материалы отделки подчеркивают спортивный, стильный характер нового купе E-Класса. Атмосферный спортивный интерьер переносит восприятие ценности автомобиля на новый эмоциональный уровень и воплощает собой современное представление о роскоши.</p>
                                </div>
                            </div>
                        </div>
                        <div className='productDetails__section-2-bottom'>
                            <div className='productDetails__section-2-details-photo'>
                                <div className='left-section-2-details-photo'>
                                    <img src={currentProduct.interior.int_img1} width='100%'/>
                                    <p>Передняя часть с динамичными выступами воздухозаборников.</p>
                                </div>
                                <div className='right-section-2-details-photo'>
                                    <div>
                                        <img src={currentProduct.interior.int_img2} width='100%'/>
                                        <p>Атлетичная задняя часть с элементом наружного освещения, разделенным крышкой багажника на две части.</p>
                                    </div>
                                    <div>
                                        <img src={currentProduct.interior.int_img3} width='90%'/>
                                        <p>Многоспицевые легкосплавные колесные диски, на заказ.</p>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>
        </div>
        :
        <CircularProgress/>
    }
    </>
    );
};

export default ProductDetails;