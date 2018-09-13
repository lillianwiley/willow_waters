import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Willow from '../../photos/transparent_flowers.png'
import Crest from '../../photos/wedding_crest.jpg';
import './Home.css';

export default class Home extends Component {

    render() {
        return (
            <div className="container">
                <div className='first_body'>
                    <div className="hero-text">
                        <h1 className="hero-title">Hello Friends!</h1>
                        <h1 className='sub-hero-title'>One of the things</h1>
                        <div className="hero-btns">
                            <Link to='/shop'><button className='shop_prints_button'>
                                <h3>Shop Prints</h3>
                            </button></Link>
                            <Link to=''><button className='shop_custom_button'>
                                <h3>Shop Custom Art</h3>
                            </button></Link>
                            <Link to='/shop'><button>
                                <h3 className='portfolio_button'>Browse Portfolio</h3>
                            </button></Link>
                        </div>
                        <h1></h1>

                    </div>
                    <Parallax
                        bgImage={require('../../photos/pink-peonies-background.jpg')}
                        bgHeight={"120%"}
                        bgImageAlt="peonies"
                        strength={200}
                    >
                        <div className='first_body'>
                        </div>

                    </Parallax>
                    <Parallax strength={300} bg>
                        <div className='home_first_body'>
                            <h1>Willow Waters Original watercolors - beautifully simple and magically colorful.</h1>
                            <hr className='style-one' />
                            <h3>
                                <img className='floral_break_img' src={Willow} alt="" />
                            </h3>
                            <hr className='style-two' />
                            <h1>
                                Curate the lifestyle you want with Willow Waters' botanical illustrations and beautiful watercolors.
                            </h1>
                        </div>
                        <Background className="custom-bg">
                            <img src='' alt="fill murray" />
                        </Background>
                    </Parallax>
                    <div className="hero-text2">
                        {/* <h1>
                        Hello there friends!

                        I am a watercolor artist and architectural designer. I love creating original works of art that are bright, airy, and whimsical. I want to bring joy into peoples lives with my art. My mission is to provide you with unique art that speaks to you and represents you. From weddings to wall art I want to create beautiful memories for and about you.
                        </h1> */}
                    </div>
                    <Parallax
                        bgImage={require('../../photos/tree-tunnel.jpg')}
                        bgHeight={'100%'}
                        bgImageAlt="peonies"
                        strength={200}
                    >
                        <div className='first_body'>

                        </div>
                        <div style={{ height: '200px' }} />
                    </Parallax>
                    <Parallax strength={300}>
                        <div className='second_body'>
                            <h2>
                                Tying the knot? Whatever your design need is, with my rigorous design background I am uniquely qualified to bring your ideas to life.
                            </h2>
                            <hr className='style-one' />
                            <img className='crest_image' src={Crest} alt="" />
                            <hr className='style-one' />
                            <Link to=''><button className='wedding_button'>
                                Browse Wedding Suites
                            </button></Link>
                            <hr className='style-three' />


                        </div>
                        <Background className="custom-bg">
                            <img src="" alt="fill murray" />
                        </Background>
                    </Parallax>
                    <Parallax
                        bgImage={require('../../photos/burgundy_floral.jpg')}
                        bgHeight={'100%'}
                        bgImageAlt="peonies"
                        strength={200}
                    >
                        <div className='first_body'>
                        </div>
                        <div style={{ height: '200px' }} />
                    </Parallax>
                    <Parallax strength={300}>
                        <div className='footer_div'>
                            <footer>
                                <h3 className='footer_h3'> HOURS </h3>
                                <p className='p'>
                                    by appointment only please contact me via email to book an appointment!
                                </p>
                                <h3 className='footer_h3'> GET IN TOUCH</h3>
                                <h5 className='footer_h5'> willowwatersillustration@gmail.com </h5>
                                <ul className='footer_links'>
                                    <li><a href="https://www.instagram.com/willow_waters_illustration/"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href='https://www.facebook.com/WillowWatersIllustration/photos/a.541908616153030/649807038696520/?type=3&notif_t=page_post_reaction&notif_id=1535576390064491&ref=bookmarks&soft=notifications'><i class="fab fa-facebook"></i></a></li>
                                    <li><a href="https://www.pinterest.com/pin/790452172070852254/?lp=true"><i class="fab fa-pinterest"></i></a></li>
                                    <li><a href="https://mobile.twitter.com/willow_waters_i"><i class="fab fa-twitter"></i></a></li>
                                </ul>
                                <hr className='style-one'/>
                                <h4 className='insta_footer'>@willow_waters_illustration</h4>
                            </footer>
                        </div>
                        {/* <Background className="custom-bg">
                            <img src="" alt="fill murray" />
                        </Background> */}
                    </Parallax>
                </div>
            </div>
        );
    }
}
