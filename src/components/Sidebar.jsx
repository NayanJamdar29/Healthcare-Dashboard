import React, { useState } from 'react';
import { navLinks } from '../data/navLinks';

const iconMap = {
  Dashboard: 'bi bi-grid',
  History: 'bi bi-clock-history',
  Calendar: 'bi bi-calendar-event',
  Appointments: 'bi bi-clipboard-check',
  Statistics: 'bi bi-bar-chart',
  Chat: 'bi bi-chat-left-dots',
  Support: 'bi bi-headset',
  Setting: 'bi bi-gear',
};

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('Dashboard');

  const generalLinks = navLinks.slice(0, 5);
  const toolsLinks = navLinks.slice(5, 7);
  const settingLink = navLinks[8];

  const renderLink = (link) => (
    <li key={link} className="nav-item mb-1">
      <a
        href="#"
        onClick={() => setActiveLink(link)}
        className={`nav-link d-flex align-items-center rounded px-3  ${activeLink === link ? 'bg-primary text-white fw-semibold' : 'text-dark'
          }`}
      >a
        <i className={`${iconMap[link]} me-3`}></i>
        {link}
      </a>
    </li>
  );

  return (
    <aside
      className="d-flex flex-column justify-content-between bg-white shadow-sm px-3  overflow-y-auto"
      style={{ width: '250px', height: '100vh', borderRight: '1px solid #eee' }}
    >

      <div>
        <h4 className="text-primary fw-bold mb-5 ms-2">
          Health<span className="text-dark">care.</span>
        </h4>

        <div className="mb-4">
          <p className="text-muted text-uppercase small fw-semibold ms-2 mb-2">General</p>
          <ul className="nav flex-column">
            {generalLinks.map(renderLink)}
          </ul>
        </div>

        <div className="mb-4">
          <p className="text-muted text-uppercase small fw-semibold ms-2 mb-2">Tools</p>
          <ul className="nav flex-column">
            {toolsLinks.map(renderLink)}
          </ul>
        </div>
      </div>

      <div className="border-top pt-3">
        <a
          href="#"
          onClick={() => setActiveLink(settingLink)}
          className={`nav-link d-flex align-items-center rounded px-3  ${activeLink === settingLink ? 'bg-primary text-white fw-semibold' : 'text-dark'
            }`}
        >
          <i className={`${iconMap[settingLink]} me-3`}></i>
          {settingLink}
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
