import Image from 'next/image'
import React from 'react'
import { TContent } from '@/app/apis/home'

interface WhySelectDzgProps {
  name: string
  data: TContent[]
}

const WhySelectDzg: React.FC<WhySelectDzgProps> = ({ data }: WhySelectDzgProps) => {
  return (
    <div className='container'>
      <div className='text-5xl mb-14 text-center'>
        为什么选择大掌柜
      </div>
      <div className='flex gap-8'>
        <div className='flex-[3] relative'>
          <Image
            src={`https://img.js.design/assets/img/66b495b6c8cc88b8f63a5bf5.png#2f2d9a3f638dcd016733218b9500e8f0`}
            alt=''
            fill
            className='object-cover object-center rounded-3xl'
          />
        </div>
        <div className='flex-[2] space-y-4'>
          {data.map((item, idx) => (
            <div className='py-7 px-9 shadow-card rounded-3xl' key={idx}>
              <p className='text-2xl mb-7'>{item.title}</p>
              <p className='text-muted-foreground'>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhySelectDzg
