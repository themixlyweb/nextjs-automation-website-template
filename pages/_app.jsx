import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from 'components/Layout';
import ThemeProvider from 'theme/ThemeProvider';
// Global styles
import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  // Dynamically load Bootstrap once on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap');
    }
  }, []);

  // Initialize scrollCue on route/path change
  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400,
        duration: 700,
        percentage: 0.8,
      });
      scrollCue.update();
    })();
  }, [pathname]);

  // Remove loading screen after initial mount
  useEffect(() => setLoading(false), []);

  return (
    <Fragment>
      {/* Global Meta Tags (defaults for pages) */}
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AutoFlow – Next.js Website Template for Automation & Industrial Companies</title>

        <meta name="description" content="Free Next.js template for automation, robotics, industrial service websites - built with Bootstrap." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AutoFlow – Next.js Website Template for Automation & Industrial Companies" />
        <meta property="og:description" content="Free Next.js template for automation, robotics, industrial service websites - built with Bootstrap." />
        <meta property="og:url" content="https://themixly.com/themes/automation-solutions-react-nextjs-template/" />
        <meta property="og:image" content="https://themixly.com/wp-content/uploads/2025/07/image-2-scaled.jpg" />
        <meta property="og:image:secure_url" content="https://themixly.com/wp-content/uploads/2025/07/image-2-scaled.jpg" />

        <meta name="twitter:card" content="https://themixly.com/wp-content/uploads/2025/07/image-2-scaled.jpg" />
        <meta name="twitter:title" content="AutoFlow – Next.js Website Template for Automation & Industrial Companies" />
        <meta name="twitter:description" content="Free Next.js template for automation, robotics, industrial service websites - built with Bootstrap." />
        <meta name="twitter:image" content="https://themixly.com/wp-content/uploads/2025/07/image-2-scaled.jpg" />
      </Head>

      {/* Layout wrapper with theme and page content */}
      <Layout>
        <ThemeProvider>
          {loading ? (
            <div className="page-loader" />
          ) : (
            <>
              <Component {...pageProps} />
            </>
          )}
        </ThemeProvider>
      </Layout>
    </Fragment>
  );
}

export default MyApp;
