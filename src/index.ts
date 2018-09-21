interface Attributes {
    [name: string]: any
}

/**
 * Generate a DOM Element
 */
const el = (tag: string, attributes: Attributes) =>
    Object.keys(attributes).reduce((e: HTMLElement, key: string): HTMLElement => {
        e.setAttribute(key, attributes[key]);
        return e;
    }, document.createElement(tag));
