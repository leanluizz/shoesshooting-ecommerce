import type { NextApiRequest, NextApiResponse } from 'next'
import JWT from 'jsonwebtoken'
import ENV from 'dotenv-safe'
import { sql } from '@vercel/postgres'
import pg from 'pg';
import bcrypt from 'bcrypt'
import { serialize } from 'cookie'
import cookie from 'cookie'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  ENV.config()
  cookie.parse
  const { Pool } = pg;
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  })
  res.setHeader('Set-Cookie', `token=${process.env.SECRET}; Max-Age=0; Path=/; HttpOnly; SameSite=Strict`);


  // Retorna uma resposta para indicar que o cookie foi excluído
  res.status(200).end();

}