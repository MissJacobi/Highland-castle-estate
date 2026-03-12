import React from "react";
import RoomSection from "../components/RoomSection";

export default function About(){
    return(
        <div className="suites-container zigzag-layout">
        
        <RoomSection
        number="The History"
        title="A Legacy in Stone"
        description="Highland Castle has stood for centuries as a symbol of elegance. 
        From its pink sandstone walls to the meticulously kept rose gardens, every corner tells a story of Scottish heritage."
        details={[]}
        images={["/images/castle frontyard.png"]}
        />

        <RoomSection
        number="The The Experience"
        title="Grand Entrances & Skyward Spirits"
        description="Begin your journey in our checkered marble hall, and end your evening in the tower lounge. 
        Our bar offers the finest local malts with a view that touches the moon."
        details={[]}
        images={["images/reception.png", "images/lounge.png"]}
        />

        <RoomSection
        number="Gastronomy"
        title="Dining in the Garden Hall"
        description="Located on the ground floor, our dining room celebrates the seasons. 
        Enjoy locally sourced delicacies under crystal chandeliers in an atmosphere of refined tranquility."
        details={[]}
        images={["/images/dinning.png", "/images/wedding dining.png"]}
        />

        <RoomSection
        number="Wellness"
        title="The Sanctuary Spa"
        description="Escape to our subterranean spa, where the ancient stone meets modern serenity. 
        From hydrotherapy pools to bespoke botanical treatments, find your inner peace amidst the Highland mist."
        details={[]}
        images={["/images/spa.png", "/images/spa treatmentroom.png"]}
        />

        <RoomSection
        number="Family members"
        title="Four-Legged Guests"
        description="At Highland Castle, we believe no family retreat is complete without your loyal companions. We warmly welcome well-behaved pets to join you in the highlands. 
        To ensure we have everything ready, from a cozy bed to their own water bowl. Please simply notify us in advance."
        details={[]}
        images={["/images/dog on bed.png", "/images/dog-bowl.png"]}
        />
        </div>
    );
}