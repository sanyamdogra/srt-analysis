import data from "./data.json";

// FUNCTIONS FOR TOTAL ANALYSIS

//Function to get team names

const teamName = () => {
  const names = [];
  for (let i = 0; i < data.length; i++) {
    if (names.indexOf(data[i].opposition) === -1) {
      names.push({
        label: data[i].opposition,
        value: data[i].opposition
      });
    }
  }

  function uniqByKeepLast(a, key) {
    let distinctNames = [...new Map(a.map(x => [key(x), x])).values()];
    return distinctNames;
  }
  return uniqByKeepLast(names, it => it.value);
};

// Function to get Total ODI Stats
const getTotalStats = () => {
  let totalRuns = 0;
  let totalCatches = 0;
  let totalWickets = 0;
  let maxRun = 0;
  let odiAvg = 44.8;
  for (let i = 0; i < data.length; i++) {
    if (data[i].batting_score !== "TDNB" && data[i].batting_score !== "DNB") {
      totalRuns += parseInt(data[i].batting_score, 10);
    }
    if (data[i].wickets !== "-") {
      totalWickets += parseInt(data[i].wickets, 10);
    }
    if (data[i].catches !== "-") {
      totalCatches += parseInt(data[i].catches, 10);
    }
    if (parseInt(data[i].batting_score, 10) > maxRun) {
      maxRun = parseInt(data[i].batting_score, 10);
    }
  }
  return { totalRuns, totalCatches, totalWickets, maxRun, odiAvg };
};

//Function To return individual Scores for total innings
const getRunsPerInnings = () => {
  const runs = [];
  for (let i = 0; i < data.length; i++) {
    runs.push({
      name: `Match ${i + 1}`,
      runs: data[i].batting_score
    });
  }

  return runs;
};

// Function to get Total ODI wins when SRT scored above 30, half-centuries, centuries, double centuries.
const getTotalWinsSRT = () => {
  let totalWins = 0;
  let totalCenturies = 0;
  let totalDoubleCenturies = 0;
  let totalHalfCenturies = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].batting_score !== "TDNB" && data[i].batting_score !== "DNB") {
      if (
        parseInt(data[i].batting_score) >= 30 &&
        data[i].match_result === "won"
      ) {
        totalWins++;
      }
      if (parseInt(data[i].batting_score) >= 100) {
        totalCenturies++;
      }
      if (
        parseInt(data[i].batting_score) >= 50 &&
        parseInt(data[i].batting_score) < 100
      ) {
        totalHalfCenturies++;
      }
      if (parseInt(data[i].batting_score) >= 200) {
        totalDoubleCenturies++;
      }
    }
  }
  return {
    totalWins,
    totalCenturies,
    totalDoubleCenturies,
    totalHalfCenturies
  };
};

// FUNCTIONS FOR SPECIFIC TEAM ANALYSIS

//Return Total runs, catches and wickets against a team (for ListGroup Component)
const getSummarizedStats = team => {
  let totalRuns = 0;
  let totalCatches = 0;
  let totalWickets = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].opposition === team) {
      if (data[i].batting_score !== "TDNB" && data[i].batting_score !== "DNB") {
        totalRuns += parseInt(data[i].batting_score, 10);
      }
      if (data[i].wickets !== "-") {
        totalWickets += parseInt(data[i].wickets, 10);
      }
      if (data[i].catches !== "-") {
        totalCatches += parseInt(data[i].catches, 10);
      }
    }
  }
  return { totalRuns, totalCatches, totalWickets };
};

// Return runs per match per team from data (for TeamLineGraph Component)
const getRunsPerTeam = team => {
  const runs = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].opposition === team) {
      runs.push({
        name: `Match${i + 1}`,
        runs: data[i].batting_score
      });
    }
  }
  return runs;
};

// Return wins/loses per team from data (for TeamPieChart Component)
const getMatchResultsPerTeam = team => {
  let won = 0;
  let lost = 0;
  let draw = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].opposition === team) {
      switch (data[i].match_result) {
        case "won":
          won++;
          break;
        case "lost":
          lost++;
          break;
        case "n/r":
          draw++;
          break;
        default:
          break;
      }
    }
  }
  return { won, lost, draw };
};

export {
  getTotalStats,
  getRunsPerInnings,
  getTotalWinsSRT,
  teamName,
  getSummarizedStats,
  getRunsPerTeam,
  getMatchResultsPerTeam
};
