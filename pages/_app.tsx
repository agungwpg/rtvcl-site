import '@fontsource/ubuntu';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className="max-w-md mx-auto "
      onScroll={() => console.log('anak anjing')}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
