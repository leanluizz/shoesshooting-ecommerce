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
    
    const query = await sql.query(`INSERT INTO marketcar (idUser, img, nameshoe, price, tamanho)
    VALUES('${req.body.iduser}', '${req.body.img}', '${req.body.nameshoe}', '${req.body.preco}', '${req.body.tamanho}')`)
}
