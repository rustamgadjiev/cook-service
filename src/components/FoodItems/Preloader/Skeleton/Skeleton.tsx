import ContentLoader, { IContentLoaderProps } from "react-content-loader";

export const Skeleton = (
  props: JSX.IntrinsicAttributes & IContentLoaderProps
) => (
  <ContentLoader
    speed={2}
    width={360}
    height={559}
    viewBox="0 0 360 559"
    backgroundColor="#f3f3f3"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="0" y="0" rx="30" ry="30" width="360" height="295" />
    <rect x="18" y="316" rx="10" ry="10" width="320" height="23" />
    <rect x="20" y="352" rx="10" ry="10" width="52" height="20" />
    <circle cx="83" cy="363" r="6" />
    <rect x="98" y="352" rx="10" ry="10" width="52" height="20" />
    <circle cx="162" cy="363" r="6" />
    <rect x="177" y="352" rx="10" ry="10" width="52" height="20" />
    <rect x="21" y="390" rx="20" ry="20" width="292" height="116" />
  </ContentLoader>
);
