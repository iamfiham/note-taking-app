import React from "react";

function useStringManipulation() {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString("en-US");
    return `${day} ${month}, ${year} at ${time}`;
  };

  const formatNoteWithLineBreaks = (str) => {
    return str.replace(/\n{3,}/g, "\n\n").split("\n");
  };
  return { formatDate, formatNoteWithLineBreaks };
}

export default useStringManipulation;
