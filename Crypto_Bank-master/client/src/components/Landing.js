import React from 'react';
import {Link} from 'react-router-dom';

 const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-text">
                    <h1 > Crypto Bank </h1>
                    <p className='land-subline'>
                       Leading Bank with World Class Banking.
                    </p>
            <div className="buttons">
            <Link to="/viewCustomers" className="landing-btn" style={{textDecoration: 'none'}}> View Customers</Link>
            <Link to="/history" className="landing-btn" style={{textDecoration: 'none'}}> History</Link>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Landing;
