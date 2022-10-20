import '@fontsource/ubuntu';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApplicationProvider } from '../context/application';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApplicationProvider>
      <div
        className="max-w-md mx-auto "
        onScroll={() => console.log('anak anjing')}
      >
        <Component {...pageProps} />
      </div>
    </ApplicationProvider>
  );
}

export default MyApp;
