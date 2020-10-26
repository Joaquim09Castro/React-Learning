import React from 'react';

import Main from '../Main/Main';
import Title from '../Title/Title';
import Img from '../Img_el/Img';
import Paragraph from '../Paragraph/Paragraph';

import about_img from '../../img/about-pic.jpg';

const AboutUs = () => {
    return (
    <Main>
      <Title>About Us</Title>

      <Img src={about_img} alt="Drinks on table"/>
      <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Vitae semper quis lectus nulla. Ac turpis egestas maecenas pharetra convallis posuere morbi. Mattis pellentesque id nibh tortor. Justo donec enim diam vulputate ut. Tristique senectus et netus et malesuada fames ac turpis. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Aliquam purus sit amet luctus venenatis lectus. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Cursus risus at ultrices mi tempus. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Lobortis feugiat vivamus at augue eget arcu dictum.

      </Paragraph>

    </Main>
  )
}

export default AboutUs;