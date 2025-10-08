import { slack, CHANNEL } from './slackClient.js';

(async () => {
  const res = await slack.conversations.history({ channel: CHANNEL, limit: 10 });
  (res.messages || []).forEach(m =>
    console.log(`[${m.ts}] ${(m.user || m.bot_id || 'app')}: ${m.text}`)
  );
})().catch(console.error);
