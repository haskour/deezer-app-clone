import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ChanelSection(props) {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.deezer.com/chart"
      );
      const limitFour = result.data.playlists.data.slice(0,4)
      setPlaylists(limitFour);
      //   setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <section className="w-full">
      <div className="max-w-screen-lg p-6 mx-auto flex justify-between">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <div className="flex flex-wrap">
          <button className="p-1">
            <svg
              className="opacity-25"
              focusable="false"
              height="16"
              width="16"
              viewBox="0 0 12 12"
              aria-hidden="true"
            >
              <path d="M4.7 6l4.5-4.4a.9.9 0 0 0 0-1.3.8.8 0 0 0-1.3 0L2.7 5.4a.9.9 0 0 0 0 1.2l5.2 5.1a.9.9 0 0 0 1.3 0 .9.9 0 0 0 0-1.3z"></path>
            </svg>
          </button>
          <button className="p-1">
            <svg
              className="svg-icon svg-icon-chevron-right"
              focusable="false"
              height="16"
              width="16"
              viewBox="0 0 12 12"
              aria-hidden="true"
            >
              <path d="M7.3 6l-4.5 4.4a.9.9 0 0 0 0 1.3.8.8 0 0 0 1.3 0l5.2-5.1a.9.9 0 0 0 0-1.2L4.1.3a.9.9 0 0 0-1.3 0 .9.9 0 0 0 0 1.3z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="max-w-screen-lg px-6 mx-auto pb-6">
        <div className="flex justify-between -mr-8">
          {playlists.map((item, key) => (
            <article className="w-1/4 pr-8" key={key}>
              <div className="relative">
                <img
                  className="rounded-md shadow-md"
                  src={item.picture_medium}
                  alt=""
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                  <button className="bg-white p-4 rounded-full">
                    <svg
                      focusable="false"
                      height="1em"
                      width="1em"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M2.5.5v11l9-5.5z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm leading-tight">{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
