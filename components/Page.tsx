import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Head from 'next/head';
import Footer from './Footer';
 
type Props = {
  blok: any;
  links: any;
  config: any;
}

const Page = ({ blok, links, config }: Props) => (
  <>
    <Head>
      <title>{blok.title}</title>
      <meta name='description' content={blok.description} />
    </Head>
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent links={links} blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
    <Footer blok={config} />
  </>
);
 
export default Page;