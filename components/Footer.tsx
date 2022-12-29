import { storyblokEditable } from "@storyblok/react";
import Link from 'next/link';

type Props = {
  blok: {
    footer_about: string;
    footer_columns: any[];
    footer_logotype: {
      filename: string;
      alt?: string;
    }
  };
}
 
const Footer = ({ blok }: Props) => {
  return (
    <footer 
      className='relative text-white bg-black' 
      {...storyblokEditable(blok)}
    >
      <div className='max-w-5xl p-4 py-16 mx-auto'>
        <div className='grid grid-cols-3 gap-8 lg:gap-16'>
          <div>
            <Link href='/' title='Go Home'>
              <span className='flex items-center'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={blok.footer_logotype.filename} 
                  alt={blok.footer_logotype.alt || 'Logotype of Luxensa'} 
                  className='mb-4'
                />
                <span className='pt-2 ml-4 text-3xl font-display'>Luxensa</span>
              </span>
            </Link>
            <p className='opacity-70'>{blok.footer_about}</p>
          </div>
          {blok.footer_columns.map((column: any) => (
            <div key={column._uid}>
              <h2 className='mb-4 text-xl font-display'>{column.title}</h2>
              <ul className='space-y-2'>
                {column.links.map((link: any) => (
                  <li key={link._uid} className='opacity-70 hover:opacity-100'>
                    <Link href='/'>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
    </footer>

  );
};
 
export default Footer;