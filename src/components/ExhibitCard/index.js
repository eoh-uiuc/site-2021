import React from "react";
import ReactPlayer from "react-player";

const ExhibitCard = ({ data }) => {
  return (
    <div className="exhibit-card-wrapper">
      <div className="exhibit-card-content">
        <p className="exhibit-card-rso-name">{data.rso}</p>
        {data.video && (
          <div className="exhibit-card-video">
            <ReactPlayer width="100%" height="100%" url={data.video} controls />
          </div>
        )}
        <h4 className="exhibit-card-name">{data.name}</h4>
        <div className="exhibit-card-tagline">
          {data.tags.map((tag) => (
            <p className="exhibit-card-tag">{tag}</p>
          ))}
        </div>
        <p className="exhibit-card-description">{data.description}</p>
      </div>
      <div className="exhibit-card-footer">
        {data.links.map((link) => (
          <a target="_blank" rel="noopener noreferrer" href={link.address}>
            <button className="red-link-button exhibit-card-link">
              {link.name}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExhibitCard;
