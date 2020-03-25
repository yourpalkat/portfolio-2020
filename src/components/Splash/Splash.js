import React from 'react';
import FancyText from '../FancyText/FancyText';

import SplashStyles from './Splash.module.scss';

const Splash = () => {
  return (
    <section id="splash" className={SplashStyles.splashSection}>
      <div className="gridWrapper">
        <div className={SplashStyles.indexTitleBlock}>
          <FancyText text="front end web dev" />
        </div>
        <div className={SplashStyles.indexContentBlock}>
          <h3 className="title">Hi, hello</h3>
          <p>Hello from the west end of sunny Toronto, Canada, where craft brewers are starting to outnumber convenience stores. I’m Derek. </p>
          <p>I’m a front-end developer. I also have a little experience in back-end, some training in UX, and a ton of graphic design experience from a past life, but the front end is where my heart lies. I love building projects that people find useful, beautiful, and of course, accessible. </p>
          <p>I’m also a mentor and part-time instructor, teaching intro to web development, which is amazing: if you ever want to learn something really well, teach it to someone else. And if you ever want to relive the excitement and enthusiasm that first drew you to something? Again, teach it to someone else.</p>
          <p>If you scroll down a bit, you’ll see a few projects I’ve worked on recently that I’m proud of and excited to share, and also some things I’ve written. And below that, you can see how to get in touch – if you’d like to work together or just want to chat, I’d love to hear from you. Potential topics of conversation include: site accessibility, how awesome CSS is, how much fun it is developing with Gatsby, long-distance running, or my favourite breakfast foods (spoiler: it’s, uh, all of them). </p>
          <p>What am I working with these days? What am I interested in and excited to learn more about at the moment? I’m glad you asked:</p>
          <ul className={SplashStyles.tagList}>
            <li>Gatsby</li>
            <li>React / Redux</li>
            <li>GraphQL</li>
            <li>SCSS modules</li>
            <li>A11y</li>
            <li>Open Data</li>
            <li>New Instant Pot recipes</li>
            <li>Design systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Splash;