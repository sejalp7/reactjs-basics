import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div style={{ display: "flex"}}>
      <nav>
        <ul>
          <li>
            <a href="#section-1">Section 1</a>
          </li>
          <li>
            <a href="#section-2">Section 2</a>
          </li>
          <li>
            <a href="#section-3">Section 3</a>
          </li>
          <li>
            <a href="#section-4">Section 4</a>
          </li>
          <li>
            <a href="#section-5">Section 5</a>
          </li>
          <li>
            <a href="#section-6">Section 6</a>
          </li>
          <li>
            <a href="#section-7">Section 7</a>
          </li>
          <li>
            <a href="#section-8">Section 8</a>
          </li>
          <li>
            <a href="#section-9">Section 9</a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="section-1">
          <p>Content</p>
        </section>
      </main>
      </div>
    </>
  );
}
