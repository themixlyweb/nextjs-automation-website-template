import React, { Fragment, useRef } from 'react';
import Image from 'next/image';
import useSticky from 'hooks/useSticky';
import NextLink from 'components/NextLink';
import ListItemLink from 'components/ListItemLink';
import DropdownToggleLink from 'components/DropdownToggleLink';
import SocialLinks from './SocialLinks';
import { products } from '../data.js';

const BottomNavbar = ({
  navClassName = 'navbar-expand-lg w-100',
  stickyBox = true,
  navOtherClass = 'navbar-other d-flex d-lg-none'
}) => {
  const sticky = useSticky(350);
  const navbarRef = useRef(null);

  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  /**
   * Render product submenu items recursively.
   */
  const renderLinks = (links) =>
    links.map((item) => (
      <ListItemLink
        key={item.id}
        href={item.url}
        title={item.title}
        linkClassName="dropdown-item"
        data-bs-dismiss="offcanvas"
      />
    ));

  /**
   * Sticky navbar content
   */
  const headerContentNav = (
    <Fragment>
      {sticky && (
        <div className="navbar-brand">
          <NextLink
            href="/"
            title={<Image alt="Logo | AutoFlow" src="/img/logo.webp" width={150} height={50} />}
          />
        </div>
      )}

      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        {/* Close button for mobile offcanvas */}
        <div className="offcanvas-header d-lg-none">
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Home" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#"title="About Us" className="nav-link" />
            </li>

            {/* Dropdown menu for Products */}
            <li className="nav-item dropdown">
              <DropdownToggleLink title="Products" className="nav-link dropdown-toggle" />
              <ul className="dropdown-menu z-3">
                {products.map(({ id, url, title, children }) =>
                  !url && children ? (
                    <li className="dropdown dropdown-submenu dropend" key={id}>
                      <DropdownToggleLink title={title || 'Products'} />
                      <ul className="dropdown-menu">{renderLinks(children)}</ul>
                    </li>
                  ) : (
                    <ListItemLink key={id} href="#" title={title} linkClassName="dropdown-item" />
                  )
                )}
              </ul>
            </li>

            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Contact Us" className="nav-link" />
            </li>
          </ul>

          {/* Offcanvas Footer for Mobile */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink
                title="info@autoflow.com"
                className="link-inverse"
                href="mailto:info@autoflow.com"
              />
              <br />
              <NextLink href="tel:+911234567890" title="+91 12345 67890" />
              <br />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger for small screens */}
      <div className={navOtherClass}>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          className="hamburger offcanvas-nav-btn"
        >
          <span />
        </button>
      </div>
    </Fragment>
  );

  /**
   * Non-sticky (default) header content
   */
  const headerContent = (
    <Fragment>
      <div className="col-4" />
      <div className="col-1 triangle-shape brown-bg" />
      <div className="col-7 brown-bg z-5 position-relative" style={{ marginLeft: '-1px' }}>
        <div className="offcanvas offcanvas-nav">
          <div className="d-flex flex-column h-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NextLink href="/" title="Home" className="nav-link" />
              </li>
              <li className="nav-item">
                <NextLink href="#"title="About Us" className="nav-link" />
              </li>
              <li className="nav-item dropdown">
                <DropdownToggleLink title="Products" className="nav-link dropdown-toggle" />
                <ul className="dropdown-menu">
                  {products.map(({ id, url, title, children }) =>
                    !url && children ? (
                      <li className="dropdown dropdown-submenu dropend" key={id}>
                        <DropdownToggleLink title={title || 'Products'} />
                        <ul className="dropdown-menu">{renderLinks(children)}</ul>
                      </li>
                    ) : (
                      <ListItemLink key={id} href="#" title={title} linkClassName="dropdown-item" />
                    )
                  )}
                </ul>
              </li>
              <li className="nav-item">
                <NextLink href="#" title="Contact Us" className="nav-link" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {/* Push content down if sticky box is enabled */}
      {stickyBox && (
        <div
          style={{
            paddingTop: sticky ? navbarRef.current?.clientHeight : 0
          }}
        />
      )}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {sticky ? (
          <div className="container py-2">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContentNav}
            </div>
          </div>
        ) : (
          <div className="row">{headerContent}</div>
        )}
      </nav>
    </Fragment>
  );
};

export default BottomNavbar;
  