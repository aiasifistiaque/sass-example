/** @format */

import React from 'react';
import Text from '../components/Text';
import colors from '../constants/colors';
import Container from '../components/Container';

export default function index() {
  return (
    <div className='container-center-column'>
      <Container color='lavender' size='full'>
        <Text size='medium' color='success'>
          regular
        </Text>
        <button className='button-danger'>is this the real life</button>
        <button className='button-primary-outlined'>
          is this just fantasy
        </button>
        <button className='button-primary-block'>is this just fantasy</button>
        <button className='button-success'>no escape</button>
      </Container>

      <p
        className='container-fullscreen'
        style={{
          backgroundColor: 'tomato',
          color: 'white',
        }}>
        Subdirectories are capped at a depth of 1. Too many deeply-nested
        directories becomes hard to code review, follow along, and find the
        component you are seeking when editing. <br /> If my GitHuboRepo
        component uses an Icon component which uses an Image component which
        uses an Svg component (and we’re going on the assumption that Icon,
        Image, and Svg are not reusable for the sake of example), it would be
        structured like so:
      </p>
      <div className='card-container'>
        <div className='card-rounded'>
          <img
            className='card-image'
            src='https://kbob.github.io/images/sample-5.jpg'
          />
          <p>one</p>
          <p>two</p>
        </div>
        <div className='card-elevated'>
          <img
            className='card-image'
            src='https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
          />
          <p className='card-header'>Heading</p>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className='button-primary-block'>click here</button>
        </div>
        <div className='card-rounded'>
          <p>three</p>
        </div>
        <p className='card-rounded'>three</p>
        <p className='card-rounded'>three</p>
        <p className='card-rounded'>three</p>
        <p className='card-rounded'>three</p>
        <p className='card-rounded'>three</p>
      </div>
    </div>
  );
}
