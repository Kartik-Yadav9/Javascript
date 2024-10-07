const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value.trim(),
        age: document.getElementById('age').value.trim(),
        email: document.getElementById('email').value.trim()
    };

    submitForm(formData);
}