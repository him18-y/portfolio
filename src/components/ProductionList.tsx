import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MediaList from "./MediaCard";
import p001 from "../assets/images/production/production-001.png"
import mv11 from "../assets/images/p001/mv11.jpg"
import mv12 from "../assets/images/p001/mv12.jpg"
import p002 from "../assets/images/production/production-002.png"
import mv21 from "../assets/images/p002/mv21.png"
import mv22 from "../assets/images/p002/mv22.png"
import mv23 from "../assets/images/p002/mv23.png"
import mv24 from "../assets/images/p002/mv24.png"
import { motion } from 'framer-motion';
const ProductionList: React.FC = () => {
    const setMediaList = [
        {
            'title': 'portfolio',
            'description': "今見ているサイト",
            'image': p001,
            'modaltitle': "portfolio",
            'modaltext': `自分のポートフォリオサイトを制作しました。これから色んな制作物を作っていくためそれらをまとめたり、自分がどんな人でどのような技術を持っているかを知ってもらいたいため作りました。\n\nフロントエンドにはReactとTypeScriptを使っています。\n\nGithub: https://him18-y.github.io/portfolio/`,
            'mvs': [mv11, mv12,]
        },
        {
            'title': 'Hidane',
            'description': "イベントの感想共有アプリ",
            'image': p002,
            'modaltitle': "Hidane",
            'modaltext': `あるユーザーがイベントを花火として投稿し、他のユーザーがその投稿に対してコメントすることで花火が大きくなっていくアプリを作りました。テーマが”祭り”であるハッカソンに参加した際に制作しました。\nこのアプリは即席チーム三人で一週間かけて制作しました。主に自分がフロントエンドを担当しました。工夫した点は花火をReact-iconsの水滴を使って表現したことと花火大会の雰囲気に合わせたUI設計をしたことです。\n\nフロントエンドではTypeScript,React,Next.js,Tailwindcss、バックエンドではGo,Postman,Google cloudを使いました。\n\nGithub: https://github.com/tomizawakenshin/team17_frontend \n説明資料: https://drive.google.com/file/d/1CyyfnJqfTJwRjRU-wQ0OQDVQl9xjaQQM/view?usp=sharing`,
            'mvs': [mv21, mv22, mv23, mv24]
        },
        {
            'title': 'タイトル3',
            'description': "タイトル3の説明が入ります。",
            'image': "/images/production/production-003.png",
            'modaltitle': "title3",
            'modaltext': "text3",
            'mvs': []
        }
    ];

    return(
        <>
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
                            <p>Production</p>
                        </motion.div>
                </Typography>
                </Grid>
                {setMediaList.map((data) => {
                    return (
                        <Grid item xs={12} md={4}>
                            <Box sx={{ width: "100%" }}>
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
                                <p><MediaList title={data.title} description={data.description} image={data.image} modaltitle={data.modaltitle} modaltext={data.modaltext} mvs={data.mvs}/></p>
                                </motion.div>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};

export default ProductionList;