import React from 'react';

const NewsCard = ({ imageUrl, image, title, description, url }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4 w-96">
      <img
        src={imageUrl ? imageUrl : image}
        alt="news-image"
        className="h-40 w-full object-cover rounded-t-lg text-white"
      />
      <div className="p-4">
        <h5 className="text-lg font-semibold text-white h-12 overflow-hidden">{title ? title.slice(0, 50) : ''}</h5>
        <p className="text-white h-20 overflow-hidden">{description ? description.slice(0, 90) : ''}</p>
        <a href={url} className="btn bg-blue-500 text-white py-2 px-4 rounded mt-2 inline-block">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
