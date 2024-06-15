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
  const passwdCrypted = await sql.query(`SELECT password from Users WHERE email = '${req.body.mail}';`) // Get password of users

  //Desencrypt password for brcrypt compare the password sended with database
  const desencrypt = await bcrypt.compare(req.body.passwd, passwdCrypted.rows[0].password.split(/\s+/).join('')) // Regex delete whitespaces
console.log(desencrypt);

  const authenticate: object = await sql.query(`SELECT email, password from Users WHERE email = '${req.body.mail}' AND password = '${desencrypt ? passwdCrypted.rows[0].password.split(/\s+/).join('') : undefined}';`)
  const { rowCount }: any = authenticate
  const idQuery = await sql.query(`SELECT id from Users WHERE email = '${req.body.mail}'`)
  const id = idQuery.rows[0].id
  if (!rowCount) {
    res.send('PASSWORD NOT FOUND') // FAIL
  } else {
    let token = JWT.sign({ id }, process.env.SECRET + "?sslmode=require", { expiresIn: 10800 })

    // Define o cookie HTTP-only
    const cookie = serialize('token', token, {
      httpOnly: true,
      maxAge: 10800, // Lifetime of cookie (aqui, 3 hora)
      path: '/', // Paths where cookie are accepted (root)
    });

    res.setHeader('Set-Cookie', cookie);
    res.send({auth:'Sucess!', mail: req.body.mail, id: id}); // SUCCESS
  }
}
