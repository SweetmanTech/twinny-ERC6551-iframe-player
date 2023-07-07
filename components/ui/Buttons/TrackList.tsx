"use client";
import React, { useState } from "react";

const TrackList = ({ songs, onChangeTrack }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="overscroll-contain ">
      <svg
        className="w-12 text-black dark:text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        onClick={() => (!isOpen ? setIsOpen(true) : setIsOpen(false))}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {isOpen && (
        <div className="absolute bottom-0 right-0 rounded-xl bg-gray-200 p-2 dark:bg-gray-800">
          <p className="text-center text-lg font-medium text-black dark:text-white">Track List:</p>
          <ul className="w-72 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            {songs.map((song: any, index: any) => (
              <li
                key={index}
                onClick={() => onChangeTrack(index)}
                className="w-full border-b border-gray-200 px-4 py-2 text-black hover:bg-gray-200 dark:border-gray-600   dark:text-white dark:hover:bg-gray-600"
              >
                {" "}
                {song.title}&nbsp;-&nbsp;{song.artist} {!song.featuring ? "" : "ft."}{" "}
                {song.featuring}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TrackList;
