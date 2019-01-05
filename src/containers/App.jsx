import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Grid } from '../components/index';
import { getTitles } from '../actions/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      titleCount: 50,
      lastId: null,
    };
    this.throttledScroll = _.throttle(this.handleScroll.bind(this), 500);
  }
  componentDidMount() {
    const { offset, titleCount } = this.state;
    this.props.getTitles(offset, titleCount);
    window.addEventListener('scroll', this.throttledScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttledScroll);
  }
  handleScroll() {
    const { lastId, offset, titleCount } = this.state;
    const { titles } = this.props;
    const lastTitleInProps = titles[titles.length - 1].titleId;

    // If we've reached the end of the data set, prevent any more requests.
    if (lastId && lastId === lastTitleInProps) return;
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      this.setState(() => ({
        offset: offset + titleCount,
        lastId: lastTitleInProps,
      }), () => this.props.getTitles(this.state.offset, this.state.titleCount));
    }
  }
  render() {
    const { titles } = this.props;
    if (titles.length > 0) {
      return (
        <div className="container mt-4">
          <div className="row">
            <div className="col-12">
              <h1 className="display-4 font-weight-light h3">Movies</h1>
            </div>
          </div>
          <Grid titles={titles} />
        </div>
      );
    }
    return (
      <div
        style={{ height: '100vh' }}
        className="d-flex align-items-center justify-content-center"
      >
        <h1 className="text-black-50 font-weight-light">Loading...</h1>
      </div>
    );
  }
}

App.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.shape({
    titleId: PropTypes.number,
    title: PropTypes.string,
    artistName: PropTypes.string,
    artKey: PropTypes.string,
  })).isRequired,
  getTitles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  titles: state.titles,
});

const mapDispatchToProps = dispatch => (
  {
    getTitles: (offset, limit) => {
      dispatch(getTitles(offset, limit));
    },
  }
);
const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default hot(module)(appContainer);
