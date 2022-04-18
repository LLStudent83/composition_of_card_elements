/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import './cardStyle.css';

function Card(props) {
  const { children, ImgComp } = props;
  return (
    <div className="Card__wrapper">
      <div className="Card__imgContaner">
        {ImgComp}
      </div>
      <div className="Card__body">
        {children}
        <a href="#" className="btn">Go somewhere</a>
      </div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.array.isRequired,
  ImgComp: PropTypes.element,
};

Card.defaultProps = {
  ImgComp: null,
};

export default Card;
