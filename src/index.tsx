import ApolloClient from 'apollo-client';
import React = require('react');
import ReactDOM = require('react-dom');
import {ApolloProvider, graphql} from 'react-apollo';

import {
  FeedQuery,
  FeedAuthorFragment,
  FeedRepoFragment,
} from './schema';
const graphqlDocuments = require('./documents.json');

const client = new ApolloClient();

const Feed = ({data}: {data: FeedQuery}) => (
  <div>
    <h1>GitHunt Feed</h1>
    <ul>
      {data.feed && data.feed.map(({repository, postedBy}) => (
        <li key={`${repository.owner.login}/${repository.name}`} >
          <a href={`https://github.com/${repository.owner.login}/${repository.name}`} >
            {repository.owner.login}/{repository.name}
          </a>
          <span> - posted by: </span>
          <a href={`https://github.com/${postedBy.login}`}>{postedBy.login}</a>
        </li>
      ))}
    </ul>
  </div>
);

const FeedWithData = graphql(graphqlDocuments['Feed.graphql'])(Feed);

const App = () => (
  <ApolloProvider client={client}>
    <FeedWithData />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("app"))
