let btnSection = document.getElementById('buttons');
let btnOutlineSection = document.getElementById('buttons-outline');

let headerSection = document.getElementById('headers');
let bodyElement = document.querySelector('body');

const variants = [
    'primary',
    'secondary',
    /*'mgep', 
    'eteo', 
    'huezi',*/ 
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
    if(vertical) header.classList.add('header-vertical');
    else header.classList.add('header');
    
    header.classList.add('variant-' + variant);
    if(outline) header.classList.add('outline');
    let headerH1 = document.createElement('h1');

    if(vertical) {
        headerH1.textContent = variant;
        header.classList.add('pbe-10');
    } else {
        headerH1.textContent = 'Header ' + variant + ' outline' + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusamus laudantium voluptatibus maiores molestiae, quasi asperiores ducimus ullam commodi quaerat totam eum dicta laborum quidem fugiat, unde accusantium atque culpa dolor iure?";
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
    if(vertical) footer.classList.add('footer-vertical');
    else footer.classList.add('footer');
    
    footer.classList.add('variant-' + variant);
    if(outline) footer.classList.add('outline');
    let footerSpan = document.createElement('span');

    if(vertical) {
        footerSpan.textContent = variant;
    } else {
        footerSpan.textContent = 'Footer ' + variant + ' outline' + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusamus laudantium voluptatibus maiores molestiae, quasi asperiores ducimus ullam commodi quaerat totam eum dicta laborum quidem fugiat, unde accusantium atque culpa dolor iure?";
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

for (let variant of variants) {
    /******************** Buttons ********************/
    // Button
    let btn = document.createElement('button');
    btn.classList.add('btn', 'variant-' + variant);
    btn.textContent = 'Button ' + variant;
    btn.addEventListener('click', () => {
        bodyElement.className = 'bg-' + variant;
    });

    // Button outline
    let btnOutline = document.createElement('button');
    btnOutline.classList.add('btn', 'variant-' + variant, 'outline');
    btnOutline.textContent = 'Button ' + variant + ' outline';

    // Button pill
    let btnPill = document.createElement('button');
    btnPill.classList.add('btn', 'variant-' + variant, 'pill');
    btnPill.textContent = 'Button ' + variant + ' pill';

    // Button outline
    let btnOutlinePill = document.createElement('button');
    btnOutlinePill.classList.add('btn', 'variant-' + variant, 'outline', 'pill');
    btnOutlinePill.textContent = 'Button ' + variant + ' outline pill';

    // Append
    btnSection.appendChild(btn);
    btnSection.appendChild(btnPill);
    btnOutlineSection.appendChild(btnOutline);
    btnOutlineSection.appendChild(btnOutlinePill);

    /******************** Headers ********************/
    // Page
    let page = document.createElement('article');
    page.classList.add('page', 'pb-5');
    if(variant === 'light') page.classList.add('bg-dark');
    page.appendChild(createHeader(variant));
    page.appendChild(createContent());
    page.appendChild(createFooter(variant));
    headerSection.appendChild(page);


    let pageOutline = document.createElement('article');
    pageOutline.classList.add('page');
    if(variant === 'light') pageOutline.classList.add('bg-dark');
    pageOutline.appendChild(createHeader(variant, false, true));
    pageOutline.appendChild(createContent());
    pageOutline.appendChild(createFooter(variant, false, true));
    headerSection.appendChild(pageOutline);

    let pageVertical = document.createElement('article');
    pageVertical.classList.add('page');
    if(variant === 'light') pageVertical.classList.add('bg-dark');
    pageVertical.appendChild(createHeader(variant, true));
    pageVertical.appendChild(createContent());
    pageVertical.appendChild(createFooter(variant, true));
    headerSection.appendChild(pageVertical);

    let pageVerticalOutline = document.createElement('article');
    pageVerticalOutline.classList.add('page');
    if(variant === 'light') pageVerticalOutline.classList.add('bg-dark');
    pageVerticalOutline.appendChild(createHeader(variant, true, true));
    pageVerticalOutline.appendChild(createContent());
    pageVerticalOutline.appendChild(createFooter(variant, true, true));
    headerSection.appendChild(pageVerticalOutline);

}