import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar overlay">
        <h1>
          <Link to="/" style={{textDecoration: 'none'}}><i class="fab fa-bitcoin"></i> Crypto Bank </Link>
        </h1>
        <ul>
          <li><Link to="/viewCustomers" style={{textDecoration: 'none'}}> View Customers</Link></li>
          <li><Link to="/history" style={{textDecoration: 'none'}}> History  </Link></li>
        </ul>
      </nav>
    )
}

export default Navbar;
