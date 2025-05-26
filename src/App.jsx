import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../src/styles/app.css'


const App = () => (
  <div className="app-container">
    <Sidebar />
    <div className="main-content">
      <Header />
      <DashboardMainContent />
    </div>
  </div>
);

export default App;
