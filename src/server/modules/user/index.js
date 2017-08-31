// Components
import User from './sql';

import schema from './schema.graphqls';
import createResolvers from './resolvers';
import Feature from '../connector';

export default new Feature({schema, createResolversFunc: createResolvers,
  createContextFunc: () => ({ User: new User() })});