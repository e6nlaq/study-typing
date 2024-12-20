'use client';
import { Link, Tab, Tabs } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

export function TopTab({
  children,
  force = false,
}: {
  children: React.ReactNode;
  force?: boolean;
}) {
  const path = usePathname();
  const taburl = new Set(['/', '/data', '/about', '/ranking']);

  return (
    <>
      <div className='flex w-screen px-5 flex-col'>
        {(taburl.has(path) || force) && (
          <div className='flex gap-4 items-center'>
            <Link
              className='text-xl text-justify font-bold'
              color='foreground'
              href='/'
            >
              Study Typing
            </Link>
            <Tabs aria-label='Options' selectedKey={path}>
              <Tab key='/' title='Home' href='/'></Tab>
              <Tab key='/data' title='Data' href='/data'></Tab>
              <Tab key='/ranking' title='Ranking' href='/ranking'></Tab>
              <Tab key='/about' title='About' href='/about'></Tab>
            </Tabs>
          </div>
        )}
        {children}
      </div>
    </>
  );
}
