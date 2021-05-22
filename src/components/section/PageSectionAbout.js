import React from "react"

const PageSectionAbout = () => {
  const faqItems = [
    {
      key: "faq_item_1",
      data: "What is the largest budget of the project that you supervised?",
    },
    { key: "faq_item_2", data: "~1 000 000 USD" },
    { key: "faq_item_3", data: "Which countries have you worked with?" },
    { key: "faq_item_4", data: "Mostly: Poland, USA, UK and Vietnam" },
    { key: "faq_item_5", data: "What is your preferred technology stack?" },
    {
      key: "faq_item_6",
      data:
        "At the moment I prefer JavaScript in both Front-end and Back-end combined with Node.js and React",
    },
    { key: "faq_item_7", data: "What technologies did you work with?" },
    { key: "faq_item_8", data: "Java, C#, Python, JavaScript, TypeScript" },
    { key: "faq_item_9", data: "What new are you learning recently?" },
    { key: "faq_item_10", data: "React, Vue and Flutter" },
    { key: "faq_item_11", data: "Scrum or Waterfall?" },
    { key: "faq_item_12", data: "Kanban :)" },
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
            <li key={item.key}>{item.data}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PageSectionAbout
