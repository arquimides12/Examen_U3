class EspeHome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          max-width: 960px;
          margin: 20px auto;
          padding: 0 16px;
          font-family: 'Roboto', sans-serif;
          color: #333;
        }
        img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        h2 {
          color: #1a4d80;
          margin-top: 20px;
        }
        p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-top: 12px;
        }
        button {
          margin-top: 20px;
          background-color: #1a4d80;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          font-family: 'Roboto', sans-serif;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #14416a;
        }
      </style>
      <div class="container">
        <img src="./src/assets/espe.jpg" alt="ESPE Latacunga" />
        <h2>Bienvenido a ESPENotes</h2>
        <p>Portal informativo de la Universidad de las Fuerzas Armadas - ESPE.</p>
        <button id="openDialog">Mostrar Diálogo</button>
        <espe-dialog></espe-dialog>
      </div>
    `;

    this.dialog = this.shadowRoot.querySelector('espe-dialog');
    this.shadowRoot.querySelector('#openDialog').addEventListener('click', () => {
      this.dialog.open();
    });
  }
}

customElements.define('espe-home', EspeHome);
