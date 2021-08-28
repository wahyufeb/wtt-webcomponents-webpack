import players from "./players.js";

class DataSource {
  static searchPlayer(keyword) {
    return new Promise((resolve, reject) => {
      const filteredPlayer = players.filter((player) => player.name.toUpperCase().includes(keyword.toUpperCase()))
      if(filteredPlayer.length) {
        resolve(filteredPlayer)
      } else {
        reject(`${keyword} is not found`)
      }
    })
  }
}

export default DataSource