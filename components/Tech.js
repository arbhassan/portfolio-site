import React from "react";
import utilstyles from "../styles/utils.module.css";

export default function Tech() {
  const skills = [
    "JavaScript",
    "Python",
    "React",
    "ReactNative",
    "Flutter",
    "Firebase",
    "Node",
    "PostgreSQL",
    "MongoDB",
  ];

  return (
    <section className={utilstyles.headingmd}>
      <h2 className={utilstyles.headinglg}>Tech Stack</h2>
      <ul className={utilstyles.list}>
        {skills.map((skill) => (
          <li className={utilstyles.listItem}>● {skill}</li>
        ))}
      </ul>
    </section>
  );
}
