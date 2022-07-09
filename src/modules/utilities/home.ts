export interface ListItem {
    title: string;
    icon: string;
    isGroup: boolean;
    onClick?: (event: Event) => void;
    children?: ListItem[];
}