import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Hostheader from "../Hostheader/Hostheader";
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Autocomplete from "@mui/material/Autocomplete";

function Payment() {
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState(null);
  return (
    <div>
      <Hostheader />
      <div>
        <div className="flex justify-center">
          <Card
            style={{
              className: "w-full",
              marginTop: "40px",
              width: "524px",
              height: "523px",
              border: "1px solid rgba(195, 203, 205, 0.42)",
            }}
          >
            <div className="mt-10 ml-10 text-center">
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: " #101828",
                }}
              >
                Create account
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400px",
                  color: "#667085",
                }}
              >
                Please enter details to create account
              </p>
            </div>
            <div>
              <Box sx={{ color: "#D22A8F" }}>
                <LinearProgress
                  color="inherit"
                  className="mt-32"
                  variant="determinate"
                  value={100}
                />
              </Box>
            </div>

            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginTop: "20px",
                marginLeft: "10px",
              }}
            >
              Add payment method
            </h3>
            <CardContent>
            <FormControl fullWidth>
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
              }}
            >
              Choose card
            </Typography>
            <Autocomplete
              popupIcon={<KeyboardArrowDownIcon />}
              className="mt-6"
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ height: 44 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="medium"
                  placeholder="Choose card"
                  sx={{
                    "& fieldset": {
                      borderRadius: "8px",
                    },
                  }}
                />
              )}
            />
          </FormControl>
              <FormControl fullWidth variant="outlined">
                <Typography
                  style={{
                    marginTop: "14px",
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                  }}
                >
                  Enter card number
                </Typography>
                <TextField
                  placeholder="155485541554"
                  sx={{
                    "& fieldset": {
                      borderRadius: "8px",
                      height:"50px",
                      marginTop: "6px"
                    },
                  }}
                />
              </FormControl>
              <div className="flex space-x-10 w-full">
                <div className="mt-16 w-1/2">
                  <Typography
                  className=" font-medium text-sm"
                    style={{
                      color: "#344054",
                    }}
                  >
                    Expiry date
                  </Typography>
                  <FormControl fullWidth variant="outlined">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                    inputFormat="dd/MM/yyy"
                    disableOpenPicker={true}
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} 
                      sx={{
                        "& fieldset": {
                          borderRadius: "8px",
                          height:"50px",
                          marginTop: "6px"
                        },
                      }}/>}
                    />
                  </LocalizationProvider>
                  </FormControl>
                </div>
                <FormControl className="w-1/2" variant="outlined">
                <Typography
                  style={{
                    marginTop: "14px",
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                  }}
                >
                  CSV
                </Typography>
                <TextField
                  placeholder="854"
                  sx={{
                    "& fieldset": {
                      borderRadius: "8px",
                      height:"50px",
                      marginTop: "6px"
                    },
                  }}
                />
              </FormControl>
                </div>
              <div className="flex flex-row justify-between mt-28">
                <div>
                  <Button
                    style={{
                      width: "127px",
                      height: "44px",
                      background: "#FFFFFF",
                      color: "#101828",
                      fontSize: "16px",
                      fontWeight: "500px",
                      borderRadius: "8px",
                      border: "1px solid #D22A8F",
                    }}
                  >
                    Skip for now
                  </Button>
                </div>
                <div
                  className="flex"
                >

                  <Button
                    component={Link}
                    to="/Attachments"
                    className="ml-10"
                    style={{
                      width: "73px",
                      height: "44px",
                      background: "#FFFFFF",
                      color: "#101828",
                      fontSize: "16px",
                      fontWeight: "500px",
                      borderRadius: "8px",
                      border: "1px solid #C3CBCD",
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    component={Link}
                    to="/SignIn"
                    className="ml-10"
                    style={{
                      width: "80px",
                      height: "44px",
                      background: "#D22A8F",
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: "500px",
                      borderRadius: "8px",
                    }}
                  >
                    Finish
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Payment;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];
