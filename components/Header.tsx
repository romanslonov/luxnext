import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import Navigation from './Navigation';
import cx from 'clsx';
import Image from 'next/image';

type Props = {
  blok: {
    title: string;
    description: string;
    actions: [];
    background: {
      filename: string;
      alt?: string;
    },
    is_simple: boolean;
  };
  links: any;
}
 
const Header = ({ blok, links }: Props) => {
  return (
    <header 
      className={cx('relative bg-cover overflow-hidden', blok.is_simple === false && 'text-white')} 
      {...storyblokEditable(blok)}
      style={blok.is_simple ? {} : { backgroundImage: `url(${blok.background.filename})`}}
    >
      <Navigation is_simple={blok.is_simple} links={links} />
      <div 
        className={cx(['relative z-10', blok.is_simple ? 'bg-white' : 'bg-black/60 text-center'])}
      >
        <div className={cx(['py-48 mx-auto', blok.is_simple ? 'max-w-5xl p-4 grid grid-cols-2 items-center gap-8' : 'max-w-2xl'])}>
          <div>
            <h1 
              className='mb-8 font-bold leading-snug font-display text-7xl' 
              {...storyblokEditable(blok)}
            >
              {blok.title}
            </h1>
            <p 
              className='text-2xl leading-relaxed opacity-75' 
              {...storyblokEditable(blok)}
              dangerouslySetInnerHTML={{__html: blok.description.replaceAll('\n', '<br/>')}}
            >
            </p>
            {blok.actions && blok.actions.length 
              ? blok.actions.map((nestedBlok: any) => (
                  <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))
              : null
            }
          </div>
          {blok.is_simple 
            ? <Image 
                priority 
                width={1000} 
                height={1000} 
                src={blok.background.filename} 
                alt={blok.background.alt || 'Header image'} 
              /> 
            : null
          }
        </div>
      </div>
    </header>

  );
};
 
export default Header;