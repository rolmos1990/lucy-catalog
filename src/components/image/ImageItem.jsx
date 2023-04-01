import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultImage from '../../assets/images/media/imagen_no_disponible.png';
import DefaultImageCatalog from '../../assets/images/media/sin_imagen_catalogo.png';

export const defaultImage = DefaultImage;
export const defaultImageCategory = DefaultImageCatalog;

export class ImageItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            src: props.src,
            errored: false,
            category: props.category
        };
    }

    onError = () => {
        if (!this.state.errored) {
            this.setState({
                src: this.state.category ? defaultImageCategory : defaultImage,
                errored: true,
            });
        }
    }

    render() {
        const { src } = this.state;
        const {
            src: _1,
            fallbackSrc: _2,
            ...props
        } = this.props;

        return (
            <img
                src={src}
                onError={this.onError}
                {...props}
            />
        );
    }
}

ImageItem.propTypes = {
    src: PropTypes.string,
    fallbackSrc: PropTypes.string,
    category: PropTypes.bool
};
