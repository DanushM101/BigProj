document.addEventListener('DOMContentLoaded', function() {
    // Debug check
    console.log('DOM loaded, Sprint exists?', !!window.Sprint);
    
    if (!window.Sprint) {
        document.getElementById('app').innerHTML = `
            <h1 style="color:red">Sprint failed to load!</h1>
            <button onclick="alert('Basic JS works!')">
                Test Button
            </button>
            <p>Check:</p>
            <ul>
                <li>CDN URL in index.html</li>
                <li>Browser console (F12)</li>
                <li>Internet connection</li>
            </ul>
        `;
        return;
    }

    try {
        const { a, mount } = window.Sprint;
        const heading = a('h1', 'Sprint is working!');
        const button = a('button', 'Click Me', {
            onclick: () => alert('Success!')
        });
        mount("#app", a('div', [heading, button]));
    } catch (e) {
        console.error('Sprint runtime error:', e);
    }
});