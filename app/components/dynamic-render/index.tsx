import { getCacheComponent } from './util';
import type { ComponentProps } from "react";
import { TTagData } from "@/app/apis/home";

interface IDynamicRenderProps {
  tags: TTagData[]
  [key: string]: any
}

const DynamicRender = ({tags, ...props}: IDynamicRenderProps) => {
  return (
    <>
      {tags?.map((tag: any, index: number) => {
        const DynamicComponent = getCacheComponent(tag.code)
        type DynamicComponentProps = ComponentProps<typeof DynamicComponent>;
        const DynamicProps: DynamicComponentProps = {
          data: tag.tags || tag.list,
          name: tag.name,
          code: tag.code,
          ...props
        };
        return <DynamicComponent key={index} {...DynamicProps} />;
      })}
    </>
  );
};

export default DynamicRender;