import React, { useRef } from 'react';
import Topbar from './Topbar';
import MidNavbar from './MidNavbar';
import BottomNavbar from './BottomNavbar';
import useSticky from 'hooks/useSticky';

/**
 * Header Component
 * Combines Topbar, MidNavbar, and BottomNavbar
 * Applies sticky behavior after scrolling 350px down
 */
const Header = () => {
  const stickyRef = useRef(null);
  const isSticky = useSticky(350); // Becomes sticky after scrolling 350px

  return (
    <div 
      className={`sticky-wrapper ${isSticky ? 'is-sticky' : ''}`} 
      ref={stickyRef}
    >
      {/* Topbar: Visible only on large screens and above */}
      <div className="d-none d-lg-block">
        <Topbar />
      </div>

      {/* Mid section with logo or branding */}
      <MidNavbar />

      {/* Main navigation bar */}
      <BottomNavbar />
    </div>
  );
};

export default Header;
