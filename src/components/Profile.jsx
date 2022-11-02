import React from 'react'
import profile from './images/img.jpeg'
export default function Profile() {
  return (
    <div className="profile">
      <img id="profile_img" src={profile} alt="Profile"width="250px"/>
      <h4>Judge-Paul Ogebe</h4> 
      <h3 id="twitter">@paulogebe </h3>
      <h4 id="slack">Jadge</h4>
    </div>
  )
}