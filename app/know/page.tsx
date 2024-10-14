import React from 'react';
import PageBanner from '@components/content/page-banner';
import { getDzgInfo } from "@apis/know";
import DynamicRender from "@/app/components/dynamic-render";

interface AboutKnowPageProps {}

const AboutKnowPage: React.FC<AboutKnowPageProps> = async () => {

  const data = await getDzgInfo();

  return (
    <div className='space-y-20 pb-20'>
      <PageBanner
        imageUrl={data.bannerUrl}
      />
      <DynamicRender tags={data.tags} />
    </div>
  )
}

export default AboutKnowPage
