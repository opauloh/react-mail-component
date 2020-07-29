import sendgridSender from './sendgridSender';

const senders = {
  sendgrid: sendgridSender
};

export const defaultParams = { title: '', to: [], html: '' };
export default function sender(response, params = defaultParams, options, driver = 'sendgrid') {
  return senders[driver](response, params, options);
}
