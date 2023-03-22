import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { View } from '../../views/view';

@customElement('list-view')
export class ListView extends View {
  render() {
    return html`<h1>Hello, world!</h1>`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(
      'flex',
      'flex-col',
      'h-full',
      'items-center',
      'justify-center',
      'p-l',
      'text-center',
      'box-border'
    );
  }
}
