import React from "react"

const PageSectionWhoami = () => {
  const faqItems = [
    {
      key: "faq_item_1",
      question:
        "What is the largest budget of the project that you supervised?",
      answer: "~1 000 000 USD",
    },
    {
      key: "faq_item_2",
      question: "Which countries have you worked with?",
      answer: "Mostly: Poland, USA, UK and Vietnam",
    },
    {
      key: "faq_item_3",
      question: "What is your preferred technology stack?",
      answer:
        "JavaScript in both Front-end and Back-end combined with Node.js and React",
    },
    {
      key: "faq_item_4",
      question: "What technologies did you work with?",
      answer: "Java, C#, Python, JavaScript, TypeScript",
    },
    {
      key: "faq_item_5",
      question: "What new are you learning recently?",
      answer: "React, Vue and Flutter",
    },
    { key: "faq_item_6", question: "Scrum or Waterfall?", answer: "Kanban :)" },
    {
      key: "faq_item_7",
      question: "Favorite quote?",
      answer: "Life is too short to do the things that you don't like doing",
    },
  ]

  return (
    <div id="Whoami" className="page-content__section__whoami">
      <p>
        IT Project Manager and Software Engineer with almost 14 years of
        experience. Focused on the overall quality of product and business
        value. I always ask <b>why</b> do you want to make this change. This
        includes both IT and business area.
      </p>
      <h1>#FAQ</h1>
      <ul>
        {faqItems.map(item => (
          <li key={item.key}>
            {item.question}
            <br />
            <b>{item.answer}</b>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PageSectionWhoami
