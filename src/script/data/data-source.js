import players from "./players.js";

class DataSource {
	static async searchPlayer(keyword) {
		const filteredPlayer = await players.filter((player) =>
			player.name.toUpperCase().includes(keyword.toUpperCase()),
		);
		if (filteredPlayer.length) {
			return filteredPlayer;
		} else {
			return `${keyword} is not found`;
		}
	}
}

export default DataSource;
