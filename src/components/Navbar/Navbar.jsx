import './Navbar.css'
import UserSvg from '../../assets/user.svg'
import BellSvg from '../../assets/bell.svg'

function Navbar() {
  return (
    <>
        <nav className="navbar nav__color">
            <div className="container">
                <a className="navbar-brand" href="#">
                <span className="navbar-brand mb-0 h1">Jobs</span>
                </a>
                <form className="d-flex" role="search">
                    <div className="input-container">
                        <input className="nav__search" type="search" placeholder="Search" aria-label="Search"/>
                        <span className="icon"></span>
                    </div>
                </form>
                <div>
                </div>
                <div className=''>
                    <ul className="navbar-nav nav__options">
                        <li className="nav-item">
                            <button className="round">
                                <embed className='nav__icon' src={UserSvg}/>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="round">
                                <embed className='nav__icon' src={BellSvg}/>
                                <span className="notification-dot" data-value="12"></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
