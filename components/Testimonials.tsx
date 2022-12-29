import { useState } from 'react';
import { renderRichText, storyblokEditable } from '@storyblok/react';
import cx from 'clsx';
import StarIcon from '@heroicons/react/20/solid/StarIcon';
import ArrowLeftIcon from '@heroicons/react/20/solid/ArrowLeftIcon'
import ArrowRightIcon from '@heroicons/react/20/solid/ArrowRightIcon'
import Image from 'next/image';

type Props = {
  blok: any;
}

export default function Testimonials ({ blok }: Props) {
  const [index, setIndex] = useState(0);
  const testimonials =  blok.testimonials.content.items;
  const testimonial= testimonials[index];
  const stars = Array.from({length: 5}, (_, i) => i + 1);

  const next = () => {
    if (index === (testimonials.length - 1)) {
      return setIndex(0);
    }

    setIndex(index + 1);
  }
  
  const prev = () => {
    if (index === 0) {
      return setIndex(testimonials.length - 1);
    }

    setIndex(index - 1);
  }
  
  return (
    <div className='max-w-5xl px-4 py-16 mx-auto'>
      <h2 
        className='mb-8 text-5xl leading-snug text-center font-display' 
        {...storyblokEditable(blok)}
      >
        {blok.testimonials.content.title}
      </h2>
      <div className='relative grid items-end grid-cols-5'>
        <div className='col-span-2'>
          <div className='flex items-end gap-8 absolute bottom-4 left-0 right-[40%]'>
            <div 
              className='flex-1 p-8 space-y-8 bg-yellow-400 rounded-md'
            >
              <ul className='flex items-center space-x-1'>
                {stars.map((v) => (
                  <li key={v} {...storyblokEditable(blok)}>
                    <StarIcon 
                      className={cx([v <= testimonial.rating ? 'text-black' : 'text-yellow-600'])} 
                      width={18} 
                      height={18} 
                    />
                  </li>
                ))}
              </ul>

              <div 
                className='text-2xl'
                {...storyblokEditable(blok)}
                dangerouslySetInnerHTML={{ __html: renderRichText(testimonial.text) }}
              />
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-yellow-500 rounded-full'></div>
                <div>
                  <h3 {...storyblokEditable(blok)} className='font-bold'>{testimonial.name}</h3>
                  <p {...storyblokEditable(blok)} className='opacity-70'>{testimonial.description}</p>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <button 
                className='flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full' 
                onClick={prev}
              >
                {<ArrowLeftIcon height={24} width={24} />}
              </button>
              <button 
                className='flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full' 
                onClick={next}
              >
                {<ArrowRightIcon height={24} width={24} />}
              </button>
            </div>
          </div>
          
        </div>
        <div className='col-span-3'>
          <Image 
            {...storyblokEditable(blok)}
            className='w-auto h-auto rounded-md'
            width={1000}
            height={1000}
            src={blok.testimonials.content.image.filename} 
            alt={blok.testimonials.content.image.alt} 
          />
        </div>
      </div>
    </div>
  );
}