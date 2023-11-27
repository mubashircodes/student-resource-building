import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


export default function Home() {
  return (


    <React.Fragment>
      <CssBaseline />

      <Container fixed>
        <Box sx={{ margin: 5 }} />
        <Listofbooks />
        <AppNavigation /> {/**App Navigation */}
      </Container>
    </React.Fragment>
  )

}

const books = [
  { title: 'Programming in C', author: 'robert Green', address: 'Towlichowki', type: 'FREE',image:"https://m.media-amazon.com/images/I/61FmuzUH8AL._AC_UF1000,1000_QL80_.jpg" },
  { title: 'Programming in Java', author: 'Robert Frost', address: 'mehdipatnam', type: 'FREE',image:"https://d2sofvawe08yqg.cloudfront.net/functional-programming-in-js-with-categories/s_hero2x?1620603202" },
  { title: 'Programming in JS', author: 'Frankeistien', address: 'Banjara Hills', type: 'FREE',image:"https://m.media-amazon.com/images/I/411t3aQzVaL.jpg" },
  { title: 'Programming in Python', author: 'Harper', address: 'Panjagutta', type: 'FREE',image:"https://m.media-amazon.com/images/I/411t3aQzVaL.jpg" }
]
function Listofbooks() {
  return (
    <Grid container spacing={2}>
      {books.map((book, idx) => (
        <Grid item xs={4} key={idx}>
          <BookCard
            title={book.title}
            author={book.author}
            address={book.address}
            type={book.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}


function AppNavigation() {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
      >
        <BottomNavigationAction label="Student Resource Sharing" icon={<MenuBookIcon />} />
        <BottomNavigationAction label="Food Rescource Sharing" icon={<FoodBankIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

function BookCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {props.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Call</Button>
        <Button size="small">Message</Button>
      </CardActions>
    </Card>
  );
}
