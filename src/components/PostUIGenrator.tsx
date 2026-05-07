import React, { useState } from "react";
import "./PostContent.css";

const PostContent = () => {
  const [content, setContent] = useState<string>(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Nature Blog</title>
</head>

<body>

  <h1>Nature’s Quiet Power</h1>

  <p>
    Nature supports health, creativity,
    resilience, and connection.
  </p>

</body>
</html>`);

  const handleCopy = async (): Promise<void> => {
    await navigator.clipboard.writeText(content);
    alert("HTML copied!");
  };

  return (
    <div className="editor-container">
      <h2 className="editor-title">
        AI Generated HTML
      </h2>

      <textarea
        className="editor-textarea"
        value={content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setContent(e.target.value)
        }
      />

      <button
        className="copy-btn"
        onClick={handleCopy}
      >
        Copy HTML
      </button>
    </div>
  );
};

export default PostContent;