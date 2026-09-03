import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';

// Local SQLite database file
const client = createClient({ url: 'file:sqlite.db' });
export const db = drizzle(client, { schema });
