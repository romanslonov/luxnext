import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
// type Props = {
//   content: {
//     id: string;
//     title: string;
//     features: Feature[];
//     banner: {
//       file: ImageDataLike;
//     } & Image;
//   }
// }

type Props = {
  blok: any;
}


export default function GridBanner ({ blok }: Props) {
  const features = blok.features ?? [];
  const middleIndex = Math.ceil(features.length / 2);
  const group1 = [...features].splice(0, middleIndex);
  const group2 = [...features].splice(-middleIndex);
  
  return (
    <div className=''>
      <div className='max-w-5xl px-4 pt-16 mx-auto'>
        <h2 
          className='max-w-lg text-5xl leading-snug font-display' 
          {...storyblokEditable(blok)}
        >
          {blok.headline}
        </h2>
      </div>
      <div className='p-4'>
        <div className='max-w-5xl p-4 py-16 mx-auto space-y-8'>

          <ul className='grid grid-cols-3 gap-8'>
            {group1.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </ul>

          <img src={blok.banner.filename} alt={blok.banner.alt} />

          <ul className='grid grid-cols-3 gap-8'>
            {group2.map((nestedBlok) => (
              <li key={nestedBlok._uid}>
                <StoryblokComponent blok={nestedBlok} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
