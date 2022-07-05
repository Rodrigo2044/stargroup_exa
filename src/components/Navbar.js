import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Página de Inicio
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? 'active' : ''}`
            }
            to="/area"
          >
            Áreas
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? 'active' : ''}`
            }
            to="/empleado"
          >
            Empleados
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
