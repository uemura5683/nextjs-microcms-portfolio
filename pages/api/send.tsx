export default function handler(req, res) {  
    if(req.method === 'POST') {
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.GRID_API_KEY);
      const msg = {
        to: req.body.email,
        from: process.env.FROM,
        subject: 'お問合せありがとうございました。',
        text: req.body.name + '様<br><br>この度はNu-stackのサイトにお問合せを頂きありがとうございます。<br>回答まで今しばらくお待ちくださいな。<br><br>' + req.body.title  + '<br><br>' + req.body.body,
        html: req.body.name + '様<br><br>この度はNu-stackのサイトにお問合せを頂きありがとうございます。<br>回答まで今しばらくお待ちくださいな。<br><br>' + req.body.title  + '<br><br>' + req.body.body,
      };
      (async () => {
        try {
          await sgMail.send(msg);
        } catch (error) {
          console.error(error);
          if (error.response) {
            console.error(error.response.body)
          }
        }
      })();
    }
    res.status(200)
}