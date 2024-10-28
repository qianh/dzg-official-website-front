"use client";

import React from 'react';

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(!window.polyvPlayer){
      this.loadScript('https://player.polyv.net/resp/vod-player/latest/player.js')
      .then(() =>{
        this.loadPlayer();
      });
    } else {
      this.loadPlayer();
    }
  }

  componentWillUnmount() {
    if(this.player){
      console.log(this.player);
      this.player.destroy();
    }
  }

  loadPlayer() {
    this.player = window.polyvPlayer({
      wrap: this.props.wrap || '.dzg-player',
      width: '100%',
      height: '100%',
      vid: this.props.vid,
      autoplay: true
    });
  }

  loadScript(src) {
    const headElement = document.head || document.getElementsByTagName('head')[0];
    const _importedScript = {};

    return new Promise((resolve, reject) => {
      if (src in _importedScript) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.onerror = err => {
        headElement.removeChild(script);
        reject(new URIError(`The Script ${src} is no accessible.`));
      }
      script.onload = () => {
        _importedScript[src] = true;
        resolve();
      }
      headElement.appendChild(script);
      script.src = src;
    })
  }

  render() {
    return (
      <div className="wrap">
        <div className="player"></div>
      </div>
    )
  }
}

export default Player;
