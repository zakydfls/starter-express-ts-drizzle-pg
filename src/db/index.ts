import {Pool} from "pg";

import * as schema from './schema'
import {NodePgDatabase, drizzle} from "drizzle-orm/node-postgres";

if(
    !process.env.DB_HOST ||
    !process.env.DB_USERNAME||
    !process.env.DB_NAME||
    !process.env.DB_PASSWORD
){
    throw new Error('Database creds missing.');
}

const pool = new Pool({
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD
})

export const db: NodePgDatabase<typeof schema> = drizzle(pool, {schema})