# Query and Apollo Client

### Resume Query and Apollo Client

### 1. Apollo Clinet?

> Apollo Client merupakan sebuah library state management yang komprehensif untuk JavaScript untuk mengelola data lokal dan jarak jauh dengan graphql yang secara global digunakan untuk `fetch`, `cache`, dan `modify` data aplikasi dan secara otomatis akan memperbarui di UI

### 2. How to Setup Apollo Client

1. Create new React JS Project (`npx create-react-app project_name`)
2. install graphql and apollo client (`npm i graphql @apollo/client`
3. Dont forget to commit changes to track progress
4. Go to src folder and create components folder
5. in the components folder create javascript files to configure apollo, example : `apollo-client.js`
6. In `apollo-client.js` configure the client :

```js
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-basic-06.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headersL: {
    "x-hasura-admin-secret":
      "5DuFwxnR0EsYR46jo0KM5hkvp2HKJkPUYy0QtbhVcfA2eLIy77jOKq7t5tOcmHQi",
  },
});

export default client;
```

7. Setting apollo provider in `index.js` and `import` `ApolloProvider`, `client` from `apollo-client.js`

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider} from '@apollo/client';
import client from './components/apollo-client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ApolloProvider client={client}
  <React.StrictMode>
    <App />
  </React.StrictMode>
</ApolloClient>
);

```

### 3. Core Feature Apollo Client

> Karena Apollo merupakan library javascript untuk pengolahan data jarak jauh dengan graphql sebagaimana disebutkan dalam website resmi Apollo, maka Feature-feature nya pun sama mulai dari `query`, `mutation`, dan `subscription`

1. `Query`

```gql
import {gql, useQuery} from '@apollo/Client'

const GetTodoList = gql`
query MyQuery {
todolist {
is_done
id
title
`}
}
```

2. `Mutation`

```graphql
//example insert
import {gql, useQuery, useMutation} from '@apollo/client'

const InsertTodo = gql`
mutation MyMutation($objects: [todolist_insert_input!] = {}) {
  insert_todolist(objects: $objects) {
    returning {
      id
      title
      is_done
    }
  }
}
`
```

3. `Subscription`

for `subscription` we need to install `subscription-transport-ws` to enable websocket connection.

`npm i @apollo/client subscriptions-transport-ws`. And then import all needed modules and separate between http and websocket link.

```js
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
```

### Result
