declare module "*.svg" {
    import * as React from "react";

    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;

    const src: string;
    export default src;
}

declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.d.ts" {
    const src: string;
    export default src;
}
