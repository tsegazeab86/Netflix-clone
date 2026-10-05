// import React from 'react';
import './Skeleton.css';

export const SkeletonBanner = () => (
  <div className="skeleton__banner shimmer">
    <div className="skeleton__bannerText">
      <div className="skeleton__line title"></div>
      <div className="skeleton__line btn"></div>
      <div className="skeleton__line desc"></div>
    </div>
  </div>
);

export const SkeletonRow = () => (
  <div className="skeleton__row">
    <div className="skeleton__line rowTitle shimmer"></div>
    <div className="skeleton__posters">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="skeleton__poster shimmer"></div>
      ))}
    </div>
  </div>
);