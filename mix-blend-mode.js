// 1. Open a web site(any site)
// 2. Paste the code into your browser console
// 3. Run it! See something happening.
function addMixBlendModeMask(color = '#000000', mode = 'screen') {
    let body = document.body;
    // create mask 
    let mask = document.createElement('div');
    // set the mask css property 
    let maskCss = {
        width: '100%',
        height: '100%',
        backgroundColor: color,
        position: 'fixed',
        top: '0',
        left: '0',
        mixBlendMode: mode,
    };
    mask.style.width = maskCss.width;
    mask.style.height = maskCss.height;
    mask.style.backgroundColor = maskCss.backgroundColor;
    mask.style.position = maskCss.position;
    mask.style.top = maskCss.top;
    mask.style.left = maskCss.left;
    mask.style.mixBlendMode = maskCss.mixBlendMode;

    mask.style.pointerEvents = 'none';
    // insert the musk into the page body
    body.append(mask);
}

addMixBlendModeMask('rgba(255,255,255,1)','difference');