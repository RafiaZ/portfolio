import React, { useState } from "react";
import { AllCatagories } from "./RecentArray";
import { Painting } from "./RecentArray";
import { Photography } from "./RecentArray";
import { MyBlog } from "./RecentArray";

import "./Recents.css";

function Recents() {
  const [toggleBlog, setToggleBlog] = useState(false);
  const [togglePainting, setTogglePainting] = useState(false);
  const [toggleAllCatagories, setToggleCatagories] = useState(true);
  const [togglePhotography, setTogglePhotography] = useState(false);

  let blogIsOpen = MyBlog.map((blog) => {
    return <img className="recents__images" src={blog.srce} alt={blog.alte} />;
  });

  let catagoriesIsOpen = AllCatagories.map((cat) => {
    return <img className="recents__images" src={cat.src} alt={cat.alt} />;
  });

  let paintingIsOpen = Painting.map((paint) => {
    return (
      <img className="recents__images" src={paint.srcb} alt={paint.altb} />
    );
  });

  let photogIsOpen = Photography.map((photo) => {
    return (
      <img className="recents__images" src={photo.srcf} alt={photo.altf} />
    );
  });

  return (
    <div className="recents__container">

      <div className="recents__header">
        <h1 className="recents__header-heading">Recent Portfolio</h1>
      </div>

     

      <div className="recents__list">
        <li className="recents__list-item">
          {" "}
          <a
            className="recents__list-link"
            onClick={(e) => {
              setToggleCatagories(true);
              setToggleBlog(false);
              setTogglePainting(false);
              setTogglePhotography(false);
            }}
          >
            All catagories
          </a>
        </li>
        <li className="recents__list-item">
          {" "}
          {
            <a
              className="recents__list-link"
              onClick={(e) => {
                setToggleBlog(true);
                setToggleCatagories(false);
                setTogglePainting(false)
                setTogglePhotography(false);
              }}
            >
              My Blog
            </a>
          }
        </li>
        <li className="recents__list-item">
          {" "}
          <a
            className="recents__list-link"
            onClick={(e) => {
              setTogglePainting(true);
              setToggleBlog(false);
              setToggleCatagories(false);
              setTogglePhotography(false);
            }}
          >
            Painting
          </a>
        </li>
        <li className="recents__list-item">
          {" "}
          <a
            className="recents__list-link"
            onClick={(e) => {
              setTogglePhotography(true);
              setToggleBlog(false);
              setToggleCatagories(false);
              setTogglePainting(false);
            }}
          >
            Photography
          </a>
        </li>
      </div>

      <div className="recents__grid">
        
      {toggleAllCatagories && catagoriesIsOpen}
      {toggleBlog && blogIsOpen}
      {togglePainting && paintingIsOpen}
      {togglePhotography && photogIsOpen}
      
      </div>
    
    </div>
  );
}

export default Recents;
