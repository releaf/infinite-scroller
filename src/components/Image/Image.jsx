import React, { Component } from 'react';
import PropTypes from 'prop-types';

const _loaded = {};

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: _loaded[this.props.src],
    };
  }

  onLoad() {
    _loaded[this.props.src] = true;
    this.setState(() => ({ loaded: true }));
  }

  render() {
    const {
      className,
      loadedClassName,
      loadingClassName,
      src,
      alt,
      ...props
    } = this.props;
    const classNames = [className];

    if (this.state.loaded) {
      classNames.push(loadedClassName);
    } else {
      classNames.push(loadingClassName);
    }

    return (
      <img
        {...props}
        src={src}
        alt={alt}
        className={classNames.join(' ').trim()}
        onLoad={this.onLoad.bind(this)}
      />
    );
  }
}

Image.defaultProps = {
  className: '',
  loadingClassName: 'img-loading',
  loadedClassName: 'img-loaded',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  loadingClassName: PropTypes.string,
  loadedClassName: PropTypes.string,
};

export default Image;
