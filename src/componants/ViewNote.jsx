import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataProvider } from "../context/Context";

function ViewNote() {
  const { id } = useParams();
  const { notes } = useContext(DataProvider);
  const [viewedNote, setViewedNote] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString("en-US");
    return `${day} ${month}, ${year} at ${time}`;
  };

  const formatNoteWithLineBreaks = (note) => {
    return note.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < note.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  useEffect(() => {
    const foundNote = notes.find((note) => note.id === id);
    if (foundNote) {
      setViewedNote(() => foundNote);
    }
  }, [notes, id]);

  if (!viewedNote) {
    return (
      <div
        className="error-div"
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "700",
          padding: "3rem 1rem",
        }}
      >
        Error: Item not found
      </div>
    );
  }

  return (
    <div className="mx-auto mb-16 max-w-[770px]">
      <p className="mb-8 flex items-center gap-2 text-base/[1.15] tracking-tight text-neutral-400">
        Created At
        <span className="text-base font-medium text-neutral-600">
          {formatDate(viewedNote.createdAt)}
        </span>
      </p>
      <h2 className="mb-6 text-[2.75rem]/[1.15] font-medium tracking-tighter text-neutral-800">
        {viewedNote.title}
      </h2>
      <p className="whitespace-normal text-lg text-neutral-600">
        {formatNoteWithLineBreaks(viewedNote.note)}
      </p>
    </div>
  );
}

export default ViewNote;
