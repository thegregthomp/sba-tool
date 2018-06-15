import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('db.json')
const db = low(adapter)


class Services{
  getStatsForPlayer(name){

  }
  getStats(){
    return db.get('stats').value()
  }
  getStat(id){
    return db.get('stats').filter({'id':id}).value()[0]
  }
  getPlayersByParent(id){
    return db.get('stats').filter({'id':id}).value()[0].players
  }
}

export const services = new Services();
