import { sql } from '@vercel/postgres'
import pg from 'pg';
import bcrypt from 'bcrypt'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(  
  req: NextApiRequest,
  res: NextApiResponse
){
  const { Pool } = pg;

  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  })
  
  const sameEmail = await sql.query(`SELECT * from Users WHERE email = '${req.body.email}';`)
  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(req.body.password, salt) // Encrypt
   sameEmail.rowCount > 0 ? res.send('err in credentials') : (await sql`INSERT INTO Users (users, password, email) VALUES (${req.body.name}, ${passwordHash}, ${req.body.email});`, res.send('reloading...'))
}
  