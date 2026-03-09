import React from 'react';
import RoomSection from '../components/RoomSection';


export default function Suites() {
  return (
    <div className="suites-container zigzag-layout">
        <RoomSection
        number="Suite No. 01"
        title="Thistle Standard"
        description="A refined retreat inspired by the rugged beauty of the Scottish Highlands. 
            The Thistle Standard offers a perfect blend of traditional charm and modern comfort, 
            featuring soft tartan accents and handcrafted wooden furnishings."
            details={[
                {label: "Size", value: "35 sqm of elegant living space"},
                {label: "Beds", value: "Luxurious Queen Size bed"},
                {label: "View", value: "Overlooking the ancient pine forest"},
                {label: "Amenities", value: "En-suite walk-in shower & artisan coffee station"}
            ]}
            images={[
                "/images/standard room pink.png",
                "/images/standard pink bathroom.png",
                "/images/standard room green.png",
                "/images/standard green bathroon.png"
            ]}
            />

        <RoomSection
        number="Suite No. 02"
        title="Royal Deluxe"
        description="Indulge in the grandeur of our Royal Deluxe suite. This spacious chamber is adorned with original 18th-century cornicing and rich velvet drapes, 
            offering a truly regal atmosphere for those seeking extra space to unwind."
            details={[
                {label: "Size", value: "55 sqm with separate seating area"},
                {label: "Beds", value: "Bespoke King Size canopy bed"},
                {label: "View", value: "Panoramic views of the misty Loch"},
                {label: "Amenities", value: "Freestanding roll-top bath & complimentary decanter of Sherry"}
            ]}
            images={[
                "/images/suite pink.png",
                "/images/suite pink bathroom.png",
                "/images/suite green.png",
                "/images/suite green bathroom.png"
            ]}
            />

        <RoomSection
        number="Suite No. 03"
        title="Monarch Suite"
        description="The crown jewel of the estate. The Monarch Suite occupies the castle’s North Tower, 
            providing an unmatched sense of privacy and prestige. With high ceilings and a private fireplace, 
            it is the ultimate sanctuary for the discerning traveler."
            details={[
                {label: "Size", value: "85 sqm across two levels"},
                {label: "Beds", value: "Emperor Size bed with Egyptian cotton"},
                {label: "View", value: "360-degree views of the estate and mountains"},
                {label: "Amenities", value: "Private wood-burning fireplace & personalized butler service"}
            ]}
            images={[
                "/images/deluxe suite pink.png",
                "/images/deluxe suite pink bathroom.png",
                "/images/delux svit rosa toalett.png",
                "/images/deluxe suite green.png",
                "/images/deluxe suite green toalett.png"
            ]}
            />

        <RoomSection
        number="Suite No. 04"
        title="Heirloom Bridal Suite"
        description="Designed for new beginnings. The Everafter Suite is a romantic masterpiece draped in soft silks and ivory tones. 
            Bathed in natural golden light, it provides a serene and magical backdrop for your first night as a married couple."
            details={[
                {label: "Size", value: "70 sqm bridal sanctuary"},
                {label: "Beds", value: "King Size bed with silk linens"},
                {label: "View", value: "Dedicated bridal dressing area"},
                {label: "Amenities", value: "Champagne on ice & hydrotherapy spa bath"}
            ]}
            images={[
                "/images/wedding suite.png",
                "/images/wedding bathroom.png",
                "/images/wedding pic.png"
            ]}
            />
    </div>
  );
}