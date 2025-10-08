import { WebClient } from '@slack/web-api';
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.SLACK_BOT_TOKEN) throw new Error('Set SLACK_BOT_TOKEN in .env');
if (!process.env.SLACK_CHANNEL_ID) throw new Error('Set SLACK_CHANNEL_ID in .env');

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);
const CHANNEL = process.env.SLACK_CHANNEL_ID;

export { slack, CHANNEL };
