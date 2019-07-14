import React from 'react';

const Images = ({ data }) => (
  <div>
    {data &&
      data.map(d => (
        <img className="imgbox" key={d.thumbnail.split('_')[1]} src={d.thumbnail} alt={d.title} />
      ))}
  </div>
);

export default Images;
