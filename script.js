const questionsBtn = document.querySelectorAll('.faq');

questionsBtn.forEach(btn => {
    btn.addEventListener('click', ()=> {
        console.log(btn.classList.toggle('active'));
    })
})