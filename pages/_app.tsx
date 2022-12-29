import '../styles/globals.css';
import { Taviraj } from '@next/font/google';
import type { AppProps } from 'next/app';
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from '../components/Page';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Header from '../components/Header';
import GridBanner from '../components/GridBanner';
import ServicesTabs from '../components/ServicesTabs';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Testimonials from '../components/Testimonials';

const font = Taviraj({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

storyblokInit({
  accessToken: "XjMMzgthXAYp2nKdLeeY7Att",
  // bridge: false,
  apiOptions: {
    region: "us", // Pass this key/value if your space was created under US region
  },
  use: [apiPlugin],
  components: {
    page: Page,
    grid: Grid,
    feature: Feature,
    header: Header,
    grid_banner: GridBanner,
    service_tabs: ServicesTabs,
    footer: Footer,
    button: Button,
    testimonials_reference: Testimonials,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
