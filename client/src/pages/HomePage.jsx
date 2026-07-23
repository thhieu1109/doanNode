import React, { useState } from 'react';
import "../components/styles/HomePageStyle.css"
import { useNavigate } from 'react-router-dom';


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
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [genderOpen, setGenderOpen] = useState(true);
    const [openFilter, setOpenFilter] = useState("gender");
    const [genderChecks, setGenderChecks] = useState({
        men: false,
        women: true,
        kids: false,
    });

    const toggleGender = (key) => {
        setGenderChecks((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleFilterClick = (name) => {
        if (openFilter === name) {
            setOpenFilter(null);
        } else {
            setOpenFilter(name);
        }
    };

    const loginNavigate = useNavigate();
    const handleLoginClick = () => {
        loginNavigate("/login");
    }

    return (
        <div className="home">
            <header className="navbar">
                <div className="navbar-left">
                    <button
                        className={`hamburger ${mobileNavOpen ? "active" : ""}`}
                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="logo">
                        <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
                            <path d="M2 25L9 9L12 17L6 25H2Z" fill="#000" />
                            <path d="M12.5 25L20 6L23 14L16.5 25H12.5Z" fill="#000" />
                            <path d="M23 25L31 4L34 11L27 25H23Z" fill="#000" />
                        </svg>
                        <span>adidas</span>
                    </div>
                    <nav className={`nav-links ${mobileNavOpen ? "open" : ""}`}>
                        <a href="#men">Men</a>
                        <a href="#women">Women</a>
                        <a href="#kids">Kids</a>
                        <a href="#sports">Sports</a>
                        <a href="#brands">Brands</a>
                        <a href="#release-dates">Release Dates</a>
                    </nav>
                </div>
                <div className="navbar-right">
                    <div className="search-box">
                        <input type="text" placeholder="Search" />
                        <button className="search-btn" aria-label="Search">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="7" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </button>
                    </div>
                    <button className="icon-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        <span>Cart</span>
                    </button>
                    <button className="icon-link" onClick={handleLoginClick}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span>Log in</span>
                    </button>
                   
                </div>
            </header>

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
                        <button className="filter-toggle" onClick={() => handleFilterClick("gender")}>
                            GENDER <span className="caret">⌄</span>
                        </button>
                        {openFilter === "gender" && (
                            <div className="dropdown">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={genderChecks.men}
                                        onChange={() => toggleGender("men")}
                                    />
                                    Men
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={genderChecks.women}
                                        onChange={() => toggleGender("women")}
                                    />
                                    Women
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={genderChecks.kids}
                                        onChange={() => toggleGender("kids")}
                                    />
                                    Kids
                                </label>
                            </div>
                        )}
                    </div>
                    <div className="filter-item">
                        <button className="filter-toggle" onClick={() => handleFilterClick("price")}>
                            PRICE <span className="caret">⌄</span>
                        </button>
                        {openFilter === "price" && (
                            <div className="dropdown">
                                <label>
                                    <input type="checkbox" readOnly />
                                    Under $50
                                </label>
                                <label>
                                    <input type="checkbox" readOnly />
                                    $50 - $100
                                </label>
                                <label>
                                    <input type="checkbox" readOnly />
                                    $100+
                                </label>
                            </div>
                        )}
                    </div>
                    <div className="filter-item">
                        <button className="filter-toggle" onClick={() => handleFilterClick("category")}>
                            CATEGORY <span className="caret">⌄</span>
                        </button>
                        {openFilter === "category" && (
                            <div className="dropdown">
                                <label>
                                    <input type="checkbox" readOnly />
                                    Shoes
                                </label>
                                <label>
                                    <input type="checkbox" readOnly />
                                    Clothing
                                </label>
                                <label>
                                    <input type="checkbox" readOnly />
                                    Accessories
                                </label>
                            </div>
                        )}
                    </div>
                    <div className="filter-item">
                        <button className="filter-toggle" onClick={() => handleFilterClick("collection")}>
                            COLLECTION <span className="caret">⌄</span>
                        </button>
                        {openFilter === "collection" && (
                            <div className="dropdown">
                                <label>
                                    <input type="checkbox" readOnly />
                                    Originals
                                </label>
                                <label>
                                    <input type="checkbox" readOnly />
                                    Running
                                </label>
                            </div>
                        )}
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