import React from "react";
import "../assets/filters.css";

export default function Filters({ setSelectedType }) {
    return (
        <>
        <div className="filters">
            <button onClick={() => setSelectedType('all')} className="filter-button">All</button>
            <button onClick={() => setSelectedType('breakfast')} className="filter-button">Breakfast</button>
            <button onClick={() => setSelectedType('lunch')} className="filter-button">Lunch</button>
            <button onClick={() => setSelectedType('dinner')} className="filter-button">Dinner</button>
        </div>
        </>
    );
}