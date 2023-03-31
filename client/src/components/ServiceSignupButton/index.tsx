import React from 'react';
import { IconContext } from 'react-icons';
import { FaTwitch, FaYoutube, FaFacebook, FaArrowRight } from 'react-icons/fa';
import './module.css';

type propTypes = {
  service: 'Twitch'|'YouTube'|'Facebook';
  href?: string;
  disabled?: boolean;
}

export default function ServiceSignupButton(props: propTypes) {
  let logo;
  switch (props.service) {
    case 'YouTube':
      logo = <FaYoutube color=''/>
      break;
    case 'Facebook':
      logo = <FaFacebook color=''/>
      break;
    case 'Twitch':
    default:
      logo = <FaTwitch color='#9146FF'/>
      break;
  }

  const handleClick = () => {

    window.open(props.href, "_blank", "popup,width=850,height=700,menubar=no,location=no,scrollbars=no,status=no,toolbar=no");
  }

  return (
      <button className='signup-button' disabled={props.disabled} onClick={handleClick}>
        <IconContext.Provider value={{ className: 'react-icons' }}>
          <div className='prepend'>{logo}</div>
        </IconContext.Provider>
        <div className='text'>Login with {props.service}</div>
        <div className='append'><FaArrowRight /></div>
      </button>
  );
}
