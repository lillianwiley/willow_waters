import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className='about_main'>
      <Parallax
          bgClassName='greenery-pic'
          bgImage={require('../../photos/greenleaves.jpg')}
          bgHeight={"120%"}
          bgImageAlt="about"
          strength={200}
        >
          <div className='first_body'>
          </div>

        </Parallax>
        <Parallax>
          <div className='about_body'>
            <h2 className='title'>Hey there friends!</h2>
            {/* <hr className='style-one' /> */}
            <p className='about_p'>
              My name is Katherine and you can call me Kat if you like.
              I am a watercolor artist and architectural designer. 
              <hr className='style-two'/>
              <h1 className='bold-quote'>I love creating original works of art that are bright, airy, and whimsical.</h1> <hr className='style-two'/>
              I want to bring joy into peoples lives with my art. My mission is to provide you with unique art that speaks to you and represents you. From weddings to wall art I want to create beautiful memories for and about you.
                </p>
          </div>
        </Parallax>
        <Parallax
          bgImage={require('../../photos/about_pic.jpg')}
          bgHeight={"130%"}
          bgImageAlt="about"
          strength={200}
        >
          <div className='second_body'>
          </div>

        </Parallax>
        <Parallax strength={300} bg>
          <div className='second_body_about'>
            <h1 className='title'>My Story</h1>
            <hr className='style-three' />
            <p>
              I studied architecture and worked in the business for five years when I started feeling creatively unfulfilled and un-inspired. <p className='bold-text'>It wasn’t until I got engaged and started planning my own wedding that I rediscovered my love for watercolor painting.</p> I decided to design my own wedding stationery suite and other custom wedding items and voila I became an architectural designer turned custom illustrator!
              <p className='bold-text'>I am hopping obsessed with my baby bunny and three kitties</p> so if you're looking for custom puppy portraits, cat, or bunny portraits, I'll be honored to bring it to life before your very eyes.
              One paints when one must, does not one?
              </p>

          </div>
            <div className='footer_div'>
                    <footer>
                        <h3 className='footer_h3'> HOURS </h3>
                        <p className='p'>
                            by appointment only please contact me via email to book an appointment!
                                </p>
                        <h3 className='footer_h3'> GET IN TOUCH</h3>
                        <h5 className='footer_h5'> willowwatersillustration@gmail.com </h5>
                        <hr className='style-one' />
                        <ul className='footer_links'>
                            <li><a href="https://www.instagram.com/willow_waters_illustration/"><i class="fab fa-instagram"></i></a></li>
                            <li><a href='https://www.facebook.com/WillowWatersIllustration/photos/a.541908616153030/649807038696520/?type=3&notif_t=page_post_reaction&notif_id=1535576390064491&ref=bookmarks&soft=notifications'><i class="fab fa-facebook"></i></a></li>
                            <li><a href="https://www.pinterest.com/pin/790452172070852254/?lp=true"><i class="fab fa-pinterest"></i></a></li>
                            <li><a href="https://mobile.twitter.com/willow_waters_i"><i class="fab fa-twitter"></i></a></li>
                        </ul>
                    </footer>
                </div>
        </Parallax>
      </div>
    )
  }
}
