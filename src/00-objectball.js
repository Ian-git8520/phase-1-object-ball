
// ------------------everything about players and their details---------------------

function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 11,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 22,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}








// --------------excution functions for results!!!!--------------------








function allTeams() {
  const g = gameObject();
  return [g.home, g.away];
}





function allPlayers() {
  let result = [];
  for (let team of allTeams()) {
    for (let [name, stats] of Object.entries(team.players)) {
      result.push([name, stats]);
    }
  }
  return result;
}





function findPlayer(name) {
  for (let [pName, stats] of allPlayers()) {
    if (pName === name) return stats;
  }
  return null;
}





function findTeamByName(teamName) {
  return allTeams().find(team => team.teamName === teamName) || null;
}





function numPointsScored(playerName) {
  const player = findPlayer(playerName);
  return  player? player.points : undefined;
}





function shoeSize(playerName) {
  const player = findPlayer(playerName);
  return player ? player.shoe : undefined;
}




function teamColors(teamName) {
  const team = findTeamByName(teamName);
   return team.colors
}





function teamNames() {
  return allTeams().map(team => team.teamName);
}





function playerNumbers(teamName) {
  const team = findTeamByName(teamName);
  return team ? Object.values(team.players).map(p => p.number) : [];
}





function playerStats(playerName) {
  return findPlayer(playerName);
}



// --------------------bonus Quizzz--------------------


function bigShoeRebounds() {
  let biggest = 0;
  let rebounds = 0;

  for (let [, stats] of allPlayers()) {
    if (stats.shoe > biggest) {
      biggest = stats.shoe;
      rebounds = stats.rebounds;
    }
  }
  return rebounds;
}




function mostPointsScored() {
  let topPlayer = "";
  let maxPoints = 0;

  for (let [name, stats] of allPlayers()) {
    if (stats.points > maxPoints) {
      maxPoints = stats.points;
      topPlayer = name;
    }
  }
  return topPlayer;
}





function winningTeam(){
    const g = gameObject();
  const homeTotal = Object.values(g.home.players).reduce((s, p) => s + p.points, 0);
  const awayTotal = Object.values(g.away.players).reduce((s, p) => s + p.points, 0);

  return homeTotal > awayTotal ? g.home.teamName : g.away.teamName;
}





function playerWithLongestName() {
  let longest = "";
  for (let [name] of allPlayers()) {
    if (name.length > longest.length) longest = name;
  }
  return longest;
}


// --------------------super bonus quizzzz-----------------


function doesLongNameStealATon() {
  const longest = playerWithLongestName();

  let topStealer = "";
  let maxSteals = 0;

  for (let [name, stats] of allPlayers()) {
    if (stats.steals > maxSteals) {
      maxSteals = stats.steals;
      topStealer = name;
    }
  }

  return longest === topStealer;
}

// ----------------------end---------------------------