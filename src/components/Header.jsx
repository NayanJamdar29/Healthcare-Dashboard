import React from 'react';
import { FaSearch, FaBell, FaPlus } from 'react-icons/fa';

const Header = () => (
  <header className="d-flex justify-content-between align-items-center bg-white shadow-sm rounded" style={{ height: '80px' }}>

    {/* Left Side: Search Input */}
    <div className="d-flex align-items-center bg-light rounded px-3 py-2" style={{ width: '300px' }}>
      <FaSearch className="me-2 text-muted" />
      <input
        type="text"
        placeholder="Search"
        className="form-control border-0 bg-light"
        style={{ outline: 'none', boxShadow: 'none' }}
      />
    </div>

    {/* Right Side: Icons */}
    <div className="d-flex align-items-center gap-3">

      {/* Notification Bell */}
      <div
        className="d-flex align-items-center justify-content-center rounded-circle bg-light"
        style={{ width: '40px', height: '40px' }}
      >
        <FaBell className="text-primary" />
      </div>

      {/* User Avatar */}
      <div
        className="d-flex align-items-center justify-content-center rounded-circle"
        style={{ width: '40px', height: '40px', backgroundColor: '#00d1d1' }}
      >
        <span role="img" aria-label="user" style={{ fontSize: '20px' }}>🧑‍💼</span>
      </div>

      {/* Add Button */}
      <button
        className="btn"
        style={{
          backgroundColor: '#3f51b5',
          color: '#fff',
          width: '40px',
          height: '40px',
          borderRadius: '12px',
          fontSize: '18px',
          padding: 0
        }}
      >
        <FaPlus />
      </button>
    </div>
  </header>
);

export default Header;
