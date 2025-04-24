//fetch video data from youtube api
import React from "react";
import "./youtube.css";

const YouTube = () => {
  const videoId = "bAS_kmnV09U";

  return (
    <div className="container youTube">
      <div className="title-section text-center mb-5 title">
        <h2>Music Channel On YouTube</h2>
      </div>
      <div>
        <iframe
          title="YouTube Video"
          width="100%"
          height="450"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YouTube;
