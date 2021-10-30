import React, { Component } from 'react'
import Photo from './Photo'
import NotFound from './NotFound'

class PhotoContainer extends Component {
    componentDidMount() {
        if (this.props.search !== this.props.query) {
            this.props.getPics(this.props.query);
        }
    }


}

export default PhotoContainer