class EspeAbout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        h2 { color: #1a4d80; font-family: 'Roboto', sans-serif; }
        p { font-family: 'Roboto', sans-serif; }
      </style>
      <section>
        <h2>Sobre la ESPE</h2>
        <p>Historia, misión y visión de la Universidad de las Fuerzas Armadas - ESPE.</p>
      </section>
    `;
  }
}

customElements.define('espe-about', EspeAbout);
