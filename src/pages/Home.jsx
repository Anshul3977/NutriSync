import React from 'react';
import NutritionLookup from '../components/NutritionLookup';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to NutriSync</h1>
                    <p>Your personalized meal planning assistant.</p>
                    <button className="cta-button">Explore Recipes</button>
                </div>
            </section>

            {/* Nutrition Lookup Section */}
            <section className="nutrition-lookup-section">
                <h2>Nutrition Lookup</h2>
                <NutritionLookup />
            </section>
        </div>
    );
}

export default Home;
