class EspeAdmission extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        h2 { color: #1a4d80; font-family: 'Roboto', sans-serif; }
        p { font-family: 'Roboto', sans-serif; }
      </style>
      <section>
        <h2>Proceso de Admisión</h2>
        <p>Información general sobre los pasos para ingresar a la universidad.</p>
      </section>
    `;
  }
}

customElements.define('espe-admission', EspeAdmission);
