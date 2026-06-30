export interface TdIconfontProps {
    loadDefaultIcons?: boolean;
    name: string;
    size?: string;
    tag?: string;
    url?: string | Array<string>;
    onClick?: (context: {
        e: MouseEvent;
    }) => void;
}
export interface TdIconSVGProps {
    loadDefaultIcons?: boolean;
    name: string;
    size?: string;
    url?: string | Array<string>;
    onClick?: (context: {
        e: MouseEvent;
    }) => void;
}
export interface IconProps {
    size?: string;
    onClick?: (context: {
        e: MouseEvent;
    }) => void;
    fillColor?: string | string[];
    strokeColor?: string | string[];
    strokeWidth?: number;
}
export interface SVGJson {
    tag: string;
    attrs: Record<string, any>;
    children?: SVGJson[];
    [key: string]: any;
}
export interface IconBaseData {
    attrs: {
        [key: string]: any;
    };
    props: {
        icon: SVGJson;
        id: string;
        staticClass?: string;
        style?: {
            [key: string]: any;
        };
        onClick?: (context: {
            e: MouseEvent;
        }) => void;
        [key: string]: any;
    };
    [key: string]: any;
}
