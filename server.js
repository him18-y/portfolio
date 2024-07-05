const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-mail', async(req, res) => {
    // メール送信の処理を記述する
    const { email, message } = req.body;
    // メール送信の設定
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'メールアドレス', // ユーザー名
            pass: 'アプリパスワード', // 2段階認証を行い、アプリパスワードする
        },
    });

    const SendMailOptions = {
        fron: 'メールアドレス', //送信元のメールアドレス
        to: email, // 送信先のメールアドレス
        subject: 'お問い合わせありがとうございます。', // 件名
        text: message, // メール本文
    }

    const ReceiveMailOptions = {
        fron: 'メールアドレス', //送信元のメールアドレス
        to: 'メールアドレス', // 送信先のメールアドレス
        subject: 'ホームページからのお問い合わせ', // 件名
        text: `Email: ${email}\n\n本文: ${message}`, // メール本文
    }

    try {
        await transporter.sendMail(SendMailOptions);
        await transporter.sendMail(ReceiveMailOptions);
        res.status(200).json({ message: 'メールが送信されました。'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: 'メールの送信に失敗しました。'});
    }

})

app.listen(port, () => {
    console.log(`サーバがポート ${port} で起動しました。`)
});