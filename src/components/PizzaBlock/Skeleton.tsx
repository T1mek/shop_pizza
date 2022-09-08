import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader className="pizza-block"
    speed={0}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="276" y="171" rx="0" ry="0" width="5" height="2" />
    <circle cx="136" cy="125" r="125" />
    <rect x="0" y="270" rx="10" ry="10" width="280" height="32" />
    <rect x="0" y="320" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="431" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="433" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
