import React, { Component } from 'react'
import Photo from './Photo'
import NotFound from './NotFound'
import Route from 'react-router-dom';

class PhotoContainer extends Component {
    componentDidMount() {
        if (this.props.search !== this.props.query) {
            this.props.getPics(this.props.query);
        }
    }


    render() {
        const data = this.props.data;

        let photos = data.map( (photo) => {
            return <Photo id={photo.id} 
                          server={photo.server} 
                          secret={photo.secret} 
                          title={photo.title} 
                          key={photo.id}       
                    />
        });

        if (data.length !== 0) {
            return (
                <div className="photo-container">
                    <h2>
                        Reults for {this.props.title !== 0}
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