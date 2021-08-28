import "./player-item.js"

class PlayerList extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({
      mode: "open"
    })
  }

  set players(players) {
    this._players = players
    this.render()
  }

  render() {
    this.shadowDOM.innerHTML = ''
    const wrapper = document.createElement('div')
    wrapper.style.margin = '10px 0'
    wrapper.style.padding = '10px 50px'
    wrapper.style.display = 'grid'
    wrapper.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))'
    wrapper.style.rowGap = '40px'
    wrapper.style.columnGap = '20px'

    this._players.map(player => {
      const playerItemElement = document.createElement("player-item")
      playerItemElement.player = player
      wrapper.appendChild(playerItemElement)
    })
    this.shadowDOM.appendChild(wrapper)
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
         .placeholder {
           text-align: center;
           font-weight: lighter;
           color: rgba(0,0,0,0.5);
           -webkit-user-select: none;
           -moz-user-select: none;
           -ms-user-select: none;
           user-select: none;
           }
       </style>`;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

}

customElements.define('player-list', PlayerList)