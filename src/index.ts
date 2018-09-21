interface ELSX {
    (tag: string): HTMLElement;
}

/**
 * Generate a DOM Element
 */
const el: ELSX = (tag) => document.createElement(tag);
