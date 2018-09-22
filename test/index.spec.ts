import { el } from "../src";

describe("elsx", () => {
    it("returns an element with the given tag name", () => {
        expect(el("div", {}, []).tagName).toBe("DIV");
    });

    describe("when copying attributes", () => {
        it("adds no attributes when none are provided", () => {
            const e = el("div", {}, []);
            expect(e.hasAttributes()).toBeFalsy();
            expect(e.attributes).toHaveLength(0);
        });

        it("adds provided attributes to the element", () => {
            const attr: { [name: string]: string } = {
                baz: "baz",
                foo: "foo"
            };

            const e = el("div", attr, []);

            expect(e.hasAttributes()).toBeTruthy();
            expect(e.attributes).toHaveLength(Object.keys(attr).length);

            Object.keys(attr).forEach((attrName: string): void => {
                expect(e.getAttribute(attrName)).toBe(attr[attrName]);
            });
        });
    });

    describe("when adding children", () => {
        it("adds no children when none are provided", () => {
            const e = el("div", {}, []);
            expect(e.children).toHaveLength(0);
        });

        it("adds provided children to the element", () => {
            const child = el("p", {}, []);
            const parent = el("section", {}, [child]);
            expect(parent.children).toHaveLength(1);
            expect(parent.firstChild).toBe(child);
        });

        it("adds provided children in the given order to the element", () => {
            const child1 = el("p", {}, []);
            const child2 = el("p", {}, []);
            const parent = el("section", {}, [child1, child2]);
            expect(parent.children).toHaveLength(2);
            expect(parent.firstChild).toBe(child1);
            expect(parent.firstChild!.nextSibling).toBe(child2);
        });
    });
});
