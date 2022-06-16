import * as React from 'react';
import Header from '../Common/header';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import image from './curry.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function menu() {

  return (
    <>
      <Header />
      <h2>Menu</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Item>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      カレー
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      説明文：テストテストテスト
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default menu;