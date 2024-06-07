import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LogoutButton from './LogoutButton';
import userIcon from '../../assets/user.svg';
import { UserSearch } from "../../components/User/UserSearch";

export const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem("user_id");
        setUserId(storedUserId);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/posts">Acebook</Link>
                </div>
                <div className="navbar-search">
                    <UserSearch />
                </div>
                <div className="navbar-avatar" onClick={toggleDropdown}>
                    <img src={userIcon} alt="User Icon" />
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li>
                                {userId && (
                                    <Link to={`/profile/${userId}`}>Profile</Link>
                                )}
                            </li>
                            <li>
                                <LogoutButton /> {/* Integrate the LogoutButton here */}
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;