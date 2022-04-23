export default function handler(req, res) {  
    if(req.method === 'POST') {
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.NS_GRID_API_KEY);
      const msg = {
        to: req.body.email,
        from: process.env.NS_FROM,
        subject: 'お問合せありがとうございました。',
        text: req.body.name + '様<br><br>平素より、Ustackをご利用いただき誠にありがとうございます。<br>今しばらくお待ちくださいますようよろしくお願い申し上げます。<br>なお、しばらくたっても返信、返答がない場合は、<br>お客様によりご入力いただいたメールアドレスに誤りがある場合がございます。<br>その際は、お手数ですが再度お問い合わせいただけますと幸いです。<br><br>お問い合わせ内容<br>' + req.body.title  + '<br><br>お問い合わせ詳細<br>' + req.body.body,
        html: req.body.name + '様<br><br>平素より、Ustackをご利用いただき誠にありがとうございます。<br>今しばらくお待ちくださいますようよろしくお願い申し上げます。<br>なお、しばらくたっても返信、返答がない場合は、<br>お客様によりご入力いただいたメールアドレスに誤りがある場合がございます。<br>その際は、お手数ですが再度お問い合わせいただけますと幸いです。<br><br>お問い合わせ内容<br>' + req.body.title  + '<br><br>お問い合わせ詳細<br>' + req.body.body,
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