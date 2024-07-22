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
      <div class=' all_about pt-5'>
        <TextHighlighter text = "About me" classname='aboutme' />
      <TextHighlighter text = "Software Engineer with a specialization in Artificial Intelligence and Machine Learning ," classname='aboutdata1'/> 
      <TextHighlighter text = "Skilled in Python programming and currently pursuing courses to stay updated in the field. " classname='aboutdata2' />
      <TextHighlighter text='Strong communication, improvisation, and problem-solving abilities.' classname="aboutdata3" /> 

      </div>
    </div>
  );
};

export default About;
