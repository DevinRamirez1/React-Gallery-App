import React, { Component } from 'react'
import Photo from './Photo'
import NotFound from './NotFound'

class PhotoContainer extends Component {
    componentDidMount() {
        if (this.props.search !== this.props.query) {
            this.props.getPics(this.props.query);
        }
    }


    render() {
        const data = this.props.data;

        let photos = data.map( (photo) => {
            return <Photo id={photo.id} server={photo.server} title={photo.title} key={photo.id} />
        });

        if (data.length !== 0) {
            return (
                <div className="photo-container">
                    <h2>
                        {this.props.category.length !== 0 ? `Results - ${this.props.category}` : `Results - ${this.prop.query}`}
                    </h2>
                    <ul>
                        {photos}
                    </ul>
                </div>
            );            
        } else {
            return (
                <Route component={NotFound} />
            )
        }
    }
}

export default PhotoContainer