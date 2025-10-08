import { slack, CHANNEL } from './slackClient.js';

const ts = process.argv[2];
if (!ts) {
  console.log('Usage: npm run update -- <ts>');
  process.exit(1);
}

(async () => {
  const res = await slack.chat.update({ channel: CHANNEL, ts, text: 'Edited text ✏️' });
  console.log('Updated:', { ok: res.ok, ts: res.ts });
})().catch(console.error);
