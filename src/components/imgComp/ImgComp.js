/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './imgCompStyle.css';

function ImgComp({ imgSrc }) {
  return (
    <div className="ImgComp__wrapper">
      <img className="ImgComp__img" src={imgSrc} alt="просто картинка" />
    </div>
  );
}

ImgComp.propType = {
  imgSrc: PropTypes.string.isRequired,
};

export default ImgComp;
