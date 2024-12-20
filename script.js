const closeAlert = document.querySelector('#closeAlert')

closeAlert.addEventListener('click', () => {
    const alert = document.querySelector('.alert');
    alert.classList.add('remove');
})