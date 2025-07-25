import { Fragment } from 'react';
import NextLink from 'components/NextLink';
import ListItemLink from 'components/ListItemLink';
import SocialLinks from './SocialLinks.jsx';
import DropdownToggleLink from 'components/DropdownToggleLink';
import { products } from '../data.js';
import Image from 'next/image.js';

const MidNavbar = ({ navOtherClass = 'navbar-other d-flex d-lg-none' }) => {
  // Offcanvas navigation for mobile view
  const headerContentNav = (
    <Fragment>
      {/* Brand/logo */}
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={<Image alt="Logo | AutoFlow" src="/img/logo.webp" width={150} height={50} />}
        />
      </div>

      {/* Offcanvas nav container */}
      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start justify-content-start align-items-start"
      >
        {/* Offcanvas header for mobile */}
        <div className="offcanvas-header d-lg-none offcanvas-bg">
          <NextLink
            href="/"
            title={
              <Image
                alt="Logo | AutoFlow"
                className="me-10"
                src="/img/logo-light.webp"
                width={150}
                height={50}
              />
            }
          />
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white"
          />
        </div>

        {/* Offcanvas body with nav links */}
        <div className="offcanvas-body d-flex flex-column h-100">
          <ul className="navbar-nav">
            {/* Static links */}
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Home" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#"title="About Us" className="nav-link" />
            </li>

            {/* Dropdown for products */}
             <li className="nav-item dropdown">
              <DropdownToggleLink title="Products" className="nav-link dropdown-toggle" />
              <ul className="dropdown-menu z-3">
                {products.map(({ id, url, title }) => {
                  return <ListItemLink key={id} href="#" title={title} linkClassName="dropdown-item" />;
                })}
              </ul>
            </li>

            {/* Contact link */}
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Contact Us" className="nav-link" />
            </li>
          </ul>

          {/* Offcanvas footer for contact info and social links (mobile only) */}
          <div className="offcanvas-footer d-lg-none ps-5">
            <div>
              <div className="d-flex align-items-center">
                <i className="uil uil-envelope fs-30 me-2" />
                <NextLink title="info@autoflow.com" className="link-inverse" href="mailto:info@autoflow.com" />
              </div>
              <div className="d-flex align-items-center">
                <i className="uil uil-phone fs-30 me-2" />
                <div className="d-flex flex-column">
                  <NextLink href="tel:+911234567890" title="+91 12345 67890" />
                </div>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger toggle button for mobile */}
      <div className={navOtherClass}>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          className="hamburger offcanvas-nav-btn"
          aria-label="Toggle navigation"
        >
          <span />
        </button>
      </div>
    </Fragment>
  );

  // Navbar content for desktop view
  const headerContent = (
    <div className="row d-flex w-100">
      {/* Logo */}
      <div className="col-md-4 d-flex align-items-center justify-content-end">
        <NextLink
          href="/"
          title={<Image alt="Logo | AutoFlow" src="/img/logo.webp" width={220} height={60} />}
        />
      </div>

      {/* Contact info */}
      <div className="col-md-8 d-flex justify-content-between ps-15">
        <div className="d-flex col-5 align-items-center justify-content-start">
          <i className="uil uil-building fs-30 text-dark me-3" aria-label="Office location" />
          <address className="text-dark d-flex flex-column m-0 fs-14">
            <span className="fw-bold fs-16">12 Elmsworth Crescent</span>
            New Delmere, Eastfold 92830 United Kingdom of Nordavia
          </address>
        </div>
        <div className="d-flex col-4 align-items-center justify-content-start me-md-10 me-xl-0">
          <i className="uil uil-envelope fs-34 text-dark me-2" aria-label="Email" />
          <p className="text-dark d-flex flex-column fs-14 m-0">
            <span className="fw-bold fs-16">Send your mail at</span>
            <a href="mailto:info@autoflow.com" className="link text-dark">
              info@autoflow.com
            </a>
          </p>
        </div>
        <div className="d-flex col-4 align-items-center justify-content-start">
          <i className="uil uil-phone fs-34 text-dark me-2" aria-label="Phone" />
          <p className="text-dark d-flex flex-column fs-14 m-0">
            <span className="fw-bold fs-16">Call Us</span>
            <a href="tel:+911234567890">+91 12345 67890</a>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <nav>
        {/* Desktop navbar */}
        <div className="container d-none d-lg-block">{headerContent}</div>

        {/* Mobile navbar with offcanvas */}
        <div className="container py-2 d-lg-none d-flex">{headerContentNav}</div>
      </nav>
    </Fragment>
  );
};

export default MidNavbar;
