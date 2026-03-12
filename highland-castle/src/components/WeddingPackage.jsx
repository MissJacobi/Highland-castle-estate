import React from "react";

const WeddingPackage = ({ title, price, guests, features, highlights}) =>{
    return(
        <div className={`package-card ${highlights ? 'promoted' : ''}`}>
            {highlights && <div className="recommended-badge">Most Popular</div>}
            <h3>{title}</h3>
            <div className="price-box">
                <span className="starting-from">Starting form</span>
                <span className="price-value">{price}</span>
            </div>
            <p className="guest-limit">{guests}</p>
            <ul className="feature-list">
                {features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
        </div>
    );
};

export default WeddingPackage;