import React from 'react';

const Video = ({ data }) => (
  <div>
    {data && (
      <iframe
        title="youtube"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        width="788.54"
        height="443"
        type="text/html"
        src={`https://www.youtube.com/embed/${
          data.videoId
        }?autoplay=0&fs=0&start=0&end=0`}
      />
    )}
  </div>
);

export default Video;
