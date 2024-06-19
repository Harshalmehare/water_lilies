import React from 'react';


function Footer() {
    return (
        <>
        
            <div className="card text-center">
                <div className="card-body  bg-dark">
                    <h5 className="card-title text-white">Special title treatment</h5>
                    <p className="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer text-body-secondary" style={{ backgroundColor: 'gray' }}>
                    2 days ago
                </div>
                
            </div>
        </>
    );
}

export default Footer;