import React, { useEffect, useState } from 'react';

const TextHighlighter = ({ text ,classname}) => {
  const [highlighted, setHighlighted] = useState(Array(text.length).fill(false));
  useEffect(() => {
    text.split('').forEach((_, index) => {
      setTimeout(() => {
        setHighlighted(prev => {
          const newHighlighted = [...prev];
          newHighlighted[index] = true;
          return newHighlighted;
        });
      }, index * 50); // 500ms delay for each letter
    });
  }, [text]);

  return (
    <div >
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`${classname} ${highlighted[index] ? 'highlight' : ''}`}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </div>
  );
};

const About = () => {
  return (
    <div className="text-container">
      <TextHighlighter text="Hello!!"  classname="letter"/>
     

      <TextHighlighter text="I'm Likith a Software Engineer,"  classname="subtitle_header"/>
      <TextHighlighter text="based in Bengaluru"  classname="subtitle_header"/>
      <div class=' all_about'>
        <TextHighlighter text = "About me" classname='aboutme' />
      <TextHighlighter text = "AI and Machine Learning enthusiast with strong expertise in Python programming," classname='aboutdata1'/> 
      <TextHighlighter text = "Experienced in creating AI solutions and constantly enhancing skills through ongoing courses. " classname='aboutdata2' />
      <TextHighlighter text='Passionate about using data-driven approaches to tackle challenging problems.' classname="aboutdata3" /> 
      {/* <TextHighlighter text="Check out my Projects page" classname="aboutme"/> */}
      </div>
    </div>
  );
};

export default About;
