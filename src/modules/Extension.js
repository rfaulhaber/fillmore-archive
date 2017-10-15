export const layouts = {
    root: 'root',
    formFill: 'form-fill',
    loadTemplate: 'load-template',
    saveTemplate: 'save-template'
};

export function show(id) {
    for (const value of Object.values(layouts)) {
        if (value === id) {
            document.getElementById(value).style.display = 'initial';
        } else {
            document.getElementById(value).style.display = 'none';
        }
    }
}

function hide(element) {
    element.display = 'none';
}