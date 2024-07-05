import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from 'framer-motion';

import RadarChart from "./RadarChart"

const Skill_List: React.FC = () => {
    const contaierStyle = {
        border: "solid 1px #CCCCCC",
        padding: "8px",
        margin: "8px"
      }
    const setSkillLists = [
        {
            labels: ["C / C++","Python","HTML / CSS ", "JavaScript", "TypeScript", "Java"],
            datasets: [{
                label: "言語",
                data: [2, 3, 2, 3, 3, 2],
                fill: true,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgb(75, 192, 192, 1.0)",
            }],
        },
        {
            labels: ["React", "Material ui","Django","Django REST Framework", "Bootstrap", ""],
            datasets: [{
                label: "ライブラリ/フレームワーク",
                data: [3, 3, 2, 1, 1 ,0],
                fill: true,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1.0)",
            }]
        }
    ];

    const setSkillChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            r: {
                max: 3,
                min: 0,
                ticks: {
                    stepSize: 1
                },
            },
        }
    }

    return(
        <><motion.div
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
            <Grid container rowSpacing={2} columnSpacing={2}>
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
                        Skill
                    </Typography>
                </Grid>
                {setSkillLists.map((data) => {
                    return (
                        <Grid item xs={12} md={6}>
                            <Box sx={{my:10, width: "100%", height: {xs: "400px", md: "200px"} }}>
                                <RadarChart options={setSkillChartOptions} data={data}/>
                            </Box>
                        </Grid>
                    );
                })}
                <Box sx={{ textAlign: 'center' ,width: "100%", }} style={contaierStyle}>
                    <p>3:実践で使える</p>
                    <p>2:基礎的なことを知っている</p>
                    <p>1:少し触ったことがある</p>
                </Box>
            </Grid>
            </motion.div>
        </>
    );
};

export default Skill_List;