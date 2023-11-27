import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <div className='header'>

      <div className='header_left'>
        <MenuIcon className='header_menuBtn' />
        <img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' alt='' />
      </div>
      
      <div className='header_icons'>
        <input placeholder='Search' type='text' />
        <SearchIcon className='header_inputBtn header_icon' />
        <VideoCallIcon className='header_icon' />
        <NotificationsIcon className='header_icon' />
        <Avatar>A</Avatar>
      </div>
      
    </div>
  );
}

export default Header;
