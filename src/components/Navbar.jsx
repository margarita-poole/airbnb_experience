import logo from '../Assets/airbnb-logo.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='nav--logo' />
        </nav>
    )
}

export default Navbar;