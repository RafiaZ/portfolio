import React from "react";

import ImageRecent from "./recents-images/r-img-1.jpg";
import "./Recents.css";

function Recents() {
  const a = [
    {
      src: ImageRecent,
      alt: "image 1",
    },
    {
      src: ImageRecent,
      alt: "image 1",
    },
    {
      src:ImageRecent,
      alt: "image 1",
    },
    {
      src:ImageRecent,
      alt: "image 1",
    },

  ];
  return (
    <div className="recents__container">
      <div className="recents__header">
        <h1 className="recents__header-heading">Recent Portfolio</h1>
      </div>
      <div className="recents__list">
        <li className="recents__list-item">
          {" "}
          <a href="#" className="recents__list-link">
            All catagories
          </a>
        </li>
        <li className="recents__list-item">
          {" "}
          <a href="#" className="recents__list-link">
            My Blog
          </a>
        </li>
        <li className="recents__list-item">
          {" "}
          <a href="#" className="recents__list-link">
            Photography
          </a>
        </li>
        <li className="recents__list-item">
          {" "}
          <a href="#" className="recents__list-link">
            Painting
          </a>
        </li>
      </div>

      <div className="recents__grid ">
        {/* <div> */}
          {a.map((grid) => (
            <div>
              <img className="recents__images" src={grid.src} alt={grid.alt}/>
            </div>
          ))}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Recents;
