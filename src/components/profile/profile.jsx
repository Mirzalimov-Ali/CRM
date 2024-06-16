import React from 'react'
import { Avatar, Block, CardSpaceBetween, EditProfileButton, ProfileCard, ProfileCardTop, ProfileContainer, Username } from './style'

import pencilIcon from '../../assets/pencil-icon.png'

import avatar from '../../assets/avatar-profile.png'

function Profile() {
  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileCardTop>
          <EditProfileButton><img src={pencilIcon} alt="" />Edit profile</EditProfileButton>
        </ProfileCardTop>
        <Avatar>
          <img src={avatar} alt="" />
        </Avatar>

        <div style={{padding: "0 26px"}}>
          <Username>Andrew Smith</Username>
          <Block>CEO</Block>

          <CardSpaceBetween style={{marginTop: "20px"}}>
            <p>Telegram:</p>
            <b>@andrewsmith</b>
          </CardSpaceBetween>
          <CardSpaceBetween>
            <p>Phone:</p>
            <b>99 772-45-58</b>
          </CardSpaceBetween>
        </div>
      </ProfileCard>
    </ProfileContainer>
  )
}

export default Profile
