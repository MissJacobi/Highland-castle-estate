import React from "react";
import RoomSection from "../components/RoomSection";
import WeddingPackage from "../components/WeddingPackage";

export default function Weddings({ openContact }){
    return(
        <div className="suites-container">
            <RoomSection
            number="The Vows"
            title="A Ceremony Under the Chandeliers"
            description="Exchange your vows in our breathtaking Rose Hall. With panoramic views of the misty highlands and golden sunlight streaming through floor-to-ceiling windows, 
            your ceremony will be as timeless as the castle walls themselves."
            details={[]}
            images={["images/wedding reception.png"]}
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
            number="The Celebration"
            title="Feasts Fit for Royalty"
            description="Following your ceremony, invite your guests to a grand banquet. 
            Our dining hall is transformed into a floral sanctuary where world-class cuisine meets old-world elegance."
            details={[]}
            images={["images/wedding dining.png"]}
            />
        </div>
    );
}