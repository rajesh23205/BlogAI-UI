import React from "react";
import './AIPostContent.scss'

interface Props {
  AIPostData: {
    title: string,
    introduction: string,
    sections: [
      {
        heading: string,
        paragraph: string,
        subsections: [
          {
            subheading: string,
            paragraph: string
          }
        ],
        points: []
      }
    ],
    conclusion: string
  };
}

export default function AIPostContent({ AIPostData }: Props) {
  return (
    <div className="blog-container">
      <h1>{AIPostData.title}</h1>
  
      <p>{AIPostData.introduction}</p>
  
      {AIPostData.sections.map((section, index) => (
        <div className="section" key={index}>
          <h2>{section.heading}</h2>
  
          <p>{section.paragraph}</p>
  
          {section.subsections.map((point, i) => (
            <div className="subsection" key={i}>
              <h3>{point.subheading}</h3>
              <p>{point.paragraph}</p>
            </div>
          ))}
  
          <ul>
            {section.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
  
      <p className="conclusion">{AIPostData.conclusion}</p>
    </div>
  );
}