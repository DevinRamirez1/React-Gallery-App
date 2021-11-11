import React, { Component } from 'react'
import Photo from './Photo'
import NotFound from './NotFound'
import { Route } from 'react-router-dom';

class PhotoContainer extends Component {
    componentDidMount() {
        if (this.props.search !== this.props.query) {
            this.props.getPics(this.props.query);
        }
    }

    //renders the container that will hold all the photos
    render() {
        const results = this.props.data;
        let photos;
        if (results.length > 0)
        photos = results.map( (photo) => {
            return <Photo id={photo.id} 
                          server={photo.server} 
                          secret={photo.secret} 
                          title={photo.title} 
                          key={photo.id}       
                    />
        });

        if (results.length !== 0) {
            return (
                <div className="photo-container">
                    <h2>
                        Results for {this.props.title}
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