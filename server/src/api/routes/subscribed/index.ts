import express from 'express';
import chalk from 'chalk';
import { stringify } from 'querystring';

const router = express.Router();

router.get('/', async (req, res) => {

  const authReq = await fetch("https://id.twitch.tv/oauth2/token", {
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: stringify({
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      code: req.query.code as string,
      grant_type: 'authorization_code',
      redirect_uri: 'https://dev.sighnwaive.com/api/subscribed'
    })
  });

  const authRes = await authReq.json();

  // {
  //   "access_token": "**********************",
  //   "expires_in": 13169,
  //   "refresh_token": "**********************",
  //   "scope": [
  //     "bits:read",
  //     "channel:edit:commercial",
  //     "channel:read:charity",
  //     "channel:read:polls",
  //     "channel:read:subscriptions",
  //     "channel_subscriptions",
  //     "chat:read",
  //     "user_read"
  //   ],
  //   "token_type": "bearer"
  // }

  const userReq = await fetch('https://api.twitch.tv/helix/users', {
    headers: {
      "Authorization": `Bearer ${authRes.access_token}`,
      "Client-Id": process.env.TWITCH_CLIENT_ID,
    }
  });
  
  const userRes = (await userReq.json()).data[0];

  // {
  //   id: '71241619',
  //   login: 'sighnwaive',
  //   display_name: 'sighnwaive',
  //   type: '',
  //   broadcaster_type: 'affiliate',
  //   description: '(They/Them)',
  //   profile_image_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/c890683a-e907-4aed-99c1-c1b06476d81a-profile_image-300x300.png',
  //   offline_image_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1fb5d341-bb0c-4a67-a5af-ccd3508dcdbd-channel_offline_image-1920x1080.png',
  //   view_count: 2545,
  //   email: 'sighnwaive@gmail.com',
  //   created_at: '2014-09-14T23:42:27Z'
  // }

  // TODO: Store above data to service account.

  console.log(chalk.hex('#9146FF')('Subscriber: '), `${userRes.display_name} subscribed`);
  res.redirect(`/subscribed?display_name=${userRes.display_name}`);

});

export default router;