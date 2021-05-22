import React from 'react'

const PageSectionProjectItem = ({
  title,
  memberNumber,
  date,
  progress,
  url,
  alt
}) => {
  return (
    <div className="page-content__section__project__item">
      <div className="page-content__section__project__item--title">
        {/* <Folder />
        <span>{title}</span>
        <a href={url} target="_blank" alt={alt}>
          <ExternalLink className="page-projects__grid__image__link" />
        </a> */}
      </div>
      <div className="page-content__section__project__item--description">
        {/* <User />
        <span>{memberNumber} member</span> */}
      </div>
      <div className="page-content__section__project__item--description">
        {/* <Clock />
        <span>{date}</span> */}
      </div>
      {/* <span>{progress}</span> */}
      <div className="page-content__section__project__item--status">
        {/* <div
          className="page-content__section__project__item--progress"
          style={{ width: progress }}
        ></div> */}
      </div>
    </div>
  )
}

export default PageSectionProjectItem
