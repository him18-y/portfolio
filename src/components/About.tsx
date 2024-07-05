import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return(
        <>
            <Grid container rowSpacing={12} columnSpacing={2}>
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
                        About this site
                        </motion.div>
                    </Typography>
                </Grid>
                
                <Grid item xs={12} md={12}>
                    <Box sx={{textAlign:"center", width: "100%", paddingLeft: {sx: "0px", md: "30px"} }}>
                        <Typography variant="body2" sx={{
                            fontWeight: 70,
                            letterSpacing: '.3rem',
                            color: '#000000',
                            textDecoration: 'none',
                            }}>
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
                            <p>このサイトは平山裕大のポートフォリオサイトです。</p>
                            <p>自分のことについてや今まで身につけたスキル、作ってきたものなどをまとめています。</p>
                            <p>ぜひこのサイトを通じて私のことを深く知って欲しいです。</p>
                            <p>どうぞゆっくりとサイト内を散策してください。</p>
                            </motion.div>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            
        </>
    );
};

export default About;