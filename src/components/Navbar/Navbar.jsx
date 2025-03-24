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

import { Link } from "react-router-dom";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

import { HashLink } from 'react-router-hash-link';

import logo from "../../assets/images/logo.png";

import { useLanguage } from "../../contexts/Lang.jsx";
import en from "../../locales/en.json";
import pl from "../../locales/pl.json";

import './styles.css'
import theme from '../../theme.js';

const Navbar = () => {
    const navigate = useNavigate();

    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // 870px ≈ 'md'
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setMenuOpen(open);
    };

    const { language, toggleLanguage } = useLanguage();


    const menuItems = [
        { label: language === 'en' ? 'Home' : 'Strona główna', path: '/#home' },
        { label: language === 'en' ? 'Catalog' : 'Katalog', path: '/catalog' },
        { label: language === 'en' ? 'Services' : 'Usługi', path: '/#services' },
        { label: language === 'en' ? 'Contacts' : 'Kontakty', path: '/#contacts' },
        { label: language === 'en' ? 'Workflow' : 'Przepływ pracy', path: '/#workflow' },
        { label: language === 'en' ? 'Reviews' : 'Opinie', path: '/#reviews' }
    ];


    return (
        <div>
            <div className="navbar">

                <button className='locale-button' onClick={toggleLanguage}>
                    {language === "en" ? "🇬🇧 English" : "🇵🇱 Polski"}
                </button>

                <div className="container">
                    <div className='logo-container'>
                        <RouterLink to="/">
                            <img src={logo} alt='logo' className="logo"/>
                        </RouterLink>
                    </div>


                    {isMobile ? (
                        <>
                            {/* Кнопка бургера */}
                            <Box sx={{flexGrow: 1}}/>
                            <IconButton edge="end" color="secondary" onClick={toggleDrawer(true)}>
                                <MenuIcon sx={{color: "white"}}/>
                            </IconButton>

                            {/* Мобильное меню (Drawer) */}
                            <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer(false)}>
                                <List>
                                    {menuItems.map((item) => (
                                        <ListItem button key={item.label} component={HashLink} to={item.path}
                                                  onClick={toggleDrawer(false)}>
                                            <ListItemText sx={{color: "black"}} primary={item.label}/>
                                        </ListItem>
                                    ))}
                                </List>
                            </Drawer>
                        </>
                    ) : (
                        <div className="items">
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    color="inherit"
                                    component={HashLink}
                                    to={item.path}
                                    sx={{'&:hover': {color: 'var(--primary-color)'}}}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
