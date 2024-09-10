import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';

export default function LoadCenter() {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <Navbar title="Ubicaciones" />

      </div>
    </div>
  );
}

