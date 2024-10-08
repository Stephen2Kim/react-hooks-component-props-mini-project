import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Calculate the 'minutes to read' indicator
  const minutesToRead = minutes < 30
    ? "☕️".repeat(Math.ceil(minutes / 5))
    : "🍱".repeat(Math.ceil(minutes / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{minutesToRead} {date}</small> {/* Correct this line */}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
