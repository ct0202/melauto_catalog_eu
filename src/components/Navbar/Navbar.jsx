import  { useState } from 'react';

import {
    AppBar,
    Toolbar,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ThemeProvider
} from "@mui/material";

import { Menu as MenuIcon } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';

// import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

import { HashLink } from 'react-router-hash-link';

import logo from "../../assets/images/logo.png";

import './styles.css'
import theme from '../../theme.js';

const Navbar = () => {

    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // 870px ≈ 'md'
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setMenuOpen(open);
    };

    const menuItems = [
        { label: 'Home', path: '/#home'},
        { label: 'Catalog', path: '/catalog' },
        { label: 'Services', path: '/#services' },
        { label: 'Contact Us', path: '/#contacts' },
        { label: 'Workflow', path: '/#workflow'},
        { label: 'Reviews', path: '/#reviews' },
    ];

    return (
        <div>
            <div className="navbar">
                <div className="container">
                    <div className='logo-container'>
                        <RouterLink to="/">
                            <img src={logo} alt='logo' className="logo" />
                        </RouterLink>
                    </div>


                    {isMobile ? (
                        <>
                            {/* Кнопка бургера */}
                            <Box sx={{ flexGrow: 1 }} />
                            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>

                            {/* Мобильное меню (Drawer) */}
                            <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer(false)}>
                                <List>
                                    {menuItems.map((item) => (
                                        <ListItem button key={item.label} component={HashLink} to={item.path} onClick={toggleDrawer(false)}>
                                            <ListItemText sx={{color: "black"}} primary={item.label} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Drawer>
                        </>
                    ) : (
                        <div className="items">
                            {menuItems.map((item) => (
                                <div key={item.label}>
                                    <span className="item-label">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
