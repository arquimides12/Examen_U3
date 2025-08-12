class EspeContact extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        h2 { color: #1a4d80; font-family: 'Roboto', sans-serif; }
        p { font-family: 'Roboto', sans-serif; }
      </style>
      <section>
        <h2>Contacto</h2>
        <p>Email: contacto@espe.edu.ec</p>
        <p>Teléfono: +593 123 456 789</p>
        <p>Dirección: Latacunga, Ecuador</p>
      </section>
    `;
  }
}

customElements.define('espe-contact', EspeContact);
