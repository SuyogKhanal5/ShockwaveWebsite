import React from 'react'
import ParticleBackground from './ParticleBackground'
import './Reference.scss'


export default function Reference() {
  return (
    <>
     <ParticleBackground/>
    <div class="container">
	
      <div class="table">
        <div class="table-header">
          <div class="header__item"><p id="name" class="filter__link" href="#">Command</p></div>
          <div class="header__item"><p id="wins" class="filter__link filter__link--number" href="#">Description</p></div>
          <div class="header__item"><p id="draws" class="filter__link filter__link--number" href="#">Inputs</p></div>
        </div>
        <div class="table-content">	
          <div class="table-row">		
            <div class="table-data">.setTeamSize</div>
            <div class="table-data">Sets the size of each team</div>
            <div class="table-data">integer</div>
          </div>
          <div class="table-row">
            <div class="table-data">.fullRandom</div>
            <div class="table-data">Randomizes teams and roles for League of Legends</div>
            <div class="table-data">N/A</div>
          </div>
          <div class="table-row">
            <div class="table-data">.fullRandomAll</div>
            <div class="table-data">Randomizes teams and roles for League of Legends while setting the team voice channels</div>
            <div class="table-data">Two voice channels</div>
          </div>
          <div class="table-row">
            <div class="table-data">.move</div>
            <div class="table-data">Moves the players in the call to their respective teams once they are set (.setTeamChannels is a prerequiste)</div>
            <div class="table-data">N/A</div>
          </div>
          <div class="table-row">
            <div class="table-data">.help</div>
            <div class="table-data">Links this webpage</div>
            <div class="table-data">N/A</div>
          </div>
          <div class="table-row">
            <div class="table-data">.setTeamChannels</div>
            <div class="table-data">Sets the voice channels for each team to be moved to</div>
            <div class="table-data">Two voice channels</div>
          </div>
          <div class="table-row">
            <div class="table-data">.randomTeams</div>
            <div class="table-data">Randomizes teams</div>
            <div class="table-data">N/A</div>
          </div>
          <div class="table-row">
            <div class="table-data">.randomAll</div>
            <div class="table-data">Randomizes teams and sets the team voice channels</div>
            <div class="table-data">Two Voice Channels</div>
          </div>
          <div class="table-row">
            <div class="table-data">.returnAll</div>
            <div class="table-data">Returns all users in the current voice channel back to the original voice channel</div>
            <div class="table-data">N/A</div>
          </div>
          <div class="table-row">
            <div class="table-data">.returnTeams</div>
            <div class="table-data">Returns just the players back to the original voice channel</div>
            <div class="table-data">N/A</div>
          </div>
          <div class="table-row">
            <div class="table-data">.captains</div>
            <div class="table-data">Sets team captains and allows them to choose players</div>
            <div class="table-data">Two player ids (mentions, i.e @user#91420 @other#21930)</div>
          </div>
          <div class="table-row">
            <div class="table-data">.captainsAll</div>
            <div class="table-data">Sets team captains and allows them to choose players and sets the team voice channels</div>
            <div class="table-data">Two player ids (mentions, i.e @user#91420 @other#21930) and Two Voice Channels</div>
          </div>
          <div class="table-row">
            <div class="table-data">.choose</div>
            <div class="table-data">Command for team captains to choose their teammates</div>
            <div class="table-data">One player id (mention, i.e @user#91420)</div>
          </div>
          <div class="table-row">
            <div class="table-data">.notify</div>
            <div class="table-data">Notify and send an Direct Message/Invite to the server and voice channel. (.invite is an alias)</div>
            <div class="table-data">One player id (mention, i.e @user#91420)</div>
          </div>
          <div class="table-row">
            <div class="table-data">.randomCaptains</div>
            <div class="table-data">Chooses two team captains at random</div>
            <div class="table-data">N/A</div>
          </div>
          <div class="table-row">
            <div class="table-data">.chooseRandom</div>
            <div class="table-data">Chooses a random player to add to your team. Used in place of .choose</div>
            <div class="table-data">N/A</div>
          </div>
          <div class="table-row">
            <div class="table-data">.chooseFrom</div>
            <div class="table-data">Chooses a random player from a few given players. Used in place of .choose</div>
            <div class="table-data">A variable number of player ids (mentions, i.e @user#91420 @other#21930)</div>
          </div>
          <div class="table-row">
            <div class="table-data">.roll</div>
            <div class="table-data">Rolls a die with the number of sides depending on input given</div>
            <div class="table-data">integer</div>
          </div>
          <div class="table-row">
            <div class="table-data">.randomizeRoles</div>
            <div class="table-data">Randomizes roles for each team. Teams must have been created before using this command. </div>
            <div class="table-data">N/A</div>
          </div>
        </div>	
      </div>
    </div>
    </>
  )
}
