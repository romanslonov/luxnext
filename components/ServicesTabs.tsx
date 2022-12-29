import { storyblokEditable } from "@storyblok/react";
import { useState } from 'react';
import cx from 'clsx'
import ArrowLeftIcon from '@heroicons/react/20/solid/ArrowLeftIcon'
import ArrowRightIcon from '@heroicons/react/20/solid/ArrowRightIcon'
import Image from 'next/image';

type Props = {
  blok: any;
}

export default function ServicesTabs ({ blok }: Props) {
  const [index, setIndex] = useState(0);

  const tab = blok.tabs[index];

  const next = () => {
    if (index === (blok.tabs.length - 1)) {
      return setIndex(0);
    }

    setIndex(index + 1);
  }
  
  const prev = () => {
    if (index === 0) {
      return setIndex(blok.tabs.length - 1);
    }

    setIndex(index - 1);
  }

  return (
    <div>
      <h2 className='mb-8 text-5xl leading-snug text-center font-display' {...storyblokEditable(blok)}>{blok.headline}</h2>
      <div className='bg-white'>
        <div className='max-w-5xl p-4 py-16 mx-auto space-y-8'>
          <ul className='flex items-center space-x-2'>
            {blok.tabs.map((tab: any, i: number) => (
              <li 
                onClick={() => setIndex(i)} 
                key={tab._uid} 
                className={cx(['w-3 h-3 rounded-full', i === index ? 'bg-yellow-400' : 'bg-gray-300'])}
              ></li>
            ))}
          </ul>
          <ul>
            <li key={tab._uid} className="grid grid-cols-2 gap-16">
              <div>
                <h2 
                  className='mb-8 text-5xl font-bold leading-snug font-display'
                  {...storyblokEditable(blok)}
                >
                  {tab.name}
                </h2>
                <p 
                  className='text-lg leading-relaxed text-gray-500' 
                  {...storyblokEditable(blok)}
                >
                  {tab.text}
                </p>
                <div className='flex items-center mt-8 space-x-4'>
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
              <div>
                <Image className='rounded-md' src={tab.image.filename} alt={tab.image.alt} priority width={1000} height={1000}></Image>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
