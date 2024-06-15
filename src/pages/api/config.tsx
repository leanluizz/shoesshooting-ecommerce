import type { NextApiRequest, NextApiResponse } from 'next'
import pg from 'pg';
import bcrypt from 'bcrypt'
import { sql } from '@vercel/postgres'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { Pool } = pg;
    const pool = new Pool({
      connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    })
    const { id, passwordReset, name, emailReset} = req.body
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(passwordReset, salt) //Encrypt
    
    const Passwd: any = passwordReset !== "" ? (await sql.query(`UPDATE users SET password= '${passwordHash}' WHERE id = '${id}'`), res.send('Changes successfull!')) : null
    const Name: any = name !== "" ? (await sql.query(`UPDATE users SET users= '${name}' WHERE id = '${id}'`), res.send('Changes successfull!')) : null
    const Email: any = emailReset !== "" ? (await sql.query(`UPDATE users SET email= '${emailReset}' WHERE id = '${id}'`), res.send('Changes successfull!')) : null
  }