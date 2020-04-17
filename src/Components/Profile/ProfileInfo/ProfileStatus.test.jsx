import React from "react";
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="SAMURAIJS" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("SAMURAIJS");
    });
    test("after creation span with status", () => {
        const component = create(<ProfileStatus status="SAMURAIJS" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("SAMURAIJS");
    });
    test("input should be displayed in editMode instead of span ", () => {
        const component = create(<ProfileStatus status="SAMURAIJS" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");

        expect(input.props.value).toBe("SAMURAIJS");
    });
});