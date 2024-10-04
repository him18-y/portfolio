import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Pro from "../assets/images/common/profile_image.jpg"
import { motion } from 'framer-motion';

const ProfileList: React.FC = () => {
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
                        Profile
                        </motion.div>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
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
                    <Box sx={{ width: "100%" ,display:{ xs: 'none', md: 'flex' }}}>
                        <img style={{ width: "100%", height: "100%", borderRadius: "50%" }} src={Pro} />
                    </Box>
                    <Box sx={{textAlign: 'center', width: "80%" ,display:{ xs: 'flex', md: 'none' }}}>
                        <img style={{ width: "50%", height: "30%", borderRadius: "50%" }} src={Pro} />
                    </Box>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box sx={{ width: "100%", paddingLeft: {sx: "0px", md: "30px"} }}>
                    <Typography variant="body2" sx={{
                            fontWeight: 20,
                            letterSpacing: '.2rem',
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
                            <p>2003年埼玉県生まれ。中央大学理工学部情報工学科に在学中。趣味は音楽を聴くことと写真を撮ることで上の写真は自分がこれまでに撮ってきた写真です。</p>
                            <p>大学ではC/C++、Python、Javaなどのプログラム言語やコンピュータの基礎、数理情報学や社会情報学などに関する専門的な知識を学びました。</p>
                            <p>また独学でPythonを使った機械学習やデータ分析、DjangoやReactなどを使ったwebアプリ開発など様々なことに挑戦してきました。</p>
                            <p>実務は未経験ですが高い向上心を持っており、機会があれば様々なことに挑戦して多くのことを学んでいき、webエンジニアになりたいと考えています。</p>
                        </motion.div>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default ProfileList;