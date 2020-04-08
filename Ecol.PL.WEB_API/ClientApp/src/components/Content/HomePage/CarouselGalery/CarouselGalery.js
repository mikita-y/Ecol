import React from 'react';
import './CarouselGalery.css'

export default function CarouselGalery(){
    return (
        <div id="carousel" className="carousel slide carousel-fade d-inline-block" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="img-fluid" src="/images/pictures/carousel_img_1.jpg" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid" src="/images/pictures/carousel_img_2.jpg" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid" src="/images/pictures/carousel_img_3.jpg" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Предыдущий</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Следующий</span>
            </a>
        </div>
    )
}