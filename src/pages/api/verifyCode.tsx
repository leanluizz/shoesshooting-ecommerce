import type { NextApiRequest, NextApiResponse } from 'next'
import pg from 'pg';
import { sql } from '@vercel/postgres'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { Pool } = pg;
    const pool = new Pool({
      connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    })
    const { codeinput } = req.body
    const { rows }: any = await sql.query(`SELECT code from codes WHERE code = '${codeinput}'`)
    codeinput == rows[0].code ? (res.send(200), await sql.query(`DELETE from codes WHERE code = ${codeinput}`)) : res.send('err')
}