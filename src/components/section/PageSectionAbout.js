import React from "react"

const PageSectionAbout = () => {
  const faqItems = [
    "What is the largest budget of the project that you supervised?",
    "~1 000 000 USD",
    "Which countries have you worked with?",
    "Mostly: Poland, USA, UK and Vietnam",
    "What is your preferred technology stack?",
    "At the moment I prefer JavaScript in both Front-end and Back-end combined with Node.js and React",
    "What technologies did you work with?",
    "Java, C#, Python, JavaScript, TypeScript",
    "What new are you learning recently?",
    "React, Vue and Flutter",
    "Scrum or Waterfall?",
    "Kanban :)",
  ]

  return (
    <div className="page-content__section__about">
      <div className="page-content__section__about--description">
        <p>
          IT Project Manager and Software Engineer with almost 14 years of
          experience. Focused on the overall quality of product and business
          value. I always ask <b>why</b> do you want to make this change. This
          includes both IT and business area.
        </p>
        <h1>#FAQ</h1>
        <ul>
          {faqItems.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PageSectionAbout
