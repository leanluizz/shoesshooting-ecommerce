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


      sgMail.setApiKey('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');
      const msg = {
        to: `${req.body.mail}`,
        from: 'luizzleandro827@gmail.com',
        subject: 'Convite para ser modelo',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Convite para ser Modelo</h2>
            <p>Olá,</p>
            <p>Recebemos sua candidatura para ser modelo do nosso site. Estamos muito animados em tê-lo(a) a bordo!</p>
            <p>Como modelo, você será parte integral do nosso processo criativo, e estamos ansiosos para ver como você irá brilhar!</p>
            <p>Por favor, entre em contato conosco se você tiver alguma dúvida ou precisar de mais informações.</p>
            <p>Obrigado e mal podemos esperar para começar!</p>
            <p>Atenciosamente,</p>
            <p>A Equipe do ShoesShooting</p>
          </div>
        `,
      };
      
      sgMail.send(msg)
        .then(() => {
          console.log('Email sent');
        })
        .catch((error) => {
          console.error(error);
        });
        
}
  
