import React from "react";
import RoomSection from "../components/RoomSection";
import WeddingPackage from "../components/WeddingPackage";

export default function Weddings({ openContact }){
    return(
        <div className="suites-container">
            <RoomSection
            number="The Emerald Ceremony"
            title="An Affirmation In Jewel Tones"
            description="Begin your journey in the majestic Smaragd Hall. Surrounded by rich jewel tones and warm gold accents, exchange your vows under the soft glow of historic chandeliers. 
            The hall's timeless Royal Core design creates an atmosphere of dignified romance, making your affirmation a moment of grand elegance that will be cherished forever."
            details={[]}
            images={["images/wedding arch 8k.jpg","images/wedding hall 8k.jpg"]}
            reverse={true}
            />
            <section className="wedding-offers">
                <div className="package-grid">

                    <WeddingPackage
                    title="Silver"
                    price=" £4,500"
                    guests="Up to 50 guests"
                    features={["Ceremony in Rose Hall", "3-Course Dinner", "Executive Suite"]}
                    />
                    <WeddingPackage
                    title= "Gold"
                    price= " £7,500"
                    guests= "Up to 80 guests"
                    features= {["Exclusive Use", "5-Course Feast", "Floral Arrangements"]}
                    highlights= {true}
                    />
                    <WeddingPackage
                    title= "Platinum"
                    price= " £12,000"
                    guests= "Up to 120 guests"
                    features= {["Full Castle Hire", "Fireworks Display", "Spa Access"]}
                    />

                </div>
                <div className="package-contact-wrapper">
                    <button className="main-inquiry-btn" onClick={openContact}>Inquire About Package</button>
                </div>
            </section>
            <RoomSection
            number="The Grand Reception"
            title="A Symphony In Dusty Rose"
            description="Celebrate your love in the breathtaking Rose Hall. 
            Under celestial frescoes and crystal chandeliers, world-class cuisine is served amidst shimmering gold and pink peonies. 
            This is a grand banquet where Royal Core elegance meets timeless romance, creating a wedding feast to be remembered forever."
            details={[]}
            images={["images/close up rose hall 8k.jpg","images/rose hall 8k.jpg"]}
            />
        </div>
    );
}