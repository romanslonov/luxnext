type Props = {
  blok: {
    label: string; 
    link: { url: string; cached_url: string; };
  }
}

export default function Button ({ blok }: Props) {
  if (blok.link.url) {
    return <a href={blok.link.cached_url}>{blok.label}</a>
  }

  return (
    <button className='h-12 px-8 mt-8 font-bold text-black bg-yellow-400 rounded'>
      {blok.label}
    </button>
  )
}