import React from 'react';
import PropTypes from 'prop-types';

import { Title } from '../';

const Grid = ({ titles }) => (
  <div className="row">
    <div className="col-12">
      <h2 className="font-weight-light h4">Featured Titles</h2>
    </div>
    {titles.map(item => <Title key={item.titleId} {...item} />)}
  </div>
);

Grid.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.shape({
    titleId: PropTypes.number,
    title: PropTypes.string,
    artistName: PropTypes.string,
    artKey: PropTypes.string,
  })).isRequired,
};

export default Grid;
