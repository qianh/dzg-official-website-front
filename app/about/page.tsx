import React from 'react'
import PageBanner from '@components/content/page-banner'
import { getAboutData } from '@/app/apis/about' 
import { TContent } from '@/app/apis/home'
import Contract from "@components/contract";
import AddressMap from '@components/address-map';
import DynamicRender from "@/app/components/dynamic-render";

interface AboutPageProps {
  solutionData: TContent[];
}

const AboutPage: React.FC<AboutPageProps> = async () => {

  const aboutData = await getAboutData()

  return (
    <div className='space-y-20'>
      <PageBanner
        imageUrl={aboutData.bannerUrl!}
      />
      <DynamicRender tags={aboutData.tags} />
      <AddressMap />
      <Contract />
    </div>
  )
}

export default AboutPage
