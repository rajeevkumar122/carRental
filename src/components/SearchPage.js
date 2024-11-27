import React from 'react';
import './SearchPage.css'; // Ensure the CSS file contains styles
import { popularCars, recommendedCars } from '../data/mockData'; // Import mock data
import CarCard from '../components/CarCard'; // Import the CarCard component

const SearchPage = () => {
  return (
    <div className="search-page">
      {/* Search bar and header icons */}
      <header className="search-header">
        <input type="text" placeholder="Search cars..." className="search-bar" />
        <div className="header-icons">
          <i className="icon-heart">&#10084;</i>
          <i className="icon-settings">&#9881;</i>
          <i className="icon-user">&#128100;</i>
        </div>
      </header>

      {/* Filter section */}
      <aside className="filters">
        <div className="filter-section">
          <h3>Type</h3>
          <ul>
            <li><input type="checkbox" /> Sedan</li>
            <li><input type="checkbox" /> SUV</li>
            <li><input type="checkbox" /> Hatchback</li>
          </ul>
        </div>
        <div className="filter-section">
          <h3>Capacity</h3>
          <ul>
            <li><input type="checkbox" /> 2-seater</li>
            <li><input type="checkbox" /> 4-seater</li>
            <li><input type="checkbox" /> 6+ seater</li>
          </ul>
        </div>
        <div className="filter-section">
          <h3>Price</h3>
          <input type="range" min="0" max="200" />
          <p>Max. $200.00</p>
        </div>
      </aside>

      {/* Display car cards */}
      <main className="results">
        <h2 className="section-title">Popular Cars</h2>
        <div className="result-grid">
          {popularCars.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>

        <h2 className="section-title">Recommended Cars</h2>
        <div className="result-grid">
          {recommendedCars.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
