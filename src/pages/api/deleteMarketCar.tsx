import type { NextApiRequest, NextApiResponse } from 'next'
import ENV from 'dotenv-safe'
import { sql } from '@vercel/postgres'
import pg from 'pg';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    ENV.config()
    const { Pool } = pg;
    const pool = new Pool({
      connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    })
    
   const query = await sql.query(`DELETE FROM marketcar
   WHERE ctid IN (
       SELECT ctid
       FROM (
           SELECT ctid, ROW_NUMBER() OVER () AS rn
           FROM marketcar
           WHERE nameshoe = '${req.body.data}'
       ) AS subquery
       WHERE rn = 1
   );
   `)

    
}
