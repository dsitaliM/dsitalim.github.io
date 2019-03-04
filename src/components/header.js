import React from "react"
import headeStyles from "./header.module.css"

export default props => (
  <h1 className={headeStyles.header}>{props.headerText}</h1>
)
