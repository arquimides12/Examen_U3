class EspeContact extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          max-width: 800px;
          margin: 20px auto;
          padding: 0 16px;
          font-family: 'Roboto', sans-serif;
          color: #333;
          line-height: 1.6;
        }
        h2 {
          color: #1a4d80;
          margin-bottom: 12px;
        }
        p {
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
      </style>
      <div class="container">
        <h2>Contacto</h2>
        <p><strong>Email:</strong> contacto@espe.edu.ec</p>
        <p><strong>Teléfono:</strong> +593 123 456 789</p>
        <p><strong>Dirección:</strong> Latacunga, Ecuador</p>
      </div>
    `;
  }
}

customElements.define('espe-contact', EspeContact);
