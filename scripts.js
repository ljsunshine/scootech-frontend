const thisForm = document.getElementById('calcuation');
thisForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(thisForm).entries()
    const response = await fetch('http://85.214.16.235:8080', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result)
})