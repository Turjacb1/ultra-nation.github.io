
//without search bar


// import React, { useEffect,useState } from 'react';
// import Country from '../Country';
// import '../../App.css';

// const Home = () => {


//     const [countries, setCountries] = useState([]);




//     useEffect(() => {
//       fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         .then(data => setCountries(data))
//         .catch(error => console.error('Error fetching   countries:', error)); // Handle potential errors
//     }, []);
  



//     return (
//       <div className="App">
//         <h1>Country Information</h1>
//         <h2>Total Countries: {countries.length}</h2>

//         {countries.map(country => (
//           <Country key={country.cca3} country={country} /> // Add unique key for better performance
//         ))}


//       </div>
//     );
// };

// export default Home;







//with search-bar normally



// import React, { useEffect, useState } from 'react';
// import Country from '../Country';
// import '../../App.css';

// const Home = () => {


//   const [countries, setCountries] = useState([]); // Array for all countries

//   const [filteredCountries, setFilteredCountries] = useState([]); // Array for filtered countries

//   const [searchTerm, setSearchTerm] = useState(''); // Search term state

//   // Fetch countries on component mount


//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await fetch('https://restcountries.com/v3.1/all');
//         if (!response.ok) {
//           throw new Error(`Failed to fetch countries: ${response.statusText}`);
//         }
//         const data = await response.json();
//         setCountries(data);
//         setFilteredCountries(data); // Set initial filtered countries
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     };

//     fetchCountries();
//   }, []);



//   // Handle search term change

//   const handleSearch = (event) => {
//     const searchValue = event.target.value.toLowerCase();
//     setSearchTerm(searchValue);



//     // Filter countries based on search term (case-insensitive)

//     const filtered = countries.filter((country) =>
//       country.name.common.toLowerCase().includes(searchValue)
//     );
//     setFilteredCountries(filtered);
//   };



//   return (
//     <div className="App">
//       <h1>Country Information</h1>



//       <input
//         type="text"
//         placeholder="Search countries..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />



//       <h2>Total Countries: {countries.length}</h2>

//       {filteredCountries.map((country) => (
//         <Country key={country.cca3} country={country} />
//       ))}
//     </div>
//   );
// };

// export default Home;







//with react bootstrap


// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
// import Country from '../Country';
// import '../../App.css'; // Assuming your custom CSS file

// const Home = () => {
//   const [countries, setCountries] = useState([]); // Array for all countries
//   const [filteredCountries, setFilteredCountries] = useState([]); // Array for filtered countries
//   const [searchTerm, setSearchTerm] = useState(''); // Search term state

//   // Fetch countries on component mount
//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await fetch('https://restcountries.com/v3.1/all');
//         if (!response.ok) {
//           throw new Error(`Failed to fetch countries: ${response.statusText}`);
//         }
//         const data = await response.json();
//         setCountries(data);
//         setFilteredCountries(data); // Set initial filtered countries
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     };

//     fetchCountries();
//   }, []);

//   // Handle search term change
//   const handleSearch = (event) => {
//     const searchValue = event.target.value.toLowerCase();
//     setSearchTerm(searchValue);

//     // Filter countries based on search term (case-insensitive)
//     const filtered = countries.filter((country) =>
//       country.name.common.toLowerCase().includes(searchValue)
//     );
//     setFilteredCountries(filtered);
//   };

//   return (
//     <Container fluid className="App">
//       <h1 className="text-center mt-3">Country Information</h1>

//       <Row className="justify-content-center mb-3">
//         <Col md="auto">
//           <InputGroup className="mb-3">
//             <InputGroup.Text className="bg-light">Search Countries...</InputGroup.Text>
//             <FormControl
//               aria-label="Search Country"
//               aria-describedby="search-countries"
//               placeholder="Search"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </InputGroup>
//         </Col>
//       </Row>

//       <h2 className="text-center">Total Countries: {countries.length}</h2>

//       <Row xs={1} md={2} lg={3} className="g-4">
//         {filteredCountries.map((country) => (
//           <Country key={country.cca3} country={country} />
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Home;








//with material ui

import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, TextField, InputAdornment, IconButton } from '@mui/material';
import Country from '../Country';
import '../../App.css'; // Assuming your custom CSS file

const Home = () => {
  const [countries, setCountries] = useState([]); // Array for all countries

  const [filteredCountries, setFilteredCountries] = useState([]); // Array for filtered countries

  const [searchTerm, setSearchTerm] = useState(''); // Search term state



  // Fetch countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error(`Failed to fetch countries: ${response.statusText}`);
        }
        const data = await response.json();
        setCountries(data);

        setFilteredCountries(data); // Set initial filtered countries

      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  // Handle search term change
  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);



    // Filter countries based on search term (case-insensitive)
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchValue)
    );
    setFilteredCountries(filtered);
  };



  return (


    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" align="center" sx={{ mt: 3 }}>
        Country Information
      </Typography>
<br/><br/>



      <Grid container spacing={2} justifyContent="center" sx={{ mb: 3 }}>
        <Grid item xs={12} md="auto">
          <TextField
            fullWidth
            label="Search Countries..."
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="search">
                    {/* Add your search icon here (e.g., <SearchIcon />) */}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>



      <Typography variant="h5" component="h2" align="center" style={{backgroundColor:'red',fontSize:'40px'}}>
        Total Countries: {countries.length}
      </Typography>



      <Grid container spacing={2}>
        {filteredCountries.map((country) => (
          <Grid item xs={12} sm={6} md={4} key={country.cca3}>
            <Country country={country} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
