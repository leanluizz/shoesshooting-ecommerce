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
    
   const query = await sql.query(`INSERT INTO compras (iduser, img, price, namehsoe, quantidade, "end", tamanho, status)
   VALUES (
       '${req.body.ComprasDados.id}',
       '${req.body.ComprasDados.image}',
       '${req.body.ComprasDados.preco}',
       '${req.body.ComprasDados.nameShoe}',
       '${req.body.ComprasDados.Quantidade}',
       '${req.body.local}',
       '${req.body.ComprasDados.tamanho}',
       'Comprado')
;`)

  const del = await sql.query(`DELETE FROM marketcar
  WHERE iduser = '${req.body.ComprasDados.id}' AND nameshoe = '${req.body.ComprasDados.nameShoe}'`)
}
