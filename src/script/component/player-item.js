class PlayerItem extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({mode: "open"})
  }

  set player(player) {
    this._player = player
    this.render()
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fafafa;
        border-radius: 10px;
        box-shadow: 2px 10px 20px 1px rgba(0, 0, 0, 0.1);
        padding: 20px;
      }

      .card img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        background-position: center;
      }

      .card h2 {
        margin: 10px 0;
        font-size: 28px;
        color: darkslategray;
      }

      .card .card-description {
        width: 100%;
        margin: 5px 0;
        display: flex;
        justify-content: space-between;
      }
    </style>
    <div class="card">
      <img src="${this._player.photo}" alt="${this._player.name}">
      <h2>${this._player.name}</h2>
      <div class="card-description">
        <p>World Number <b>${this._player.wr}</b></p>
        <p>${this._player.country} </p>
      </div>
    </div>
    `
  }
}

customElements.define("player-item", PlayerItem)