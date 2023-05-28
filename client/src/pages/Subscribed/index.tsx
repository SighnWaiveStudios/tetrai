import React from 'react';
import { useQuery } from '../../hooks';
import './page.css';
export default function Subscribed() {
  const query = useQuery()
  const site = new URL(location.href)

  console.log(query)

  // window.opener.location=`${site.origin}/dashboard`
  // window.close()

  return (
    <div className="Subscribed">
      <p>Thank you for subscribing, {query.get('display_name')} </p>
      <p>You may now close this window.</p>
    </div>
  );
}
