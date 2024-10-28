import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { TContent } from '@/app/apis/home'

interface IntroduceShortListProps {
  name: string
  data: TContent[]
}

const IntroduceShortList: React.FC<IntroduceShortListProps> = ({ data }) => {
  return (
    <div className='space-y-40'>
      {data.map((item, idx) => (
        <div
          key={idx}
          className={clsx('container flex gap-24 items-center', (idx % 2) === 0 ? 'flex-row' : 'flex-row-reverse')}
        >
          <div className='flex-1'>
            <h2 className='text-4xl mb-12'>
              {item.title}
            </h2>
            <p className='text-base text-muted-foreground'>
              {item.introduction}
            </p>
          </div>
          <div className='flex-1'>
            <Image
              src={item.imageUrl!}
              alt={item.title}
              width={626}
              height={389}
              className='rounded-xl'
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default IntroduceShortList
