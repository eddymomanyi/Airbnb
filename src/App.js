import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
    const cards = data.map((experience) => {
        return <Card key={experience.id} item={experience} />;
    });
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">{cards}</section>
        </div>
    );
}
