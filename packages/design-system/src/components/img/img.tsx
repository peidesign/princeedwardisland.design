import { Build, Component, Element, h, Prop, Watch } from "@stencil/core";

@Component({
  tag: "peid-img",
  styleUrl: "img.css",
  shadow: true
})
export class Img {
  private io: IntersectionObserver;

  @Element()
  private el: HTMLElement;

  /**
   * The URL or path to the image
   */
  @Prop()
  src: string;

  /**
   * A responsive srcset for this image
   */
  @Prop()
  srcset: string;

  /**
   * The alt text to display if the image does not load
   */
  @Prop()
  alt: string;

  /**
   * The physical width of the image
   */
  @Prop({ mutable: true, reflect: true })
  width: number;

  /**
   * The physical height of the image
   */
  @Prop({ mutable: true, reflect: true })
  height: number;

  /**
   * The primary color of the image (hex)
   */
  @Prop({ mutable: true, reflect: true })
  primaryColor: string;

  @Watch("src")
  validateSrc(newValue: string, oldValue) {
    if (newValue !== oldValue) {
      this.addIntersectionObserver();
    }
  }

  componentDidLoad() {
    if (Build.isBrowser) {
      this.addIntersectionObserver();
    }
  }

  getRemainingAttributes() {
    const attributes = Array.prototype.slice.call(this.el.attributes);
    const remainingAttributes = {};

    for (var attr in Object.keys(attributes)) {
      const props = attributes[attr];

      remainingAttributes[attr] = props.value;
    }

    return remainingAttributes;
  }

  addIntersectionObserver() {
    if ("IntersectionObserver" in window && this.src && !this.io) {
      this.io = new IntersectionObserver(
        (data: any) => {
          // because there will only ever be one instance
          // of the element we are observing
          // we can just use data[0]
          if (data[0].isIntersecting) {
            this.loadImage();
            this.removeIntersectionObserver();
          }
        },
        {
          root: document.querySelector("body"),
          rootMargin: "100px 0px 100px 0px"
        }
      );

      this.io.observe(this.el.shadowRoot.querySelector("img"));
    } else {
      this.loadImage();
    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  loadImage() {
    const image: HTMLImageElement = this.el.shadowRoot.querySelector("img");
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
      image.removeAttribute("data-src");
    };
  }

  render() {
    return [
      <img
        data-src={this.src}
        data-srcset={this.srcset}
        alt={this.alt ? this.alt : this.src}
      />,
      <noscript>
        <img
          src={this.src}
          srcset={this.srcset}
          alt={this.alt ? this.alt : this.src}
        />
      </noscript>
    ];
  }
}
