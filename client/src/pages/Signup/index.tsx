import React from 'react';
import ServiceSignupButton from '../../components/ServiceSignupButton';
import './page.css';
export default function Signup() {

  const href = "https://id.twitch.tv/oauth2/authorize?" +
  "client_id=p4bzne76kj080jtqnfrl4z9vpyna24&" +
  "force_verify=true&" +
  "redirect_uri=https%3A%2F%2Fdev.sighnwaive.com%2Fapi%2Fsubscribed&" +
  "response_type=code&" +
  "scope=user_read+" +
  "channel_subscriptions+" +
  "chat%3Aread+" +
  "bits%3Aread+" +
  "channel%3Aread%3Asubscriptions+" +
  "channel%3Aread%3Apolls+" +
  "channel%3Aedit%3Acommercial+" +
  "channel%3Aread%3Acharity"

  return (
    <div className="Signup">
      <ServiceSignupButton service="Twitch" href={href} />
      <ServiceSignupButton service="YouTube" disabled />
      <ServiceSignupButton service="Facebook" disabled />
    </div>
  );
}
