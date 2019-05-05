export declare class Image {
    private io;
    private el;
    /**
     * The URL or path to the image
     */
    src: string;
    /**
     * A responsive srcset for this image
     */
    srcset: string;
    /**
     * The alt text to display if the image does not load
     */
    alt: string;
    /**
     * The physical width of the image
     */
    width: number;
    /**
     * The physical height of the image
     */
    height: number;
    /**
     * The primary color of the image (hex)
     */
    primaryColor: string;
    validateSrc(newValue: string, oldValue: any): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    loadImagePlaceholder(): Promise<void>;
    loadImage(): void;
    getRemainingAttributes(): {};
    addIntersectionObserver(): void;
    removeIntersectionObserver(): void;
    render(): any[];
}
