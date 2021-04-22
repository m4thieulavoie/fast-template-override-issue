import { css, customElement, html } from "@microsoft/fast-element";
import {
  TextField,
  TextFieldTemplate as template,
} from "@microsoft/fast-foundation";

@customElement({
  name: "my-text-field",
  template: html`${template}<slot name="whatever"></slot>`,
  styles: css`
    :host {
      background-color: red;
    }
  `,
})
export default class TextFieldComponent extends TextField {}
