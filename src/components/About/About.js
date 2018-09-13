import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import './About.css';
import aboutPic from '../../photos/about_pic.jpg';

export default class About extends Component {
  render() {
    return (
      <div className='about_main'>
        <Parallax>
        <div className='about_body'>
            <h2>Hello there friends!</h2>
            <p className='about_p'>
              My name is Katherine and you can call me Kat if you like.
              I am a watercolor artist and architectural designer. I love creating original works of art that are bright, airy, and whimsical. I want to bring joy into peoples lives with my art. My mission is to provide you with unique art that speaks to you and represents you. From weddings to wall art I want to create beautiful memories for and about you.
                </p>
          </div>
        </Parallax>
        <Parallax
          bgImage={require('../../photos/about_pic.jpg')}
          bgHeight={"120%"}
          bgImageAlt="about"
          strength={200}
        >
          <div className='first_body'>
          </div>

        </Parallax>
        <Parallax strength={300} bg>
          <div>
            <h1>My Story</h1>
            <p>
              I studied architecture and worked in the business for five years when I started feeling creatively unfulfilled and un-inspired. It wasn’t until I got engaged and started planning my own wedding that I rediscovered my love for watercolor painting. I decided to design my own wedding stationery suite and other custom wedding items and voila I became an architectural designer turned custom illustrator!
              I am hopping obsessed with my baby bunny and three kitties, so if you're looking for custom puppy portraits, cat, or bunny portraits, I'll be honored to bring it to life before your very eyes.
              One paints when one must, does not one?
              </p>
          </div>
        </Parallax>
      </div>
    )
  }
}
