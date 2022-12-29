import { storyblokEditable } from "@storyblok/react";

type Props = {
  blok: any;
}

const Feature = ({ blok }: Props) => (
  <div className='p-8 bg-white rounded-md'>
    {blok.icon ? <img className='mb-2' src={blok.icon.filename} alt={blok.icon.alt} /> : null}
    <h3 className='mb-4 text-xl font-bold font-display' {...storyblokEditable(blok)}>
      {blok.name}
    </h3>
    <p {...storyblokEditable(blok)} className='leading-relaxed text-gray-500'>{blok.text}</p>
  </div>
);
 
export default Feature;