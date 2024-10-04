import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import RadarChart from '../../components/RadarChart';
const Skill: React.FC = () => {
    const setSkillLists = [
      {
          labels: ["HTML / CSS ", "SASS / SCSS", "JavaScript", "TypeScript", "React", "Next.js"],
          datasets: [{
              label: "Front-End",
              data: [3, 3, 2, 2, 2, 2],
              fill: true,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgb(75, 192, 192, 1.0)",
          }],
      },
      {
          labels: ["PHP", "Laravel", "Ruby", "Ruby on Rails", "python", "Django"],
          datasets: [{
              label: "Back-End",
              data: [3, 3, 3, 3, 2, 2],
              fill: true,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1.0)",
          }]
      },
      {
          labels: ["AWS", "GCP", "Linux", "Windows", "Nginx", "Apache"],
          datasets: [{
              label: "DevOps",
              data: [2, 1, 2, 1, 2, 2],
              fill: true,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1.0)",
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
      <>
        <Box sx={{margin: 10}}>
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
                      Ski
                  </Typography>
              </Grid>
              {setSkillLists.map((data) => {
                  return (
                      <Grid item xs={12} md={4}>
                          <Box sx={{ width: "100%", height: {xs: "400px", md: "200px"} }}>
                              <RadarChart options={setSkillChartOptions} data={data}/>
                          </Box>
                      </Grid>
                  );
              })}
              <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                  <Button variant="contained" size="large">
                      LearnMore
                  </Button>
              </Grid>
          </Grid>
          </Box>
      </>
  );
};

export default Skill;