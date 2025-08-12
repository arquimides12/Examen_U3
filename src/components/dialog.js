class EspeDialog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
      <style>
        dialog.mdl-dialog {
          border-radius: 8px;
          padding: 20px;
          width: 320px;
          max-width: 90vw;
          box-shadow: 0 6px 12px rgba(0,0,0,0.2);
        }
        h6.mdl-dialog__title {
          color: #1a4d80;
          font-weight: 700;
          margin-bottom: 16px;
          font-size: 1.25rem;
        }
        .mdl-dialog__content p {
          margin: 8px 0;
          font-size: 1.1rem;
          color: #444;
        }
        .mdl-dialog__actions {
          margin-top: 24px;
          text-align: right;
        }
        .mdl-button.close {
          background-color: #1a4d80;
          color: white;
          border-radius: 4px;
          padding: 8px 16px;
          font-weight: 600;
          transition: background-color 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .mdl-button.close:hover {
          background-color: #14416a;
        }
      </style>

      <dialog class="mdl-dialog">
        <h6 class="mdl-dialog__title">SANTO DOMINGO</h6>
        <div class="mdl-dialog__content">
          <p>Tecnologías de la Información</p>
          <p>Agropecuaria</p>
          <p>Biotecnología</p>
        </div>
        <div class="mdl-dialog__actions">
          <button type="button" class="mdl-button close">Cerrar</button>
        </div>
      </dialog>
    `;

    this.dialog = this.shadowRoot.querySelector('dialog');
    this.shadowRoot.querySelector('.close').addEventListener('click', () => this.close());
  }

  open() {
    this.dialog.showModal();
  }

  close() {
    this.dialog.close();
  }
}

customElements.define('espe-dialog', EspeDialog);
