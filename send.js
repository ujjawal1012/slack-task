import { slack, CHANNEL } from './slackClient.js';

(async () => {
  const res = await slack.chat.postMessage({
    channel: CHANNEL,
    text: 'Hello from our bot 👋'
  });
  console.log('Sent:', { channel: res.channel, ts: res.ts });
})().catch(console.error);
