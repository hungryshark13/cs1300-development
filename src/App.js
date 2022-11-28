import React, { useState, useEffect } from 'react';
import './App.css';
import Logo from "./images/qatar-logo.png";
import MatchCard from "./MatchCard.js";
import AllMatches from "./data/matches.json";
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

function App() {
  // sorting state variable and favorites
  const [sorting, setSorting] = useState("MatchNumber");
  const [favorites, setFavorites] = useState(false)

  // group filters state variables
  const [groupA, setGroupA] = useState(false)
  const [groupB, setGroupB] = useState(false)
  const [groupC, setGroupC] = useState(false)
  const [groupD, setGroupD] = useState(false)
  const [groupE, setGroupE] = useState(false)
  const [groupF, setGroupF] = useState(false)
  const [groupG, setGroupG] = useState(false)
  const [groupH, setGroupH] = useState(false)

  // stadium filters state variables
  const [alBayt, setAlBayt] = useState(false)
  const [khalifa, setKhalifa] = useState(false)
  const [alThumama, setAlThumama] = useState(false)
  const [ahmad, setAhmad] = useState(false)
  const [lusail, setLusail] = useState(false)
  const [education, setEducation] = useState(false)
  const [nineSevenFour, setNineSevenFour] = useState(false)
  const [alJanoub, setAlJanoub] = useState(false)

  // sort matches by number when page initially loads 
  let matches = AllMatches;
  matches.sort((a, b) => a.MatchNumber - b.MatchNumber);

  // matches and favorites  
  const [matchesArray, setMatchesArray] = useState(matches)
  const [favoritesArray, setFavoritesArray] = useState([])
  const [favoritesAverage, setFavoritesAverage] = useState(0)

  // reset function for button
  const reset = () => {
    setSorting("MatchNumber")
    setFavorites(false)
    setGroupA(false)
    setGroupB(false)
    setGroupC(false)
    setGroupD(false)
    setGroupE(false)
    setGroupF(false)
    setGroupG(false)
    setGroupH(false)
    setAlBayt(false)
    setKhalifa(false)
    setAlThumama(false)
    setAhmad(false)
    setLusail(false)
    setEducation(false)
    setNineSevenFour(false)
    setAlJanoub(false)
    setMatchesArray(matches)
    setFavoritesArray([])
    setFavoritesAverage(0)
  };

  const changeSorting = (array) => {
    if (sorting === "MatchNumber") {
      return array.sort((a, b) => a.MatchNumber - b.MatchNumber);
    } else {
      return array.sort((a, b) => new Date(a.DateUtc) - new Date(b.DateUtc));
    }
  };

  const filterGroupA = (array) => {
    if (groupA) {
      return array.filter(item => item.Group === "Group A");
    } else {
      return array;
    }
  };

  const filterGroupB = (array) => {
    if (groupB) {
      return array.filter(item => item.Group === "Group B");
    } else {
      return array;
    }
  };

  const filterGroupC = (array) => {
    if (groupC) {
      return array.filter(item => item.Group === "Group C");
    } else {
      return array;
    }
  };

  const filterGroupD = (array) => {
    if (groupD) {
      return array.filter(item => item.Group === "Group D");
    } else {
      return array;
    }
  };

  const filterGroupE = (array) => {
    if (groupE) {
      return array.filter(item => item.Group === "Group E");
    } else {
      return array;
    }
  };

  const filterGroupF = (array) => {
    if (groupF) {
      return array.filter(item => item.Group === "Group F");
    } else {
      return array;
    }
  };

  const filterGroupG = (array) => {
    if (groupG) {
      return array.filter(item => item.Group === "Group G");
    } else {
      return array;
    }
  };

  const filterGroupH = (array) => {
    if (groupH) {
      return array.filter(item => item.Group === "Group H");
    } else {
      return array;
    }
  };

  const filterStadiumAlBayt = (array) => {
    if (alBayt) {
      return array.filter(item => item.Location === "Al Bayt Stadium");
    } else {
      return array;
    }
  };

  const filterStadiumKhalifa = (array) => {
    if (khalifa) {
      return array.filter(item => item.Location === "Khalifa International Stadium");
    } else {
      return array;
    }
  };

  const filterStadiumAlThumama = (array) => {
    if (alThumama) {
      return array.filter(item => item.Location === "Al Thumama Stadium");
    } else {
      return array;
    }
  };

  const filterStadiumAhmad = (array) => {
    if (ahmad) {
      return array.filter(item => item.Location === "Ahmad Bin Ali Stadium");
    } else {
      return array;
    }
  };

  const filterStadiumLusail = (array) => {
    if (lusail) {
      return array.filter(item => item.Location === "Lusail Stadium");
    } else {
      return array;
    }
  };

  const filterStadiumEducation = (array) => {
    if (education) {
      return array.filter(item => item.Location === "Lusail Stadium");
    } else {
      return array;
    }
  };

  const filterStadium974 = (array) => {
    if (nineSevenFour) {
      return array.filter(item => item.Location === "Stadium 974");
    } else {
      return array;
    }
  };

  const filterStadiumAlJanoub = (array) => {
    if (alJanoub) {
      return array.filter(item => item.Location === "Al Janoub Stadium");
    } else {
      return array;
    }
  };

  function addOrRemoveFavorites(match) {
    let favorites = favoritesArray;
    if (!favorites.includes(match)) {
      favorites.push(match);
    } else {
      favorites.splice(favorites.indexOf(match), 1);
    }
    setFavoritesArray(favorites)

    //update average
    let count = 0;
    for (let i = 0; i < favorites.length; i++) {
      count += favorites[i].Rating;
    }
    let average = count / favorites.length;
    if (isNaN(average)) {
      average = 0;
    }
    setFavoritesAverage(average.toFixed(2));
  }

  const isAFavorite = (match) => {
    if (favoritesArray.includes(match)) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    let result = [...matches];
    result = changeSorting(result);
    result = filterGroupA(result);
    result = filterGroupB(result);
    result = filterGroupC(result);
    result = filterGroupD(result);
    result = filterGroupE(result);
    result = filterGroupF(result);
    result = filterGroupG(result);
    result = filterGroupH(result);
    result = filterStadiumAlBayt(result);
    result = filterStadiumKhalifa(result);
    result = filterStadiumAlThumama(result);
    result = filterStadiumAhmad(result);
    result = filterStadiumLusail(result);
    result = filterStadiumEducation(result);
    result = filterStadium974(result);
    result = filterStadiumAlJanoub(result);

    setMatchesArray(result)

  }, [favorites, favoritesArray, sorting, groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH, alBayt, khalifa, alThumama, ahmad, lusail, education, nineSevenFour, alJanoub]);


  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <img className="logo" src={Logo} alt="world-cup-logo"></img>
        </div>
        <div className="App-menu">
          <div className="App-menu-child">
            <div className="App-menu-section" style={{ width: "125px" }}>
              <p className="App-menu-section-title">Sort By</p>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={sorting}
                  onChange={(event) => { setSorting(event.target.value) }}>
                  <FormControlLabel value="MatchNumber" control={
                    <Radio
                      sx={{
                        '&, &.Mui-checked': {
                          color: '#990033',
                        },
                      }}
                    />}
                    label="Match #"
                  />
                  <FormControlLabel value="Date" control={
                    <Radio
                      sx={{
                        '&, &.Mui-checked': {
                          color: '#990033',
                        },
                      }}
                    />}
                    label="Date"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="App-menu-section">
              <p className="App-menu-section-title">Other</p>
              <FormControlLabel
                control={<Checkbox checked={favorites}
                  onChange={(event) => { setFavorites(event.target.checked) }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="Favorites"
              />
              <p className="App-menu-favorites-text">Average rating: {favoritesAverage}</p>
            </div>
            <button onClick={reset} className="App-menu-button">Reset</button>
          </div>
          <div className="App-menu-section">
            <div>
              <p className="App-menu-section-title">Group</p>
              <FormControlLabel
                control={<Checkbox checked={groupA}
                  onChange={(event) => { setGroupA(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="A"
              />
              <FormControlLabel
                control={<Checkbox checked={groupB}
                  onChange={(event) => { setGroupB(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="B"
              />
              <FormControlLabel
                control={<Checkbox checked={groupC}
                  onChange={(event) => { setGroupC(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="C"
              />
              <FormControlLabel
                control={<Checkbox checked={groupD}
                  onChange={(event) => { setGroupD(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="D"
              />
              <FormControlLabel
                control={<Checkbox checked={groupE}
                  onChange={(event) => { setGroupE(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="E"
              />
              <FormControlLabel
                control={<Checkbox checked={groupF}
                  onChange={(event) => { setGroupF(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="F"
              />
              <FormControlLabel
                control={<Checkbox checked={groupG}
                  onChange={(event) => { setGroupG(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="G"
              />
              <FormControlLabel
                control={<Checkbox checked={groupH}
                  onChange={(event) => { setGroupH(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="H"
              />
            </div>
            <div>
              <p className="App-menu-section-title">Stadium</p>
              <FormControlLabel
                control={<Checkbox checked={nineSevenFour}
                  onChange={(event) => { setNineSevenFour(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="974"
              />
              <FormControlLabel
                control={<Checkbox checked={ahmad}
                  onChange={(event) => { setAhmad(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="Ahmad Bin Ali"
              />
              <FormControlLabel
                control={<Checkbox checked={alBayt}
                  onChange={(event) => { setAlBayt(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="Al Bayt"
              />
              <FormControlLabel
                control={<Checkbox checked={alJanoub}
                  onChange={(event) => { setAlJanoub(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="Al Janoub"
              />
              <FormControlLabel
                control={<Checkbox checked={alThumama}
                  onChange={(event) => { setAlThumama(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="Al Thumama"
              />
              <FormControlLabel
                control={<Checkbox checked={education}
                  onChange={(event) => { setEducation(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="Education City"
              />
              <FormControlLabel
                control={<Checkbox checked={khalifa}
                  onChange={(event) => { setKhalifa(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="Khalifa International"
              />
              <FormControlLabel
                control={<Checkbox checked={lusail}
                  onChange={(event) => { setLusail(event.target.checked); }}
                  style={{
                    color: "#990033",
                  }}
                />}
                label="Lusail"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="App-main">
        {(favorites === true) ?
          favoritesArray.map((item) => (
            <div className="MatchCard" key={item.MatchNumber}>
              <MatchCard
                HomeTeam={item.HomeTeam}
                AwayTeam={item.AwayTeam}
                Group={item.Group}
                Location={item.Location}
                Date={item.DateUtc}
                MatchNumber={item.MatchNumber}
                Rating={item.Rating}
              />
              <button style={{ color: isAFavorite(item) ? "#990033" : "white", backgroundColor: isAFavorite(item) ? "white" : "#990033" }} onClick={() => { addOrRemoveFavorites(item) }} className="MatchCardButton"> {isAFavorite(item) ? "Remove" : "Add"}</button>
            </div>
          ))
          :
          matchesArray.map((item) => (
            <div className="MatchCard" key={item.MatchNumber}>
              <MatchCard
                HomeTeam={item.HomeTeam}
                AwayTeam={item.AwayTeam}
                Group={item.Group}
                Location={item.Location}
                Date={item.DateUtc}
                MatchNumber={item.MatchNumber}
                Rating={item.Rating}
              />
              <button style={{ color: isAFavorite(item) ? "#990033" : "white", backgroundColor: isAFavorite(item) ? "white" : "#990033" }} onClick={() => { addOrRemoveFavorites(item) }} className="MatchCardButton"> {isAFavorite(item) ? "Remove" : "Add"}</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
