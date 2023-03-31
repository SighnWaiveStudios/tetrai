import React from 'react';
import Bubbles from '../../components/Bubbles';
import EmailSubscribe from '../../components/EmailSubscribe';
import Fish from '../../components/Fish';
import FishBowl from '../../components/FishBowl';
import './page.css';
export default function Home() {

  return (
    <div className="Home">
      <div className="Header">
        <FishBowl><Bubbles><Fish></Fish></Bubbles></FishBowl>
        <div className="Logo">TetrAI</div>
      </div>
      <div className="Content">
        A big fish is coming to streaming.
        <EmailSubscribe></EmailSubscribe>
      </div>
    </div>
  );
}
