import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MediaList from "./MediaCard";
import p001 from "../assets/images/production/production-001.png"
import { height } from "@mui/system";
import { motion } from 'framer-motion';
const ProductionList: React.FC = () => {
    const setMediaList = [
        {
            'title': 'portfolio',
            'description': "今見ているサイト",
            'image': p001,
        },
        {
            'title': 'タイトル2',
            'description': "タイトル2の説明が入ります。",
            'image': "/images/production/production-002.png",
        },
        {
            'title': 'タイトル3',
            'description': "タイトル3の説明が入ります。",
            'image': "/images/production/production-003.png",
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
                                <p><MediaList title={data.title} description={data.description} image={data.image} /></p>
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