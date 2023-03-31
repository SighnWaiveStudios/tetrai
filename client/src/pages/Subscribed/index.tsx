import React from 'react';
import { useQuery } from '../../hooks';
import './page.css';
export default function Subscribed() {
  const query = useQuery();

  return (
    <div className="Subscribed">
      <p>Thank you for subscribing, {query.get('display_name')} </p>
      <p>You may now close this window.</p>
    </div>
  );
}
