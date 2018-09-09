import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import './Home.css';

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <div className='first_body'>
                    <div className="hero-text">
                        <h1 className="hero-title">Hi Friends!</h1>
                            <button className='shop_prints_button'>
                                <h1>Shop Prints</h1>
                            </button>
                            <button className='shop_custom_button'>
                                <h1>Shop Custom Art</h1>
                            </button>

                    </div>
                    <Parallax
                        bgImage={require('../../photos/pink-peonies-background.jpg')}
                        bgHeight={'100%'}
                        bgImageAlt="peonies"
                        strength={200}
                    >
                        <div className='first_body'>
                        </div>
                        <div style={{ height: '200px' }} />
                    </Parallax>
                    <Parallax strength={300} bg>
                        <div className='home_first_body'>Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        </div>
                        <Background className="custom-bg">
                            <img src="" alt="fill murray" />
                        </Background>
                    </Parallax>
                    <div className="hero-text2">
                        <h1>Hello</h1>
                    </div>
                    <Parallax
                        bgImage={require('../../photos/kwiley-rock.jpg')}
                        bgHeight={'100%'}
                        bgImageAlt="peonies"
                        strength={200}
                    >
                        <div className='first_body'>
                        </div>
                        <div style={{ height: '200px' }} />
                    </Parallax>
                    <Parallax strength={300}>
                        <div>Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        </div>
                        <Background className="custom-bg">
                            <img src="" alt="fill murray" />
                        </Background>
                    </Parallax>
                    <Parallax
                        bgImage={require('../../photos/tulip-background.jpg')}
                        bgHeight={'100%'}
                        bgImageAlt="peonies"
                        strength={200}
                    >
                        <div className='first_body'>
                        </div>
                        <div style={{ height: '200px' }} />
                    </Parallax>
                    <Parallax strength={300}>
                        <div>Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        Use the background component for custom elements
                        </div>
                        <Background className="custom-bg">
                            <img src="" alt="fill murray" />
                        </Background>
                    </Parallax>
                </div>
            </div>
        );
    }
}
