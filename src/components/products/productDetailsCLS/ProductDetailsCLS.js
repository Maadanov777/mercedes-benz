import React from 'react';
import './productDetailsCLS.css'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const ProductDetailsCLS = () => {
    
     const FIRST_IMAGE = {
        imageUrl: 'https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/cls/coupe-c257-fl/pad/front-comparison/_jcr_content/comparisonslider/par/comparisonslide/exteriorImage.MQ6.12.2x.20210406210938.jpeg'
      };
      const SECOND_IMAGE = {
        imageUrl: 'https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/cls/coupe-c257-fl/pad/front-comparison/_jcr_content/comparisonslider/par/comparisonslide_1819730875/exteriorImage.MQ6.12.2x.20210406210937.jpeg'
      };
    
    return (
        <>
            <div className='productDetailsCLS'>
                <div className='productDetailsCLS__section-1'>
                    <div className='section-1__bg-img'>
                            <img src='https://www.mercedes-benz.ru/passengercars/content-pool/marketing-pool/product-page-stages/cls-coupe-c257-fl-pad-stage/_jcr_content/par/stageelement.MQ6.0.2x.stage.20210407015905.jpeg' width='100%'/>
                    </div>
                    <div className='section-1__content'>
                        <div className='productDetailsCLS__container-section-1'>
                            <div className='section-1__title'>
                                <p>Новый CLS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='productDetailsCLS__section-2'>
                    <div className='productDetailsCLS__container-section-2'>
                        <div className='productDetailsCLS__section-2-top'>
                            <div className='productDetailsCLS__section-2-text'>
                                <div>
                                    <h2>Новая решетка радиатора</h2>
                                </div> 
                                <div>
                                    <p>Сияющая икона</p>
                                    <p>Сравните решетки радиатора Star и AMG нового CLS.</p>
                                </div>
                            </div>
                        </div>
                        <div className='productDetailsCLS__section-2-bottom'>
                            <div className='productDetailsCLS__container-section-2'>
                                <div className='productDetailsCLS__container-section-2-img'>
                                    <ReactBeforeSliderComponent
                                        firstImage={FIRST_IMAGE}
                                        secondImage={SECOND_IMAGE}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsCLS;