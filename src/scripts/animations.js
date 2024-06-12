function animacaoClick(e, classAnimacao, duracao, elements) {
    e.addEventListener('click', function () {
        this.classList.add(classAnimacao);

        if (this.classList.contains('clicked')) {
            this.classList.remove('clicked');
        } else {
            elements.forEach(el => el.classList.remove('clicked'));
            this.classList.add('clicked');
        }
       

        setTimeout(() => {
            this.classList.remove(classAnimacao);
        }, duracao);
    });
}

const respostaElements = document.querySelectorAll('.container-resposta');
respostaElements.forEach((e) => {
    animacaoClick(e, 'animacao-click', 200, respostaElements);
    
});