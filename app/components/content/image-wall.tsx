import Image from 'next/image'
import React from 'react'
import clsx from 'clsx'

interface ImageWallProps {
  className?: string
}

const ImageWall: React.FC<ImageWallProps> = ({ className }) => {
  const imageList = new Array<string>(21).fill('https://img.js.design/assets/img/66b490975c6a4ce695c7c09b.png#00138cd12edd43b26a4299c0841515d9')

  return (
    <div className={clsx('grid grid-cols-7', className)}>
      {
        imageList.map((url, idx) => (
          <div className="relative w-full h-0 pt-[100%]" key={idx}>
            <Image className='object-cover object-center' src={url} fill alt="" />
          </div>
        ))
      }
    </div>
  )
}

export default ImageWall
