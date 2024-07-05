import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Link as Scroll } from 'react-scroll';
import Toolbar from '@mui/material/Toolbar';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Drawer from "@mui/material/Drawer";

const setNavLinks: Array<{ text: string, url: string }> = [
    { text: "トップ", url: "/" },
    { text: "プロフィール", url: "/profile" },
    { text: "スキル", url: "/skill" },
    { text: "制作物", url: "/production" },
    { text: "連絡先", url: "/contact" },
    { text: "ブログ", url: "/blog" },
];

const HHeader: React.FC = () => {
    const [open, setOpen] = useState(false);

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

  return(
    <>
        <AppBar component="header" position="sticky" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: '#000000',
                    textDecoration: 'none',
                    }}
                >
                    portfolio
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                style={{ color: 'black' }}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                        <MenuItem  onClick={handleCloseNavMenu} >
                        <Typography textAlign="center">
                            <Scroll to="s_top"  smooth={true} offset={-70}>トップ</Scroll>
                        </Typography>
                        </MenuItem>

                        <MenuItem  onClick={handleCloseNavMenu} >
                        <Typography textAlign="center">
                            <Scroll to="s_about"  smooth={true} offset={-150}>このサイトについて</Scroll>
                        </Typography>
                        </MenuItem>

                        <MenuItem  onClick={handleCloseNavMenu} >
                        <Typography textAlign="center">
                        <Scroll to="s_profile"  smooth={true} offset={-150}>プロフィール</Scroll>
                        </Typography>
                        </MenuItem>

                        <MenuItem  onClick={handleCloseNavMenu} >
                        <Typography textAlign="center">
                        <Scroll to="s_skill"  smooth={true} offset={-150}>スキル</Scroll>
                        </Typography>
                        </MenuItem>

                        <MenuItem  onClick={handleCloseNavMenu} >
                        <Typography textAlign="center">
                            <Scroll to="s_production"  smooth={true} offset={-150}>制作物</Scroll>
                        </Typography>
                        </MenuItem>

                        <MenuItem  onClick={handleCloseNavMenu} >
                        <Typography textAlign="center">
                            <Scroll to="s_contact"  smooth={true} offset={-150}>連絡先</Scroll>
                        </Typography>
                        </MenuItem>
                </Menu>
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'black',
                    textDecoration: 'none',
                    }}
                >
                    Portfolio
                </Typography>
                <Box sx={{justifyContent:"right", flexGrow: 1,display: { xs: 'none', md: 'flex' } }}>
                    
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{my: 2, color: 'black', display: 'block' }}
                    >
                        <Scroll to="s_top"  smooth={true} offset={-70}>トップ</Scroll>
                    </Button>
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{my: 2, color: 'black', display: 'block' }}
                    >
                        <Scroll to="s_about"  smooth={true} offset={-150}>このサイトについて</Scroll>
                    </Button>
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{my: 2, color: 'black', display: 'block' }}
                    >
                        <Scroll to="s_profile"  smooth={true} offset={-150}>プロフィール</Scroll>
                    </Button>
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{my: 2, color: 'black', display: 'block' }}
                    >
                        <Scroll to="s_skill"  smooth={true} offset={-150}>スキル</Scroll>
                    </Button>
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{my: 2, color: 'black', display: 'block' }}
                    >
                        <Scroll to="s_production"  smooth={true} offset={-150}>制作物</Scroll>
                    </Button>
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{my: 2, color: 'black', display: 'block' }}
                    >
                        <Scroll to="s_contact"  smooth={true} offset={-150}>連絡先</Scroll>
                    </Button>
                    
                </Box>
                    </Toolbar>
            </Container>
        </AppBar>
    </>
  );
};

export default HHeader;