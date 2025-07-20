import { Link } from "react-router-dom";

const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white'
}

const linkStyle = {
    display: 'flex',
    gap: '1rem',
    listStyle: 'none',
    margin: '10px 10px'
};
const linkAnchorStyle = {
    textDecoration: 'none',
    color: 'white',
    margin: '0 10px'
};

export default function Navbar() {
    return (
        <nav style={navbarStyle}>
            <h1>My Company</h1>
            <ul style={linkStyle}>
                <li><Link style={linkAnchorStyle} to="/">Home</Link></li>
                <li><Link style={linkAnchorStyle} to="/about">About Us</Link></li>
                <li><Link style={linkAnchorStyle} to="/services">Our Services</Link></li>
                <li><Link style={linkAnchorStyle} to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
}