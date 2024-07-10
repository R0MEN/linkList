

if (window.location.pathname.endsWith('index.html')) {
    window.history.replaceState({}, '', window.location.pathname.replace('index.html', ''));
}


