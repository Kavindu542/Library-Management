import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import Iconify from "../../../components/iconify";
import { apiUrl, methods, routes } from "../../../constants";

// ----------------------------------------------------------------------

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[10],
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const LibraryHome = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [recentBooks, setRecentBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(apiUrl(routes.BOOK, methods.GET_ALL));
        const allBooks = response.data.booksList;
        
        // Get 6 featured books (you can modify this logic based on your needs)
        setFeaturedBooks(allBooks.slice(0, 6));
        
        // Get 4 most recent books
        setRecentBooks(allBooks.slice(0, 4));
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Helmet>
        <title>Library Home</title>
      </Helmet>

      <Container maxWidth="xl">
        {/* Hero Section */}
        <Box
          sx={{
            py: 8,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            borderRadius: 2,
            color: 'white',
            mb: 6,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Our Library
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Discover thousands of books and expand your knowledge
          </Typography>
          <Button
            component={RouterLink}
            to="/dashboard/books"
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'grey.100',
              },
            }}
          >
            Browse Collection
          </Button>
        </Box>

        {/* Featured Books Section */}
        <Typography variant="h4" sx={{ mb: 4 }}>
          Featured Books
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {featuredBooks.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book._id}>
              <StyledCard>
                <CardActionArea component={RouterLink} to={`/dashboard/books/${book._id}`}>
                  <StyledCardMedia
                    image={book.photoUrl}
                    title={book.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" noWrap>
                      {book.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      By {book.author.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {/* Quick Access Section */}
        <Typography variant="h4" sx={{ mb: 4 }}>
          Quick Access
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: 'center' }}>
              <Iconify icon="eva:book-outline" width={48} height={48} sx={{ mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Browse Books
              </Typography>
              <Button
                component={RouterLink}
                to="/dashboard/books"
                variant="outlined"
                startIcon={<Iconify icon="eva:arrow-forward-fill" />}
              >
                View All
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: 'center' }}>
              <Iconify icon="eva:person-outline" width={48} height={48} sx={{ mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Authors
              </Typography>
              <Button
                component={RouterLink}
                to="/dashboard/authors"
                variant="outlined"
                startIcon={<Iconify icon="eva:arrow-forward-fill" />}
              >
                View All
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: 'center' }}>
              <Iconify icon="eva:layers-outline" width={48} height={48} sx={{ mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Genres
              </Typography>
              <Button
                component={RouterLink}
                to="/dashboard/genres"
                variant="outlined"
                startIcon={<Iconify icon="eva:arrow-forward-fill" />}
              >
                View All
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: 'center' }}>
              <Iconify icon="eva:clock-outline" width={48} height={48} sx={{ mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Recent Additions
              </Typography>
              <Button
                component={RouterLink}
                to="/dashboard/books"
                variant="outlined"
                startIcon={<Iconify icon="eva:arrow-forward-fill" />}
              >
                View All
              </Button>
            </Card>
          </Grid>
        </Grid>

        {/* Recent Books Section */}
        <Typography variant="h4" sx={{ mb: 4 }}>
          Recently Added
        </Typography>
        <Grid container spacing={3}>
          {recentBooks.map((book) => (
            <Grid item xs={12} sm={6} md={3} key={book._id}>
              <StyledCard>
                <CardActionArea component={RouterLink} to={`/dashboard/books/${book._id}`}>
                  <StyledCardMedia
                    image={book.photoUrl}
                    title={book.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" noWrap>
                      {book.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      By {book.author.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default LibraryHome; 