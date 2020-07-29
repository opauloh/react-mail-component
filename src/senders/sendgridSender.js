const dotenv = require('dotenv');
dotenv.config();
const sgMail = require('@sendgrid/mail');
import { replaceSpecialChars } from '../helpers/StringHelper';

const optionsDefault = {
  categories: [],
  to: [],
  from: process.env.DEFAULT_FROM_EMAIL,
  subject: '',
  html: '',
  trackingSettings: {
    clickTracking: {
      enable: true
    },
    openTracking: {
      enable: true
    },
    subscriptionTracking: {
      enable: true
    }
  }
};

export default async function sendgridSender(response, params, options = {}) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { title, to, html } = params;

  const msg = {
    ...optionsDefault,
    categories: [replaceSpecialChars(title)],
    to: to,
    subject: title,
    html: html,
    ...options
  };

  try {
    const sendMail = await sgMail.send(msg);
    return response.json({
      sent: sendMail[0].statusCode === 202
    });
  } catch (error) {
    return response.json({
      sent: false,
      error
    });
  }
}
