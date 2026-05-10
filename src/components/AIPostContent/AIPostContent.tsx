import React from "react";
import './AIPostContent.scss'

interface Props {
  AIPostData: {
    title: string;
    introduction: string;
    sections: {
      heading:string;
      content: string;
      points: [];
      subsections:{
        title: string;
        content: string;
        points:[]
      }[];
    }[];
    conclusion: string;
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
  
          <p>{section.content}</p>
  
          <ul>
            {section.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
  
          {section.subsections.map((sub, i) => (
            <div className="subsection" key={i}>
              <h3>{sub.title}</h3>
  
              <p>{sub.content}</p>
  
              <ul>
                {sub.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
  
      <p className="conclusion">{AIPostData.conclusion}</p>
    </div>
  );
}