const dotenv = require('dotenv');
dotenv.config();
import { render } from 'mjml-react';
import templates from '../templates/templates';
import sender from '../senders';

module.exports = {
  async send(request, response) {
    const auth = request.headers.authorization;
    if (auth !== process.env.APP_AUTH) {
      return response.status(401).json({ error: 'Unauthorized' });
    }
    const { to, title, template, template_params } = request.body;

    if (!templates[template]) {
      return response.status(404).json({ error: 'Template not found' });
    }

    const { html } = render(templates[template].generate(template_params), {
      validationLevel: 'soft'
    });

    return sender(response, { title, to, html });
  },
  preview(request, response) {
    const auth = request.headers.authorization;
    if (auth !== process.env.APP_AUTH) {
      return response.status(401).json({ error: 'Unauthorized' });
    }

    const { template, template_params } = request.body;

    if (!templates[template]) {
      return response.status(404).json({ error: 'Template not found' });
    }

    const { html } = render(templates[template].generate(template_params), {
      validationLevel: 'soft'
    });

    return response.send(html);
  }
};
