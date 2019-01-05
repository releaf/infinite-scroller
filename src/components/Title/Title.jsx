import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

import { Image } from '../';
import { ASSET_URL } from '../../constants';
import './Title.scss';

const Title = ({
  titleId,
  title,
  artKey,
  artistName,
}) => (
  <div
    key={titleId}
    className="title-container col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center"
  >
    <LazyLoad
      debounce={false}
      offsetVertical={600}
    >
      <div className="img-container">
        <Image
          src={`${ASSET_URL}${artKey}_270.jpeg`}
          alt={title}
          className="img-fluid"
        />
      </div>
    </LazyLoad>
    <h5 className="mt-2 mb-0 font-weight-light">{title}</h5>
    {artistName && <h6 className="h6 font-weight-light">Starring: {artistName}</h6>}
  </div>
);

Title.defaultProps = {
  artistName: null,
};

Title.propTypes = {
  titleId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artistName: PropTypes.string,
  artKey: PropTypes.string.isRequired,
};

export default Title;
