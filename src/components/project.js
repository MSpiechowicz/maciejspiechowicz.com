import React from "react"
import { Link } from "gatsby"
import { Folder, User, Clock, ExternalLink } from "react-feather"

export default function Project({title, memberNumber, date, progress, url}) {
  return (
    <div className="page-projects__grid__description">
      <div className="page-projects__grid__title">
        <Folder />
        <span>{title}</span>
        <Link to={url} target="_blank">
          <ExternalLink className="page-projects__grid__image__link" />
        </Link>
      </div>
      <div className="page-projects__grid__content">
        <User />
        <span>{memberNumber} member</span>
      </div>
      <div className="page-projects__grid__content">
        <Clock />
        <span>{date}</span>
      </div>
      <span>{progress}</span>
      <div className="page-projects__grid__progress-bar">
        <div
          className="page-projects__grid__progress-bar--loading"
          style={{ width: progress }}
        ></div>
      </div>
    </div>
  )
}
