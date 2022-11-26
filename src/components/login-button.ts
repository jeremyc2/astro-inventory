import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import base from "../styles/lit-tw-base";
import { signIn } from "../firebase/auth-popup";
import type { User } from "firebase/auth";

declare global {
    interface Window { user: User; token: string }
}

@customElement("login-button")
export class LoginButton extends LitElement {
    static styles = [base, css`@tailwind utilities`]

    private async clickHandler() {
        const loginInfo = await signIn();
        if(!loginInfo) return

        window.user = loginInfo.user;
        window.token = loginInfo.token ?? "";
    }

    render() {
        return html`<button class="h-10 px-6 font-semibold rounded-md bg-black text-white" @click="${this.clickHandler}">
            Login
        </button>`
    }
}