var tabletojson = require('tabletojson')
var _ = require('lodash')
var paths = require('./paths');

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({stats:[]}).write();
db.set('stats',[]).write();

var leagueAveragesArrays = {
  avg: [],
  ops: []
}
var leagueAverages = {}

_.forEach(paths, function(path) {
  getData(path.url, path);
})

function getData(path, obj) {
  tabletojson.convertUrl(path, {}, function(tablesAsJson) {
    var filtered = _.filter(tablesAsJson[0], function(o) {
      return o[0] != 'all' || o[0] != '';
    })
    var headers = [
      'Name',
      'G',
      'AB',
      'R',
      'H',
      '1B',
      '2B',
      '3B',
      'HR',
      'RBI',
      'AVG',
      'SLG',
      'BB'
    ]
    leagueAveragesArrays.avg = [];
    leagueAveragesArrays.ops = [];
    // show begining to 20...
    var incId = Date.now();
    filtered = filtered.slice(7, filtered.length-1);
    var players = [];
    fltered = _.each(filtered, function(player, key) {
      var newPlayer = {};
      _.each(player, function(col, key) {
        newPlayer[headers[key]] = col;
        if (key == 0) {
          newPlayer[headers[key]] = newPlayer[headers[key]].replace(/[^\w\s]/gi, '');
          if (newPlayer[headers[key]].substr(newPlayer[headers[key]].length - 3) == ' fe') {
            newPlayer[headers[key]] = newPlayer[headers[key]].substr(0, newPlayer[headers[key]].length - 3);
            newPlayer.sex = 'Female'
          } else {
            newPlayer.sex = 'Male'
          }
        } else {
          newPlayer[headers[key]] = parseInt(newPlayer[headers[key]])
        }

      })
      incId = incId+1;
      newPlayer.id = incId;
      newPlayer = buildAdvancedStats(newPlayer, obj)
      if(newPlayer.Name !="" && newPlayer.Name !="All"){
        players.push(newPlayer)
      }
    })
    calculateLeagueAverages();
    players = buildAdvancedStatsPlus(players);
    var dbObj = {
      ...obj,
      players
    }
    console.log(dbObj.id)

    db.get('stats').push(dbObj).write()


  })
}
function buildAdvancedStats(player, obj) {
  //Total Bases
  player['TB'] = player['1B'] + (player['2B'] * 2) + (player['3B'] * 3) + (player['HR'] * 4)
  //On Base Percentage
  player['OBP'] = (player['H'] + player['BB']) / (player['AB'] + player['BB'])
  player['OBP'] = Math.round(player['OBP'] * 1000)
  //Runs Created
  player['RUNC'] = ((player['H'] + player['BB']) * player['TB']) / (player['AB'] + player['BB'])
  player['RUNC'] = parseInt(Math.round(player['RUNC']))
  //OPS
  player['OPS'] = ((player['H'] + player['BB']) / (player['AB'] + player['BB'])) + (player['TB'] / player['AB'])
  player['OPS'] = parseFloat(player['OPS'].toFixed(4))
  //Isolated Power
  player['ISO'] = player['SLG'] - player['AVG']
  //League Averages
  var gamesPlayedCap;
  var gamesPlayed = player['G'];
  if (obj.type == 'Career') {
    if (obj.playoff) {
      gamesPlayedCap = 15;
    } else {
      gamesPlayedCap = 50;
    }
  } else {
    gamesPlayedCap = 16;
  }
  if (gamesPlayed >= gamesPlayedCap) {
    player['GAME_LIMIT'] = true;
    //Add league stat averages here
    leagueAveragesArrays.avg.push(player['AVG'])
    leagueAveragesArrays.ops.push(player['OPS'])
  }else{
    player['GAME_LIMIT'] = false;
  }

  return player
}
function buildAdvancedStatsPlus(players){
  return _.each(players, function(player){
    if(player['GAME_LIMIT']){
      //OPS+
      player['OPSPLUS'] = parseFloat((player['OPS']/leagueAverages['ops'])*100).toFixed(1)
      player['OPSPLUS'] = Math.round(player['OPSPLUS'])
    }
  })
}
function calculateLeagueAverages() {
  _.each(leagueAveragesArrays, function(group, key) {
    leagueAverages[key] = average(group)
  })
}

const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
