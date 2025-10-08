import { slack, CHANNEL } from './slackClient.js';

(async () => {
  const postAt = Math.floor(Date.now() / 1000) + 12;
  const res = await slack.chat.scheduleMessage({
    channel: CHANNEL,
    text: 'This message was scheduled 10 seconds from now ⏰',
    post_at: postAt
  });
  console.log('Scheduled:', { scheduled_message_id: res.scheduled_message_id, post_at: res.post_at });
})().catch(console.error);
