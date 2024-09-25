import React from 'react'
import LiveTime from './LiveTime'
import '../App.css'

const Navbar = ({setcategory, setUpCountry, country, category}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" id='logo' href="#"><span className='badge text-light fs-4'>NewsDaily</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setcategory('technology')}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setcategory('business')}>Buiness</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setcategory('health')}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setcategory('science')}>Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setcategory('sports')}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setcategory('entertainment')}>Entertainment</div>
        </li>
      </ul>

      <div className='filter-display' style={{textAlign: 'center'}}>
            Country: <span>{country}</span> Category: <span>{category}</span>
        </div>
        <div className='live-time'>
            <LiveTime />
        </div>
        

      <div className="dropdown" style={{ position: 'relative', marginLeft: 'auto' }}>
        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
            Countries
        </button>
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2"
            style={{
                right: 0, 
                width: 'auto', 
                minWidth: '100%', 
              }}
        >
            <li><div className="dropdown-item" onClick={()=> setUpCountry('us')}>United States</div></li>
            <li><div className="dropdown-item disabled" onClick={()=> setUpCountry('gb')}>United Kingdom</div></li>
            <li><div className="dropdown-item disabled" onClick={()=> setUpCountry('de')}>Germany</div></li>
            <li><div className="dropdown-item disabled" onClick={()=> setUpCountry('fr')}>France</div></li>
            <li><div className="dropdown-item disabled" onClick={()=> setUpCountry('au')}>Australia</div></li>
            <li><div className="dropdown-item disabled" onClick={()=> setUpCountry('in')}>India</div></li>
            <li><div className="dropdown-item disabled" onClick={()=> setUpCountry('jp')}>Japan</div></li>
        </ul>
    </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar