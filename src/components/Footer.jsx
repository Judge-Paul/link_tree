import React from "react"
import I4G from "./images/I4G.png"
import Zuri from "./images/zuri.jpg"
import { FaGithub } from "react-icons/fa"
import Slack from "./images/slack.png"

export default function Footer() {
  return (
    <footer>
      <div className="top-row">
        <a href="https://github.com/Judge-Paul" target="_blank"><FaGithub /></a>
        <a href="https://slack.com/Jadge" target="_blank"><img src={Slack} alt="Slack" width="40px" /></a>
      </div>
      <div className="bot-row">
        <img src={Zuri} id="zuri"/>
        <div className="HNG">
          <h3>HNG Internship 9 Frontend Task</h3>
        </div>
        <img src={I4G} id="i4g"/>
      </div>
    </footer>
  )
}