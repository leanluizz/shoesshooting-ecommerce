import type { NextApiRequest, NextApiResponse } from 'next'
import JWT from 'jsonwebtoken'
import ENV from 'dotenv-safe'
import { sql } from '@vercel/postgres'
import pg from 'pg';
import cookie from 'cookie'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  ENV.config()
  const cookies: any = cookie.parse(req.headers.cookie || '');
  const { Pool } = pg;
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  })
  
  //Verify token for show data in database
  JWT.verify(cookies.token, process.env.SECRET + "?sslmode=require" , async (err: any, decode: any) => {
    if(err){
        res.json({message: "This JWT don't exist!", erro: err}); 
    }else{
        const data = await sql.query(`SELECT users, id,email from Users WHERE id = '${decode.id}'`)
        res.json({data: data.rows});    
    }
  })
}
