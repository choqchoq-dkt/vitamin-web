/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface VtmnButton {
        /**
          * The size of the button.
          * @default 'medium'
         */
        "size": 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @default 'primary'
         */
        "variant": | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'secondary-reversed'
    | 'ghost'
    | 'conversion';
    }
    interface VtmnLink {
        /**
          * The hypertext link
          * @default '#'
         */
        "href": string;
        /**
          * The size of the link.
          * @default 'medium'
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * Is the link standalone or not
          * @default false
         */
        "standalone": boolean;
        /**
          * The target of the link
          * @default '_blank'
         */
        "target": string;
    }
}
declare global {
    interface HTMLVtmnButtonElement extends Components.VtmnButton, HTMLStencilElement {
    }
    var HTMLVtmnButtonElement: {
        prototype: HTMLVtmnButtonElement;
        new (): HTMLVtmnButtonElement;
    };
    interface HTMLVtmnLinkElement extends Components.VtmnLink, HTMLStencilElement {
    }
    var HTMLVtmnLinkElement: {
        prototype: HTMLVtmnLinkElement;
        new (): HTMLVtmnLinkElement;
    };
    interface HTMLElementTagNameMap {
        "vtmn-button": HTMLVtmnButtonElement;
        "vtmn-link": HTMLVtmnLinkElement;
    }
}
declare namespace LocalJSX {
    interface VtmnButton {
        /**
          * The size of the button.
          * @default 'medium'
         */
        "size"?: 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @default 'primary'
         */
        "variant"?: | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'secondary-reversed'
    | 'ghost'
    | 'conversion';
    }
    interface VtmnLink {
        /**
          * The hypertext link
          * @default '#'
         */
        "href"?: string;
        /**
          * The size of the link.
          * @default 'medium'
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * Is the link standalone or not
          * @default false
         */
        "standalone"?: boolean;
        /**
          * The target of the link
          * @default '_blank'
         */
        "target"?: string;
    }
    interface IntrinsicElements {
        "vtmn-button": VtmnButton;
        "vtmn-link": VtmnLink;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "vtmn-button": LocalJSX.VtmnButton & JSXBase.HTMLAttributes<HTMLVtmnButtonElement>;
            "vtmn-link": LocalJSX.VtmnLink & JSXBase.HTMLAttributes<HTMLVtmnLinkElement>;
        }
    }
}
