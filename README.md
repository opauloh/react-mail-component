# react-mail-component

The aim of this project is to show usage of [mjml](https://mjml.io/) and [mjml-react](https://github.com/wix-incubator/mjml-react) inside a node js.

Wich bring a lot of benefits in reusability, after finished the side project, it was successfully implemented on the company, which brings many benefits, being the main one increased confidence of developers when sending emails because we were able to implement unit tests and snapshot tests as well

## Usage

```bash
yarn install
yarn start
```

and afterwards just open your browser using the link [http://localhost:3000/](http://localhost:3000/).

> The http server will listen and restart upon each change inside src folder.
> You just need to refresh a browser window manually.

### Requests

**POST - /preview**

Return the final HTML that would be send to the client.

> Response:
![Preview](https://i.ibb.co/ft2XqVg/Captura-de-Tela-2020-07-29-a-s-18-24-41.png)

---


**POST - /send**

Send the e-mail using the chosen driver, currently only sendgrid is supported

> Response: 
```
{
  "sent": true
}
```

**Request example (the same for /preview and /send)**

```
{
	"template" : "default",
	"title" : "Título do E-mail",
	"to" : ["anyone@email.com"],
	"template_params" : {
		"title" : "Header",
		"description" : [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		],
		"cards" : [
			{
				"title" : "6,10",
				"description" : "Lorem Ipsum",
				"action" : {
					"name" : "action",
					"href" : "http://google.com"
				}
			},
			{
				"title" : "31,0",
					"description" : "Dolor sit amet",
				"action" : {
					"name" : "action",
					"href" : "http://google.com"
				}
			}
		],
		"action" : [
			{
				"name": "PRIMARY BUTTON",
				"color" : "primary",
				"href" : "http://google.com.br"
			},
			{
				"name": "SECONDARY BUTTON",
				"color" : "secondary",
				"href" : "http://google.com.br"
			}
		]
	}
}
```
