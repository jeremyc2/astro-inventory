import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static styles = css`
    @tailwind utilities;
    p { color: blue }
  `;

  @property()
  name = 'Somebody';

  render() {
    return html`<p class="text-lg p-4 m-0">Hello, ${this.name}!</p>`;
  }
}