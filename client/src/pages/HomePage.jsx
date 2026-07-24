import React, { useState } from 'react';
import "../components/styles/HomePageStyle.css"
import { useNavigate } from 'react-router-dom';
import Header from '../components/layouts/Header';


const products = [
    {
        id: 1,
        name: "NMD_R1 Shoes",
        price: "$130",
        category: "Women's Originals",
        colors: "14 colors",
        image: "https://placehold.co/300x300/eeeeee/8f8f8f?text=NMD_R1",
    },
    {
        id: 2,
        name: "Ultraboost 19 Shoes",
        price: "$180",
        category: "Women's Running",
        colors: "16 colors",
        image: "https://placehold.co/300x300/eeeeee/c9c9c9?text=Ultraboost+19",
    },
    {
        id: 3,
        name: "Continental Vulc Shoes",
        price: "$65",
        category: "Women's Originals",
        colors: "8 colors",
        image: "https://placehold.co/300x300/eeeeee/3d3592?text=Continental+Vulc",
    },
    {
        id: 4,
        name: "Nizza Shoes",
        price: "$70",
        category: "Women's Originals",
        colors: "3 colors",
        image: "https://placehold.co/300x300/eeeeee/1a1a1a?text=Nizza",
    },
    {
        id: 5,
        name: "Daily 2.0 Shoes",
        price: "$60",
        category: "Women's Originals",
        colors: "1 color",
        image: "https://placehold.co/300x300/eeeeee/2b2b2b?text=Daily+2.0",
    },
    {
        id: 6,
        name: "Ultraboost Shoes",
        price: "$180",
        category: "Women's Originals",
        colors: "3 colors",
        image: "https://placehold.co/300x300/eeeeee/2b2b2b?text=Ultraboost",
    },
    {
        id: 7,
        name: "Continental Shoes",
        price: "$75",
        category: "Women's Originals",
        colors: "6 colors",
        image: "https://placehold.co/300x300/eeeeee/1a1a1a?text=Continental",
    },
    {
        id: 8,
        name: "3MC Vulc Shoes",
        price: "$85",
        category: "Women's Originals",
        colors: "6 colors",
        image: "https://placehold.co/300x300/eeeeee/1a1a1a?text=3MC+Vulc",
    },
];

function HomePage(props) {


    return (
        <div className="home">
           

            <section className="hero">
                <div className="hero-content">
                    <h1>New Season, No Limits.</h1>
                    <p>Inspired by the Beard. Harden Vol. 4 Barbershop is available now.</p>
                    <div className="hero-buttons">
                        <button className="btn btn-white">
                            SHOP HARDEN VOL. 4 <span className="chevron">&gt;</span>
                        </button>
                        <button className="btn btn-white">
                            LEARN MORE <span className="chevron">&gt;</span>
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <img
                        src="https://placehold.co/700x520/0d0d0d/555555?text=Basketball+Player"
                        alt="Basketball player dunking"
                    />
                </div>
            </section>

            <section className="fall-sale">
                <h2>FALL SALE</h2>
                <p>
                    Get 20% off full price apparel, footwear and accessories with promo code
                    FALLSALE through 10/24. Exclusions apply.
                </p>
                <div className="fall-sale-buttons">
                    <button className="btn btn-black">
                        SHOP MEN <span className="chevron">&gt;</span>
                    </button>
                    <button className="btn btn-black">
                        SHOP WOMEN <span className="chevron">&gt;</span>
                    </button>
                </div>
            </section>

            <section className="feature-grid">
                <div className="feature-block classics">
                    <img
                        src="https://placehold.co/600x480/cfc3b0/8a7f6a?text=Home+of+Classics"
                        alt="Home of classics"
                    />
                    <div className="feature-overlay top-left">
                        <h3>
                            HOME OF
                            <br />
                            CLASSICS
                        </h3>
                        <button className="btn btn-black small">
                            SHOP NOW <span className="chevron">&gt;</span>
                        </button>
                    </div>
                </div>
                <div className="feature-block harden">
                    <img
                        src="https://placehold.co/760x480/9aa3a6/4d5457?text=Harden+Vol.+4"
                        alt="Harden Vol 4 shoe"
                    />
                    <div className="feature-overlay bottom-left">
                        <h3>HARDEN VOL. 4</h3>
                        <p>James Harden's latest signature shoe</p>
                        <button className="btn btn-black small">
                            SHOP HARDEN VOL. 4 <span className="chevron">&gt;</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="all-products">
                <h2>ALL PRODUCTS</h2>
                <div className="filter-bar">
                    <div className="filter-item">
                        <button className="filter-toggle">
                            GENDER <span className="caret">⌄</span>
                        </button>



                    </div>
                    <div className="filter-item">
                        <button className="filter-toggle" >
                            PRICE <span className="caret">⌄</span>
                        </button>



                    </div>
                    <div className="filter-item">
                        <button className="filter-toggle">
                            CATEGORY <span className="caret">⌄</span>
                        </button>



                    </div>
                    <div className="filter-item">
                        <button className="filter-toggle">
                            COLLECTION <span className="caret">⌄</span>
                        </button>


                    </div>
                    <div className="filter-item">
                        <button className="filter-toggle more">
                            MORE <span className="caret">⌄</span>
                        </button>
                    </div>
                </div>

                <div className="product-grid">
                    {products.map((p) => (
                        <div className="product-card" key={p.id}>
                            <div className="product-image">
                                <img src={p.image} alt={p.name} />
                            </div>
                            <div className="product-info">
                                <div className="product-name-price">
                                    <span className="product-name">{p.name}</span>
                                    <span className="product-price">{p.price}</span>
                                </div>
                                <div className="product-meta">
                                    {p.category} <span className="dot">·</span> {p.colors}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="more-wrap">
                    <button className="more-btn">More</button>
                </div>
            </section>
        </div>
    );
}

export default HomePage;