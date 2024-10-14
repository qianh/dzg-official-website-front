import dynamic from "next/dynamic";
const CACHE_COMPONENT: {[key: string]: any} = {}

export function getCacheIconComponent(code: string) {
  const DynamicComponent = CACHE_COMPONENT[`icon-${code}`] ?? dynamic(() => import(`@components/icon/${code}`), { ssr: false });
  CACHE_COMPONENT[`icon-${code}`] = DynamicComponent;
  return DynamicComponent
}

export function getCacheContentComponent(code: string) {
  const DynamicComponent = CACHE_COMPONENT[`content-${code}`] ?? dynamic(() => import(`@components/content/${code}`));
  CACHE_COMPONENT[`content-${code}`] = DynamicComponent;
  return DynamicComponent
}

export function getCacheComponent(code: string, type: 'icon' | 'content' = 'content') {
  switch (type) {
    case 'icon':
      return getCacheIconComponent(code);
    case 'content':
    default:
      return getCacheContentComponent(code);
  }
}