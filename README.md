# Rule of Thumb

For this project, I used VueJS framework, divided it into some important components, design patterns, State with Vuex, CSS preprocessor (SASS), responsive design, and Unit testing on important components and behavior.

_Autodeploy With Vercel_ : https://rule-of-thumb.logatto.vercel.app/

## Project setup

Copy enviroment variables

```
cp .env.local.example .env.local
```

Install dependences

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

## API

The API services were built using AWS technologies

- Lambda with NodeJS.
- S3 to store images.
- DynamoDB for persistent information and votes.
- API Gateway exposes the Lambda functions.
