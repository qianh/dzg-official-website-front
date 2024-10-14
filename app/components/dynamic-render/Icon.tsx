import type { ComponentProps } from "react";
import { getCacheComponent } from './util';
interface IDynamicIconRenderProps {
  [key: string]: any;
}

const CacheComponent: {[key:string]: any} = {};

const DynamicIconRender = ({ code, ...props }: IDynamicIconRenderProps) => {
  const DynamicComponent = getCacheComponent(code, 'icon');
  type DynamicComponentProps = ComponentProps<typeof DynamicComponent>;
  const DynamicProps: DynamicComponentProps = {
    ...props,
  };
  return <DynamicComponent key={code} {...DynamicProps} />;
};

export default DynamicIconRender;
