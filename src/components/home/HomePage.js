import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../contexts/ProductContext';
import './homePage.css'

const HomePage = () => {
    const {products, getProduct} = useContext(productsContext)

    useEffect(() => {
        getProduct()
    }, [])
    let recommendations = []
    products.forEach((item, index) => {
        if(index > 4)
        recommendations.push(item)
    });

    console.log(recommendations)
    return (<>
            <div className="bg-photo">
                <img src="https://www.mercedes-benz.ru/passengercars/content-pool/marketing-pool/product-page-stages/cla-coupe-c118-stage-design/_jcr_content/par/stageelement.MQ6.0.2x.stage.20201222133348.jpeg" width='100%'/>
            </div>
        <div className='home-page'>
            <div className="home-container">
            <div className="rek-section1">
                <div className='rek-section1__title'>
                    <p>Наши рекомендации</p>
                </div>
            <div className='cards-home'>
                {recommendations ? 
                recommendations.map((item) => (
                <div class="card">
                    <img src={item.image} width='100%'/>
                    <div class="container">
                        <h4><b>Mercedes-Benz {item.class}-Класс</b></h4>
                        <p>{item.model}</p>
                        <button class="button button2">Узнать больше</button>
                    </div>
                </div>
                ))
                : <p>Loading...</p>}   
                </div>
            </div>
            
            <div className='home-map'>
            <div className="home-container">
                    <div className='home-map__title'>
                        <p>Заводы концерна Daimler AG</p>
                    </div>
                    <div className="home-map__map">
                        
                        <img src='https://www.mercedes-benz.ru/passengercars/the-brand/manufacturing/daimler-factory/_jcr_content/hotspotimage/image.MQ6.12.2x.20190918114943.jpeg' width='100%'/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default HomePage;