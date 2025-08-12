class EspeContact extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          max-width: 700px;
          margin: 40px auto;
          padding: 30px 25px;
          font-family: 'Roboto', sans-serif;
          background-color: #f0f4fb;
          border-radius: 14px;
          box-shadow: 0 6px 18px rgba(26, 77, 128, 0.15);
          color: #1a4d80;
          text-align: center;
        }
        h2 {
          font-weight: 800;
          font-size: 2.4rem;
          margin-bottom: 25px;
          letter-spacing: 1.2px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        p {
          font-size: 1.25rem;
          line-height: 1.7;
          margin: 18px 0;
          font-weight: 500;
          color: #34495e;
          border-bottom: 1px solid #cfd9e6;
          padding-bottom: 12px;
          transition: color 0.3s ease;
          cursor: default;
        }
        p strong {
          color: #1a4d80;
          font-weight: 700;
        }
        p:last-child {
          border: none;
          margin-bottom: 0;
        }
        p:hover {
          color: #14416a;
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
