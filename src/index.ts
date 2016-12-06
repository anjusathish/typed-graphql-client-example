import {FeedQuery} from './schema';

const results: FeedQuery = {
  feed: []
};

results.feed.map(item => item.repository.name);
