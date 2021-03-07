// special file that has access to body

import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';

// override nprogress styling by importings our own with the same name
import '../components/styles/nprogress.css';

// hook into router to trigger things programmatically
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
