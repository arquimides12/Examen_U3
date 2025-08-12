class EspeAbout extends HTMLElement {
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
          cursor: default;
        }
        img:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        h2 {
          color: #1a4d80;
          font-weight: 700;
          font-size: 2.4rem;
          margin-bottom: 20px;
          letter-spacing: 1px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        p {
          font-size: 1.15rem;
          line-height: 1.7;
          margin-bottom: 18px;
          color: #555;
          max-width: 780px;
          margin-left: auto;
          margin-right: auto;
          text-align: justify;
          text-indent: 1.5em;
        }
      </style>

      <div class="container">
        <img src="https://www.espe.edu.ec/wp-content/uploads/2021/03/Espe-Matriz-Sangolqui.gif" alt="Sede Matriz ESPE" />
        <h2>Sobre la ESPE - Sede Matriz</h2>
        <p>
          La Universidad de las Fuerzas Armadas ESPE (ESPE) es una institución de educación superior pública en Ecuador, fundada originalmente como Escuela de Oficiales Ingenieros en 1922. La sede Matriz, ubicada en Sangolquí, es el núcleo principal donde se desarrollan actividades académicas, científicas y tecnológicas.
        </p>
        <p>
          Su misión es formar profesionales de alta calidad y generar conocimiento científico-tecnológico innovador que contribuya al desarrollo sostenible del país y al fortalecimiento de las Fuerzas Armadas.
        </p>
        <p>
          La visión de la ESPE es ser reconocida a nivel nacional y regional como una institución de excelencia, comprometida con la seguridad, defensa y el progreso del Ecuador, sustentada en valores éticos, cívicos y de responsabilidad social.
        </p>
      </div>
    `;
  }
}

customElements.define('espe-about', EspeAbout);
