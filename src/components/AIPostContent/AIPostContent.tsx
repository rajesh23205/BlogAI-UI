import React from "react";

interface Props {
//   AIPostData: {
//     title: string;
//   };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
AIPostData: any;
}

export default function AIPostContent({
  AIPostData,
}: Props) {
    console.log("AIPostContent", AIPostData)
  return (
    <div>{AIPostData.title}</div>
  );
}