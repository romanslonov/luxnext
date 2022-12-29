import Link from 'next/link';
import Logotype from './Logotype';

type Props = {
  links: any;
  is_simple: boolean;
}

export default function Navigation ({ links, is_simple }: Props) {
  return (
    <nav className='absolute top-0 left-0 right-0 z-20'>
      <div className='flex items-center justify-between max-w-5xl p-4 mx-auto'>
        <Link href='/' title='Go Home'>
          <Logotype is_simple={is_simple} />
        </Link>

        <ul className='flex items-center space-x-8'>
          {links.map((link: any) => (
            <li key={link.id}>
              <Link href={link.real_path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}