import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const sleep = (waitTime: number) => new Promise( resolve => setTimeout(resolve, waitTime));

    const handleEmailchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleMessagechange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            setIsSending(true);
            // 送信する処理
            await axios.post('http://localhost:3001/send-mail', {
                email: email,
                message: message,
            })
            await sleep(5000);
            console.log("メールが送信されました。")
            // メール送信が終わったあと
            setEmailSent(true);
        } catch (error) {
            console.log(error);
        } finally {
            setIsSending(false);
        };
        console.log('送信されたメール：', email)
        console.log('送信されたメッセージ：', message)
    };

    return(
        <>
        <Box sx={{height: "50vh"}}>
            <Grid container rowSpacing={8} columnSpacing={2}>
                <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                <Typography 
                    variant="h2"
                    noWrap
                    component="a"
                    sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: '#000000',
                    textDecoration: 'none',
                    fontSize: {
                        xs: '1.5rem', // スモールスクリーン用
                        sm: '2rem',   // ミディアムスクリーン用
                        md: '3rem',   // ラージスクリーン用
                        lg: '4rem',   // さらに大きなスクリーン
                      },
                    }}
                    >
                        <motion.div
                            variants={{
                                offscreen: { // 画面外の場合のスタイル
                                y: 100,
                                opacity: 0,
                                },
                                onscreen: { // 画面内の場合のスタイル
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.5,
                                },
                                },
                            }}
                            initial="offscreen" // 初期表示はoffscreen
                            whileInView="onscreen" // 画面内に入ったらonscreen
                            viewport={{ once: false, amount: 0 }}
                            >
                        Contact
                        </motion.div>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <motion.div
                            variants={{
                                offscreen: { // 画面外の場合のスタイル
                                y: 100,
                                opacity: 0,
                                },
                                onscreen: { // 画面内の場合のスタイル
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.5,
                                },
                                },
                            }}
                            initial="offscreen" // 初期表示はoffscreen
                            whileInView="onscreen" // 画面内に入ったらonscreen
                            viewport={{ once: false, amount: 0 }}
                            >
                    {emailSent ? (
                        <Box sx={{ width: "100%", textAlign: "center" }}>
                            メールが送信されました。
                        </Box>
                    ) : (
                        <Stack sx={{ width: "100%" ,transform: "translateZ(-100px)"}} component="form" spacing={2} onSubmit={handleSubmit} autoComplete="off">
                            <TextField required fullWidth label="メールアドレス" name="email" variant="outlined" value={email} onChange={handleEmailchange} />
                            <TextField required fullWidth multiline rows={4} label="お問い合わせ内容" name="message" variant="outlined" value={message} onChange={handleMessagechange} />
                            {isSending ? (
                                <Button variant="contained" color="primary">
                                    <CircularProgress />
                                </Button>
                            ) : (
                                <Button type="submit" variant="contained" color="primary">
                                    送信
                                </Button>
                            )}
                        </Stack>
                    )}
                    </motion.div>
                </Grid>
            </Grid>
            </Box>
        </>
    );
};

export default ContactForm;