import React from "react"
import I4G from "./images/I4G.png"
import Zuri from "./images/zuri.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
  return (
    <footer>
      <div className="top-row">
        {/* <a href="https://github.com/Judge-Paul" target="_blank"><FontAwesomeIcon icon="coffee" /></a>
        <a href="https://slack.com/Jadge" target="_blank"><FontAwesomeIcon icon="slack" /></a> */}
      </div>
      <div className="bot-row">
        <img src={Zuri} id="zuri"/>
        <h3>HNG Internship 9 Frontend Task</h3>
        <img src={I4G} id="i4g"/>
      </div>
    </footer>
  )
}