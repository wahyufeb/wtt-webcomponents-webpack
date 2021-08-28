class AppBar extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({mode: "open"})
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowDOM = `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial';
      }

      nav {
        padding: 10px 50px;
        background-color: darkslategrey;
      }

      nav ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
      }

      nav ul li a {
        text-decoration: none;
        color: white;
      }

      nav ul li a:hover {
        opacity: .7;
      }
    </style>
    <nav>
      <ul>
        <li><a href="#">LOGO</a></li>
        <li>Table Tennis Player</li>
      </ul>
    </nav>
    `
  }
}

customElements.define("app-bar", AppBar)