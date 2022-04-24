import logo from '../Assets/airbnb-logo.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='navLogo' />
        </nav>
    )
}

export default Navbar;