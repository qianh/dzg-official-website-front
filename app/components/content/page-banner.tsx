import Image from 'next/image'
import React from 'react'

interface PageBannerProps {
  imageUrl: string
  title?: string
}

const PageBanner: React.FC<PageBannerProps> = ({
  imageUrl,
  title
}) => {
  return (
    <div className="h-[512px] relative">
      <Image src={imageUrl} className="object-cover object-center" fill alt={title || 'banner'} />
      <div className="absolute size-full">
        <div className="container h-full pt-[132px]">
          {
            title && <h1 className="text-5xl">{title}</h1>
          }
        </div>
      </div>
    </div>
  )
}

export default PageBanner
