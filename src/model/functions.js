import data from "./data.json";

// FUNCTIONS FOR TOTAL ANALYSIS

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

// Function to get Total ODI wins when SRT scored above 30 and Number of Centuries
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
  return { totalWins, totalCenturies, totalDoubleCenturies, totalHalfCenturies };
};

// FUNCTIONS FOR SPECIFIC TEAM ANALYSIS

//Return Total runs, catches and wickets against a team (for small cards)
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

// Return runs per match per team from data (for line chart)
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

// Return wins/loses per team from data (for pie chart)
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

//Return Stadium stats per team from data (for bar chart)
const getStadiumStats = team => {
  let stadiumList = new Set([]);
  let stadiumStats = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].opposition === team) {
      stadiumList.add(data[i].ground);
    }
  }

  //create an array of object for each unique stadium with default values(0)
  stadiumList.forEach(stadium => {
    return stadiumStats.push({
      ground: stadium,
      won: 0,
      lost: 0
    });
  });

  //update stadiumStats
  for (let i = 0; i < data.length; i++) {
    if (data[i].match_result === "won") {
      for (let j = 0; j < stadiumStats.length; j++) {
        if (
          stadiumStats[j].ground === data[i].ground &&
          data[i].opposition === team
        ) {
          stadiumStats[j].won++;
        }
      }
    } else if (data[i].match_result === "lost" && data[i].opposition === team) {
      for (let j = 0; j < stadiumStats.length; j++) {
        if (stadiumStats[j].ground === data[i].ground) {
          stadiumStats[j].lost++;
        }
      }
    }
  }
  return stadiumStats;
};

// Return opposition teams and respective matches from data (for team list)
const teams = () => {
  const teams = new Set([]);
  let teamStats = [];
  for (let i = 0; i < data.length; i++) {
    teams.add(data[i].opposition);
  }

  teams.forEach(team => {
    return teamStats.push({
      teamName: team,
      matches: 0
    });
  });

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < teamStats.length; j++) {
      if (teamStats[j].teamName === data[i].opposition) {
        teamStats[j].matches++;
      }
    }
  }

  let sortedTeamDetails = teamStats.sort((a, b) => {
    let nameA = a.teamName.replace(/\.| /g, "").toLowerCase();
    let nameB = b.teamName.replace(/\.| /g, "").toLowerCase();
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  });

  return sortedTeamDetails;
};

export {
  getTotalStats,
  getRunsPerInnings,
  getTotalWinsSRT,
  teams,
  getSummarizedStats,
  getRunsPerTeam,
  getMatchResultsPerTeam,
  getStadiumStats
};
