export interface ChildImage {
    src: string;
    width: number;
    height: number;
    className?: string;
}

export interface ServiceSlide {
    id: string;
    title: string;
    description: string;
    image: string;
    width: number;
    height: number;
    className?: string;
    child: ChildImage[];
} 