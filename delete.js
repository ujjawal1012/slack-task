import { slack, CHANNEL } from './slackClient.js';

const ts = process.argv[2];
if (!ts) {
  console.log('Usage: npm run delete -- <ts>');
  process.exit(1);
}

(async () => {
  const res = await slack.chat.delete({ channel: CHANNEL, ts });
  console.log('Deleted:', res.ok);
})().catch(console.error);
