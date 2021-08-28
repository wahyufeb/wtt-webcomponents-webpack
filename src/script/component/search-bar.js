class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open"
    });
  }

  connectedCallback() {
    this.render();
  }

  set onSearchEvent(event) {
    this._searchEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector("#searchPlayer").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
      input {
        margin-top: 10px;
        height: 40px;
        width: 400px;
        padding: 10px;
        border-radius: 10px;
        border: .5px solid #333;
        outline: none;
      }
    </style>
    <input type="search" id="searchPlayer" placeholder="Search Table Tennis Player">
    `

    this.shadowDOM.querySelector("#searchPlayer").addEventListener("change", this._searchEvent);
  }
}

customElements.define("search-bar", SearchBar);