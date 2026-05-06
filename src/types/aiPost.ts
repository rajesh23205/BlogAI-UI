export interface AiBlogPost {
    title: string;
    introduction: string;
    sections: Section[];
    conclusion: string;
  }
  
  export interface Section {
    heading: string;
    content: string;
    points?: string[];
    subsections?: Subsection[];
  }
  
  export interface Subsection {
    title: string;
    content: string;
    points?: string[];
  }