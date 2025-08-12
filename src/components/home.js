class EspeHome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          max-width: 900px;
          margin: 30px auto;
          padding: 20px;
          font-family: 'Roboto', sans-serif;
          color: #333;
          background: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
          text-align: center;
        }
        img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
          margin-bottom: 25px;
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        img:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 25px rgba(0,0,0,0.18);
        }
        h2 {
          color: #1a4d80;
          font-weight: 700;
          font-size: 2.4rem;
          margin-bottom: 15px;
          letter-spacing: 1px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        p {
          font-size: 1.15rem;
          line-height: 1.7;
          margin-bottom: 30px;
          color: #555;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
          text-align: justify;
          text-indent: 1.5em;
        }
        button {
          background-color: #1a4d80;
          color: white;
          border: none;
          padding: 14px 36px;
          font-size: 1.2rem;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(26, 77, 128, 0.5);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          font-weight: 600;
          letter-spacing: 0.05em;
          user-select: none;
        }
        button:hover {
          background-color: #14416a;
          box-shadow: 0 8px 25px rgba(20, 65, 106, 0.7);
        }
        button:active {
          transform: scale(0.98);
          box-shadow: 0 4px 12px rgba(20, 65, 106, 0.9);
        }
      </style>

      <div class="container">
        <img src="https://santodomingo.espe.edu.ec/wp-content/uploads/2020/09/Espe-Sede-Santo-Domingo.jpg" alt="ESPE Santo Domingo" />
        <h2>Bienvenido a ESPENotes</h2>
        <p>
          La Universidad de las Fuerzas Armadas ESPE, sede Santo Domingo, es una institución de educación superior pública que ofrece carreras de ingeniería en Biotecnología, Tecnologías de la Información y Agropecuaria. La sede se destaca por su enfoque en la innovación y el desarrollo tecnológico, con proyectos de investigación y vinculación con el sector productivo.
        </p>
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
