import 'dotenv/config';
import { config, createSchema} from '@keystone-next/keystone/schema'
import { User } from './schemas/User';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  // jwt auth ttl
  maxAge: 60 * 60 * 24  * 360, // how long should they stay signed in
  secret: process.env.COOKIE_SECRET
};


export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO ADD DATA SEEDING HERE
  },
  lists: createSchema({
    // Schema items go in here
    User
  }),
  ui: {
    // TODO: Change this for roles
    isAccessAllowed: () => true
  },
  // TODO: add session values here
});
