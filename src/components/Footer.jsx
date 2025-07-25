import Image from 'next/image';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import { products, usefulLinks } from '../data';

/**
 * Reusable widget for footer link groups
 * @param {Array} list - Array of link items
 * @param {string} title - Widget title
 * @param {string} [location] - Optional suffix to add to URLs
 */
const FooterWidget = (list, title) => (
  <div className="widget">
    <h4 className="widget-title fs-24 m-0 border-2 border-bottom border-white d-inline pb-1">{title}</h4>
    <ul className="list-unstyled text-reset mt-4">
      {list.map(({title, id }) => (
        <li key={id}>
          <NextLink href="#" title={title} />
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark overflow-hidden">
      <div className="container pt-10 pt-md-12">
        <div className="row gx-10 justify-content-around">
          {/* Company Logo and About */}
          <div className="col-lg-3">
            <div className="widget d-flex flex-column align-items-center">
              <div className="mb-5">
                <Image
                  src="/img/logo-light.webp"
                  alt="Logo | AutoFlow"
                  width={250}
                  height={70}
                  className="text-center"
                />
              </div>
              <p className="lead mb-2 text-justify fs-18 text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ex quae, incidunt maxime consequuntur tenetur!
              </p>
              <div className="d-flex align-items-center">
                <SocialLinks className="nav social text-md-end" />
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 col-lg-2 mt-md-5 mt-lg-0 mt-10 text-white d-flex justify-content-md-center">
            {FooterWidget(usefulLinks, 'Useful Links')}
          </div>

          {/* Products */}
          <div className="col-md-3 col-lg-3 mt-md-5 mt-lg-0 mt-10 text-white d-flex justify-content-md-center">
            {FooterWidget(products, 'Products')}
          </div>

          {/* Contact Information */}
          <div className="col-md-3 col-lg-3 mt-md-5 mt-lg-0 mt-10 text-white d-flex justify-content-md-center">
            <div className="widget">
              <h4 className="widget-title fs-24 border-2 border-bottom border-white d-inline pb-1">Contact Us</h4>

              <div className="d-flex mb-3 align-items-start mt-3">
                <i className="uil uil-location-pin-alt fs-30 text-white" />
                <address className="text-white ms-2 m-0 mt-1">
                  12 Elmsworth Crescent<br />
                  New Delmere, Eastfold 92830<br />
                  United Kingdom of Nordavia
                </address>
              </div>

              <div className="d-flex mb-3 align-items-center">
                <i className="uil uil-envelope fs-26 text-white" />
                <a href="mailto:info@autoflow.com" className="link-body ms-2 text-white">
                  info@autoflow.com
                </a>
              </div>

              <div className="d-flex">
                <i className="uil uil-phone-volume fs-26 text-white" />
                <p className="mt-1 ms-2 fs-18">
                  <a href="tel:+911234567890" className="text-white">
                    +91 12345 67890
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* Copyright */}
        <div className="d-md-flex align-items-center justify-content-center">
          <p className="text-white mb-2">
            © {currentYear} AutoFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
