import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import base from "../styles/lit-tw-base";

@customElement("login-button")
export class LoginButton extends LitElement {
    static styles = [base, css`@tailwind utilities`]

    render() {
        return html`<button>Login</button>`
    }
}