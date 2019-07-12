import React from 'react';
import MainImage from './mainimage.jsx';
import ThumbnailImage from './thumbnailimage.jsx';
// import ScrollView, { ScrollElement } from './scroll.jsx';
import { Link, animateScroll as scroll } from 'react-scroll';

const fetch = require('node-fetch');

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  // scrollTo = (name) => {
  //   this._scroller.scrollTo(name);
  // }

  componentDidMount() {
    const id = window.location.pathname.substring(1);
    // console.log(id)
    fetch(`/api/${id}`)
      .then(res => res.json())
      .then((urls) => {
        this.setState({
          photos: urls,
        });
      })
      .catch(() => console.log('failed to get URLs'));
  }


  render() {
    // console.log(this.state.photos)
    const photoArr = this.state.photos;
    // console.log(this.state.photos[0])
    // console.log(this.state)
    // const urls = this.state.photos[0].photo_urls
    return (
      <div className="photos">
        <div className="thumbnailPhotos">
          {photoArr.map(image => <ThumbnailImage image={image} />)}
        </div>
        <div className="mainPhotos">
          {photoArr.map(image => <MainImage image={image} />)}
        </div>
      </div>
    );
  }
}

export default Photos;
