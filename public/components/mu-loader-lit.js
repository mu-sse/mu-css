import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';


class MULoader extends LitElement {

    static BASE_WIDTH = 90;
    static BASE_HEIGHT = 35;
    static ASPECT_RATIO = MULoader.BASE_WIDTH / MULoader.BASE_HEIGHT;

    static DEFAULT_VARIANT = 'mu';
    static DEFAULT_EMPTY_SPACE = 30;
    static DEFAULT_DURATION = '1500ms';
    static DEFAULT_TIMING = 'ease-in';
    static DEFAULT_INFINITE = true;
    static DEFAULT_ALTERNATE = true;


    static properties = {
        variant: { type: String, defaultValue: MULoader.DEFAULT_VARIANT},
        emptySpace: { type: Number, attribute: 'empty-space', defaultValue: MULoader.DEFAULT_EMPTY_SPACE},
        duration: { type: String, defaultValue: MULoader.DEFAULT_DURATION},
        timing: { type: String, defaultValue: MULoader.DEFAULT_TIMING},
        infinite: { type: Boolean, defaultValue: MULoader.DEFAULT_INFINITE, reflect: true, converter: {
            fromAttribute: (value) => value !== "false",
        } },
        alternate: { type: Boolean, defaultValue: MULoader.DEFAULT_ALTERNATE, reflect: true, converter: {
            fromAttribute: (value) => value !== "false",
        } }
    };

    constructor() {
        super();
        this.variant = MULoader.DEFAULT_VARIANT;
        this.emptySpace = MULoader.DEFAULT_EMPTY_SPACE;
        this.duration = MULoader.DEFAULT_DURATION;
        this.timing = MULoader.DEFAULT_TIMING;
        this.infinite = MULoader.DEFAULT_INFINITE;
        this.alternate = MULoader.DEFAULT_ALTERNATE;
    }

    static styles = css`
        :host {
            display: inline-block;
            max-width: 100%;
            max-height: 100%;
        }
    `;

    getColor(alpha = 1) {
        const colorMap = {
            mu: `hsla(184, 100%, 34%, ${alpha})`,
            light: `hsla(0, 100%, 100%, ${alpha})`,
            dark: `hsla(20, 4%, 17%, ${alpha})`,
            mgep: `hsla(21, 71%, 52%, ${alpha})`,
            huezi: `hsla(328, 100%, 32%, ${alpha})`,
            eteo: `hsla(115, 44%, 38%, ${alpha})`,
            pro: `hsla(346, 100%, 42%, ${alpha})`,
            cta: `hsla(44, 100%, 59%, ${alpha})`
        };
        return colorMap[this.variant] || colorMap.mu;
    }

    horizontalEmptySpace() {
        return this.emptySpace;
    }
    verticalEmptySpace() {
        return this.emptySpace / MULoader.ASPECT_RATIO;
    }

    render() {
        /* SVG Dimensions */
        const width = MULoader.BASE_WIDTH + 2 * this.horizontalEmptySpace();
        const height = MULoader.BASE_HEIGHT + 2 * this.verticalEmptySpace();
        const lineWidth = 10;
        const lineRadius = lineWidth / 2;

        /* Animation */
        const animationString = `dash ${this.duration} ` +
                                `${this.timing} ` +
                                `${this.infinite ? "infinite" : "forwards"} ` +
                                `${this.alternate ? "alternate" : ""}`;
        
        /* SVG Path Data */
        const muPathD = `
            M ${this.horizontalEmptySpace() + 5},${this.verticalEmptySpace() + 30} 
            L ${this.horizontalEmptySpace() + 5},${this.verticalEmptySpace() + 15} 
            A ${lineWidth} ${lineWidth} 0 1 1 ${this.horizontalEmptySpace() + 25} ${this.verticalEmptySpace() + 15} 
            L ${this.horizontalEmptySpace() + 25},${this.verticalEmptySpace() + 30} 
            M ${this.horizontalEmptySpace() + 25},${this.verticalEmptySpace() + 15} 
            A ${lineWidth} ${lineWidth} 0 1 1 ${this.horizontalEmptySpace() + 45},${this.verticalEmptySpace() + 15} 
            L ${this.horizontalEmptySpace() + 45},${this.verticalEmptySpace() + 20} 
            A ${lineWidth} ${lineWidth} 0 1 0 ${this.horizontalEmptySpace() + 65},${this.verticalEmptySpace() + 20} 
            L ${this.horizontalEmptySpace() + 65},${this.verticalEmptySpace() + 15} 
            A ${lineWidth} ${lineWidth} 0 1 1 ${this.horizontalEmptySpace() + 85} ${this.verticalEmptySpace() + 15} 
            L ${this.horizontalEmptySpace() + 85},${this.verticalEmptySpace() + 30}
        `;
        const muGreen1PathD = `
            M ${this.horizontalEmptySpace() + 5},${this.verticalEmptySpace() + 30} 
            L ${this.horizontalEmptySpace() + 5},${this.verticalEmptySpace() + 15} 
            A ${lineWidth} ${lineWidth} 0 1 1 ${this.horizontalEmptySpace() + 25} ${this.verticalEmptySpace() + 15} 
            L ${this.horizontalEmptySpace() + 25},${this.verticalEmptySpace() + 30}
        `;
        const muGreen2PathD = `
            M ${this.horizontalEmptySpace() + 45},${this.verticalEmptySpace() + 20} 
            L ${this.horizontalEmptySpace() + 45},${this.verticalEmptySpace() + 15} 
            A ${lineWidth} ${lineWidth} 0 1 0 ${this.horizontalEmptySpace() + 25} ${this.verticalEmptySpace() + 15} 
            L ${this.horizontalEmptySpace() + 25},${this.verticalEmptySpace() + 30}
        `;
        const muGreen3PathD = `
            M ${this.horizontalEmptySpace() + 45},${this.verticalEmptySpace() + 20} 
            A ${lineWidth} ${lineWidth} 0 1 0 ${this.horizontalEmptySpace() + 65} ${this.verticalEmptySpace() + 20} 
            L ${this.horizontalEmptySpace() + 65},${this.verticalEmptySpace() + 15} 
            A ${lineWidth} ${lineWidth} 0 1 1 ${this.horizontalEmptySpace() + 85} ${this.verticalEmptySpace() + 15} 
            L ${this.horizontalEmptySpace() + 85},${this.verticalEmptySpace() + 30}
        `;
        const muGreen4PathD = `
            M ${this.horizontalEmptySpace() + 85},${this.verticalEmptySpace() + 30} 
            L ${this.horizontalEmptySpace() + 85},${this.verticalEmptySpace() + 15} 
            A ${lineWidth} ${lineWidth} 0 1 0 ${this.horizontalEmptySpace() + 65} ${this.verticalEmptySpace() + 15}
`;

        /* SVG tag */
        return html`
            <svg
                width="${width}mm"
                height="${height}mm"
                viewBox="0 0 ${width} ${height}"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg">
                <style>
                    svg {
                        width: 100%;
                        height: 100%;
                        aspect-ratio: ${this.aspectRatio};
                    }
                    @keyframes dash {
                        from {
                            stroke-width: 0;
                            stroke-dashoffset: ${10 * lineWidth};
                        }
                        to {
                            stroke-width: ${lineWidth};
                            stroke-dashoffset: ${4 * lineWidth};
                        }
                    }

                    .mugreen {
                        stroke-dasharray: ${10 * lineWidth};
                        stroke-dashoffset: ${10 * lineWidth};
                        animation: ${animationString};
                        fill: none;
                        stroke: ${this.getColor()};
                        stroke-width: 0;
                        stroke-linecap: round;
                    }
                    #mu {
                        fill:none;
                        stroke: ${this.getColor(0.1)};
                        stroke-width: ${lineWidth};
                        stroke-linecap: round;
                    }
                </style>
                <g id="layer1">
                    <path id="mu" d="${muPathD}"></path>  

                    <path id="mugreen1" class="mugreen" d="${muGreen1PathD}"/>
                    <path id="mugreen2" class="mugreen" d="${muGreen2PathD}"/>
                    <path id="mugreen3" class="mugreen" d="${muGreen3PathD}"/>
                    <path id="mugreen4" class="mugreen" d="${muGreen4PathD}" />
                </g>
            </svg>
        `;
    }
}

customElements.define('mu-loader', MULoader);
