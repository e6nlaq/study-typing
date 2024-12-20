'use client';

import { Button, Card, CardBody, CardFooter } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <div className='py-4 w-full'>
        <Card>
          <CardBody>
            <div className='flex flex-col justify-center items-center h-96 gap-5 m-5'>
              <p className='text-2xl'>HTTP</p>

              <div className='flex flex-col justify-center items-center m-8 gap-2'>
                <h1 className='text-7xl font-bold'>404</h1>

                <p className='text-xl'>よんまるよん</p>
              </div>

              <p className='text-2xl'>ページが存在しません</p>
            </div>
          </CardBody>
          <CardFooter>
            <div className='flex flex-col justify-center items-center w-full pb-5'>
              <Button
                color='primary'
                size='lg'
                onPress={() => router.replace('/')}
              >
                ホーム
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
