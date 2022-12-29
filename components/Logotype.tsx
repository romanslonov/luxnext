type Props = {
  is_simple?: boolean
}
export default function Logotype ({ is_simple }: Props) {
  return (
    <span className='flex items-center'>
      <img 
        src={is_simple 
          ? 'https://a-us.storyblok.com/f/1003481/x/046469f141/logo_dark.svg' 
          : 'https://a-us.storyblok.com/f/1003481/x/9f064dfd31/logotype_light.svg'
        } 
        alt='Logotype of Luxensa' 
      />
      <span className='pt-2 ml-4 text-3xl font-display'>Luxensa</span>
    </span>
  )
}