import { sql } from '@vercel/postgres'
import pg from 'pg';
import sgMail from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { Pool } = pg;
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  })

    const query = await sql.query(`SELECT email FROM Users WHERE email = '${req.body.mail}';`)
    let random: number = Math.floor(Math.random() * 90000) + 10000;
    const { rowCount } = query


    if (rowCount >= 1) { // if email exist in database
      await sql.query(`INSERT INTO codes (email, code) VALUES ('${req.body.mail}', ${random})`)
      sgMail.setApiKey('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');
      const msg = {
        to: `${req.body.mail}`,
        from: 'luizzleandro827@gmail.com',
        subject: 'Hello, iam ShoesShooting Robo!',
        text: `Confirm this code ${random}`,
      };
      
      sgMail.send(msg)
        .then(() => {
          console.log('Email sent');
        })
        .catch((error) => {
          console.error(error);
        });
    }
    res.send(rowCount)
}
  
