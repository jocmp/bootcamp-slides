export interface SlideshowModel {
    id: number;
    title: string;
    slides: SlideModel[];
}

export interface SlideModel {
    title: string;
    slide_type: "title" | "simple" | "two-column";
    content?: string[];
}

export interface AppState {
    slideshow: SlideshowModel;
    viewedIndices: number[];
    loading: boolean;
    error: string;
}

export class LinkFactory {

    static createSlideshowLink(id: number, index: number = 0) {
        return `/slideshows/${id}/slides/${index}`
    }
}