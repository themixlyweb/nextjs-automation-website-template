import NextLink from './NextLink';

const Topbar = () => {
  return (
    <div className="fw-bold fs-15 d-flex topbar">
      {/* Empty column for layout spacing */}
      <div className="col-4" />

      {/* Decorative triangle shape */}
      <div className="col-1 reverse-triangle-shape" />

      {/* Main container with background and flex layout */}
      <div
        className="secondary-bg container d-md-flex flex-md-row col-7 position-relative z-2"
        style={{ marginLeft: '-1px' }}
      >
        {/* Left text section */}
        <div className="d-flex flex-row align-items-center justify-content-center me-10  text-white ps-3">
          Automation solution that you can trust
        </div>

        {/* Social media icons */}
        <div className="d-flex flex-row align-items-start ms-1">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-white hover"
            aria-label="Facebook"
          >
            <div className="icon text-white fs-22 mt-1 me-4">
              <i className="uil uil-facebook" />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-white hover"
            aria-label="LinkedIn"
          >
            <div className="icon text-white fs-22 mt-1 me-10">
              <i className="uil uil-linkedin" />
            </div>
          </a>
        </div>

        {/* Call to action button */}
        <NextLink
          title="Book Now"
          href="#"
          className="btn btn-sm primary-bg text-white rounded-0"
        />
      </div>
    </div>
  );
};

export default Topbar;
