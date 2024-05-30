import { FC } from "react";

declare global {

    type Course = {
        id: string;
        name: string;
        image: string;
        bgColor: string;
        tags: string[];
    }
    type Loader = {
        active: boolean;
        children?: JSX.Element;
    }

}

