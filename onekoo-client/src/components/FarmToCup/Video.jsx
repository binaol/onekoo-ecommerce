import React from 'react';

const Video = ({ embedId }) => (
  <div className="flex justify-center items-center bg-white py-4 px-2">
    <div className="relative w-full max-w-4xl pb-[56.25%]"> {/* 16:9 aspect ratio */}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube"
      />
    </div>
  </div>
);

export default Video;
