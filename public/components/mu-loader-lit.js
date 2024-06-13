import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
class AnimatedSvg extends LitElement {
    static properties = {
        variant: { type: String },
        duration: { type: String },
        emptySpace: { type: Number, attribute: 'empty-space' },
        infinite: { type: Boolean, reflect: true, converter: {
            fromAttribute: (value) => value !== "false",
        } },
        alternate: { type: Boolean, reflect: true, converter: {
            fromAttribute: (value) => value !== "false",
        } },
        timing: { type: String }
    };

    constructor() {
        super();
        this.baseWidth = 90;
        this.baseHeight = 30;
        this.variant = 'mu';
        this.emptySpace = 30;
        this.duration = '1500ms';
        this.infinite = true;
        this.alternate = true;
        this.timing = 'ease';
    }

    static styles = css`
        :host {
            display: inline-block;
            max-width: 100%;
            max-height: 100%;
        }
        svg {
            width: 100%;
            height: 100%;
            aspect-ratio: ${this.baseWidth + 2 * this.emptySpace}/${this.baseHeight + 2 * this.emptySpace};
        }
    `;

    render() {
        const width = this.baseWidth + 2 * this.emptySpace;
        const height = this.baseHeight + 2 * this.emptySpace;
        const animationString = `dash ${this.duration} ${this.timing} ${this.infinite ? "infinite" : "forwards"} ${this.alternate ? "alternate" : ""}`;

        return html`
            <svg
                width="${width}mm"
                height="${height}mm"
                viewBox="0 0 ${width} ${height}"
                version="1.1"
                id="svg1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg">
                <style>
                    @keyframes dash {
                        from {
                            stroke-width: 0;
                            stroke-dashoffset: 100;
                        }
                        to {
                            stroke-width: 10;
                            stroke-dashoffset: 40;
                        }
                    }

                    .mugreen {
                        stroke-dasharray: 100;
                        stroke-dashoffset: 100;
                        animation: ${animationString};
                        fill: none;
                        stroke: ${this.getColor()};
                        stroke-width: 0;
                        stroke-linecap: round;
                    }
                    #mu {
                        fill:none;
                        stroke: ${this.getColor(0.1)};
                        stroke-width: 10;
                        stroke-linecap: round;
                    }
                </style>
                <g id="layer1">
                    <path id="mu"
                    d="M ${this.emptySpace + 5},${this.emptySpace + 30} L ${this.emptySpace + 5},${this.emptySpace + 15} A 10 10 0 1 1 ${this.emptySpace + 25} ${this.emptySpace + 15} L ${this.emptySpace + 25},${this.emptySpace + 30} M ${this.emptySpace + 25},${this.emptySpace + 15} A 10 10 0 1 1 ${this.emptySpace + 45},${this.emptySpace + 15} L ${this.emptySpace + 45},${this.emptySpace + 20} A 10 10 0 1 0 ${this.emptySpace + 65},${this.emptySpace + 20} L ${this.emptySpace + 65},${this.emptySpace + 15} A 10 10 0 1 1 ${this.emptySpace + 85} ${this.emptySpace + 15} L ${this.emptySpace + 85},${this.emptySpace + 30}"></path>  
                    <path id="mugreen1" class="mugreen"
                    d="M ${this.emptySpace + 5},${this.emptySpace + 30} L ${this.emptySpace + 5},${this.emptySpace + 15} A 10 10 0 1 1 ${this.emptySpace + 25} ${this.emptySpace + 15} L ${this.emptySpace + 25},${this.emptySpace + 30}"/>

                    <path id="mugreen2" class="mugreen"
                    d="M ${this.emptySpace + 45},${this.emptySpace + 20} L ${this.emptySpace + 45},${this.emptySpace + 15} A 10 10 0 1 0 ${this.emptySpace + 25} ${this.emptySpace + 15} L ${this.emptySpace + 25},${this.emptySpace + 30}"/>

                    <path id="mugreen3" class="mugreen"
                    d="M ${this.emptySpace + 45},${this.emptySpace + 20} A 10 10 0 1 0 ${this.emptySpace + 65} ${this.emptySpace + 20} L ${this.emptySpace + 65},${this.emptySpace + 15} A 10 10 0 1 1 ${this.emptySpace + 85} ${this.emptySpace + 15} L ${this.emptySpace + 85},${this.emptySpace + 30}"/>

                    <path id="mugreen4" class="mugreen"
                    d="M ${this.emptySpace + 85},${this.emptySpace + 30} L ${this.emptySpace + 85},${this.emptySpace + 15} A 10 10 0 1 0 ${this.emptySpace + 65} ${this.emptySpace + 15}" />
                </g>
            </svg>
        `;
    }
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
}

customElements.define('mu-loader', AnimatedSvg);
