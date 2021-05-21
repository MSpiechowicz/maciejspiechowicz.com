import React from "react"

export default function PageSectionAbout() {
  return (
    <div className="page-about__grid">
      <div className="page-about__grid--description">
        <h1>#Whoami</h1>
        <p>
          IT Project Manager and Software Engineer with almost 14 years of
          experience. Focused on the overall quality of product and business
          value. I always ask <b>why</b> do you want to make this change. This
          includes both IT and business area.
        </p>
      </div>
      <div className="page-about__grid--description">
        <h1>#FAQ</h1>
        <ul>
          <li>
            What is the largest budget of the project that you supervised?{" "}
          </li>
          <li>
            <b>~1 000 000 USD</b>
          </li>
          <li>Which countries have you worked with?</li>
          <li>
            <b>Mostly: Poland, USA, UK and Vietnam</b>
          </li>
          <li>What is your preferred technology stack?</li>
          <li>
            <b>
              At the moment I prefer JavaScript in both Front-end and Back-end
              combined with Node.js and React
            </b>
          </li>
          <li>What technologies did you work with?</li>
          <li>
            <b>Java, C#, Python, JavaScript, TypeScript</b>
          </li>
          <li>What new are you learning recently?</li>
          <li>
            <b>React, Vue and Flutter</b>
          </li>
          <li>Scrum or Waterfall?</li>
          <li>
            <b>Kanban :)</b>
          </li>
        </ul>
      </div>
    </div>
  )
}
