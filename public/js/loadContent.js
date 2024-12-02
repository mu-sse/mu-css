let btnGrid = document.getElementById('button-grid');
let btnGridOutline = document.getElementById('button-grid-outline');

let headerSection = document.getElementById('headers');
let bodyElement = document.querySelector('body');

let sizesContent = document.getElementById('sizes-content');
let fontSizesContent = document.getElementById('font-sizes-content');

const variants = [
    '',
    'primary',
    'secondary',
    'gray',
    'mu',
    'mgep', 
    'huezi',
    'eteo', 
    'asfabrik',
    'bbf',
    'pro', 
    'cta',
    'success', 
    'danger', 
    'warning', 
    'info', 
    'light', 
    'dark', 
];



const createHeader = (variant, vertical=false, outline=false) => {
    let header = document.createElement('header');
    header.classList.add('header');

    if(vertical) header.classList.add('header--vertical');
    if(outline) header.classList.add('header--outline');
    if(variant != '') header.classList.add('variant-' + variant);
    let headerH1 = document.createElement('h1');

    if(vertical) {
        Array.from(header.classList).forEach((className) => {
            headerH1.appendChild(document.createTextNode(className));
            headerH1.appendChild(document.createElement('br'));
        });
    } else {
        headerH1.textContent = header.className + ' outline' + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusamus laudantium voluptatibus maiores molestiae, quasi asperiores ducimus ullam commodi quaerat totam eum dicta laborum quidem fugiat, unde accusantium atque culpa dolor iure?";
    }

    let mutted = document.createElement('h2');
    mutted.classList.add('mutted');
    mutted.textContent = 'Muted text ' + variant;

    header.appendChild(headerH1);
    header.appendChild(mutted);

    return header;
}

const createFooter = (variant, vertical=false, outline=false) => {
    let footer = document.createElement('footer');
    footer.classList.add('footer');
    if(vertical) footer.classList.add('footer--vertical');
    if(outline) footer.classList.add('footer--outline');
    if(variant != '') footer.classList.add('variant-' + variant);

    let footerSpan = document.createElement('span');

    if(vertical) {
        Array.from(footer.classList).forEach((className) => {
            footerSpan.appendChild(document.createTextNode(className));
            footerSpan.appendChild(document.createElement('br'));
        });
    } else {
        footerSpan.textContent = footer.className + " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusamus laudantium voluptatibus maiores molestiae, quasi asperiores ducimus ullam commodi quaerat totam eum dicta laborum quidem fugiat, unde accusantium atque culpa dolor iure?";
    }

    footer.appendChild(footerSpan);

    return footer;
}

const createContent = () => {
    let content = document.createElement('main');
    content.classList.add('p-5');
    let contentP = document.createElement('p');
    contentP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusamus laudantium voluptatibus maiores molestiae, quasi asperiores ducimus ullam commodi quaerat totam eum dicta laborum quidem fugiat, unde accusantium atque culpa dolor iure?";
    content.appendChild(contentP);
    return content;
}

const createSizes = () => {
    // Load content from file mu-sizes.css
    fetch('css/uncompressed/mu-sizes.css')
    .then(response => response.text())
    .then(data => {
        const rootContentMatch = data.match(/:root\s*{([^}]*)}/);
        if (rootContentMatch) {
            const rootContent = rootContentMatch[1].trim();
            lines = rootContent.split('\n');
            const sizeLines = lines.filter(line => line.includes('--size-'));
            const fontSizeLines = lines.filter(line => line.includes('--font-size-'));

            sizesContent.innerText = `\n${sizeLines.join('\n')}`;
            fontSizesContent.innerText = `\n${fontSizeLines.join('\n')}`;
        } else {
            sizesContent.innerText = 'No :root selector found.';
            fontSizesContent.innerText = 'No :root selector found.';
        }
    });
}

const createVariantButton = (variant='', outline=false, pill=false) => {
    let btn = document.createElement('button');
    btn.classList.add('btn');
    if(variant != '') btn.classList.add('variant-' + variant);
    if(outline) btn.classList.add('btn--outline');
    if(pill) btn.classList.add('btn--pill');
    btn.textContent = btn.className;
    btn.addEventListener('click', () => {
        bodyElement.className = 'bg variant-' + variant;
    });
    return btn;
}

const createVariantPage = (variant='', outline=false, vertical=false) => {
    let page = document.createElement('article');
    page.classList.add('page');
    if(variant === 'light') page.classList.add('bg','variant-dark');
    page.appendChild(createHeader(variant, vertical, outline));
    page.appendChild(createContent());
    page.appendChild(createFooter(variant, vertical, outline));
    return page;
}

const addVariantButtons = ($variant) => {
    btn = createVariantButton($variant, false, false);
    btnOutline = createVariantButton($variant, true, false);
    btnPill = createVariantButton($variant, false, true);
    btnOutlinePill = createVariantButton($variant, true, true);

    btnGrid.appendChild(btn);
    btnGrid.appendChild(btnPill);
    btnGridOutline.appendChild(btnOutline);
    btnGridOutline.appendChild(btnOutlinePill);
}

const addVariantPages = ($variant) => {
    page = createVariantPage($variant, false, false);
    pageOutline = createVariantPage($variant, true, false);
    pageVertical = createVariantPage($variant, false, true);
    pageVerticalOutline = createVariantPage($variant, true, true);

    headerSection.appendChild(page);
    headerSection.appendChild(pageOutline);
    headerSection.appendChild(pageVertical);
    headerSection.appendChild(pageVerticalOutline);
}

createSizes();

for (let variant of variants) {
    /******************** Buttons ********************/
    addVariantButtons(variant);

    /******************** Headers ********************/
    addVariantPages(variant);
    // Page
    // let page = document.createElement('article');
    // page.classList.add('page', 'pb-5');
    // if(variant === 'light') page.classList.add('bg','variant-dark');
    // page.appendChild(createHeader(variant));
    // page.appendChild(createContent());
    // page.appendChild(createFooter(variant));
    // headerSection.appendChild(page);


    // let pageOutline = document.createElement('article');
    // pageOutline.classList.add('page');
    // if(variant === 'light') pageOutline.classList.add('bg','variant-dark');
    // pageOutline.appendChild(createHeader(variant, false, true));
    // pageOutline.appendChild(createContent());
    // pageOutline.appendChild(createFooter(variant, false, true));
    // headerSection.appendChild(pageOutline);

    // let pageVertical = document.createElement('article');
    // pageVertical.classList.add('page');
    // if(variant === 'light') pageVertical.classList.add('bg','variant-dark');
    // pageVertical.appendChild(createHeader(variant, true));
    // pageVertical.appendChild(createContent());
    // pageVertical.appendChild(createFooter(variant, true));
    // headerSection.appendChild(pageVertical);

    // let pageVerticalOutline = document.createElement('article');
    // pageVerticalOutline.classList.add('page');
    // if(variant === 'light') pageVerticalOutline.classList.add('bg','variant-dark');
    // pageVerticalOutline.appendChild(createHeader(variant, true, true));
    // pageVerticalOutline.appendChild(createContent());
    // pageVerticalOutline.appendChild(createFooter(variant, true, true));
    // headerSection.appendChild(pageVerticalOutline);

}