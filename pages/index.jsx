import { Fragment } from 'react';
import Head from 'next/head';
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import CardCarousal from 'components/CardCarousal';

import { homeCardSlider, hero } from '../src/data';

const Home = () => {
  return (
    <Fragment>
      {/* Page loading progress bar */}
      <PageProgress />

      {/* SEO and metadata */}
      <Head>
        <title>AutoFlow – React & Next.js Template for Automation & Industrial Solutions</title>
        <meta name="description" content="" />
        <link rel="canonical" href="https://autoflow.com/" />
      </Head>

      {/* Main content wrapper */}
      <main className="content-wrapper overflow-hidden">
        {/* Hero section */}
        <Hero arr={hero} />

        {/* About section - Automation Solutions Provider */}
        <section className="wrapper">
          <div className="container py-12 py-md-14">
            <About
              headingH1="Automation Solutions Provider"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid est labore tempore at repellat natus quos, blanditiis sapiente facilis voluptates dignissimos quae amet, culpa magni nulla nam. Unde, est quasi? Repudiandae dolore optio reprehenderit ut laborum cum assumenda ipsa quaerat fugiat earum labore commodi vero, architecto repellat veniam provident placeat voluptatibus illo vitae necessitatibus. Provident, doloribus necessitatibus ad autem ipsa iste voluptatem totam quisquam, expedita consequuntur alias dolorum praesentium reprehenderit at? Non magni explicabo unde, cupiditate quam qui, aliquam maxime, sit sed quibusdam libero dolor."
              imgPosition="left"
              src="/img/home/automation-solutions-provider.webp"
            />
          </div>
        </section>

        {/* Product carousel section */}
        <section className="wrapper bg-gray">
          <div className="container py-12 py-md-14">
            <div className="row mb-4">
              <div className="d-flex flex-column align-items-start justify-content-center">
                <h2 className="fs-46 text-center">Explore Our Range of Automation Products</h2>
              </div>
            </div>
            <hr className="m-0 text-muted" />
            <hr className="m-0 mt-1 mb-md-12 mb-6 text-muted" />
            <CardCarousal arr={homeCardSlider} />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
