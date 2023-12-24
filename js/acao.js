var i = 0;
var titulo = document.getElementById("h2");
var paragrafo = document.getElementById("p");
var img = document.getElementById("img");
var button1 = document.getElementById("bt1");
var button2 = document.getElementById("bt2");

function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'  // O comportamento "suave" faz a rolagem parecer mais fluida
    });
}

function proximo() {
    if (i <= 8) {
        i = i + 1;
        if (i == 1) {
            scrollToTop();
            titulo.textContent = "Sabe o quanto eu gosto de você?"
            paragrafo.textContent = "Bom, quando a gente terminou, de início não caiu a ficha. Mas depois parei para refletir um pouco, de que não posso forçar algo no qual você não estava bem. Eu estaria sendo ignorante, e narcisista forçar a você a ficar com alguém, no qual não confia. Então resolvi seguir em frente."
            img.style.backgroundImage = "url('img/solidao.jpg')";
            img.style.visibility = "visible";
            img.style.position = "relative";
            button1.style.display = "none";
            button1.disabled = true;
        } else if (i == 2) {
            scrollToTop();
            titulo.textContent = "Pensava em você todo dia.";
            paragrafo.textContent = "Dias se passavam, e você não saía da minha mente, pensava no que eu fiz de errado que fez você perder a confiança em mim. E muitas vezes, queria que esse término fosse temporário e que você voltaria para mim, e quanto mais demorava, menor a esperança ficava.";
            img.style.backgroundImage = "url('img/solidao.jpg')";
            button1.style.display = "block";
            button1.disabled = false;
        } else if (i == 3) {
            scrollToTop();
            titulo.textContent = "Seguindo em frente.";
            paragrafo.textContent = "Todas as vezes que eu via a sua foto, e a foto de nós dois que ainda tenho, me perco nos momentos em que passamos. Porém vi que não podia ficar assim, e apaguei todas as fotos do celular, deixando guardadas na nuvem, de forma arquivada.";
            img.style.backgroundImage = "url('img/coracaopartido.jpg')";
        } else if (i == 4) {
            scrollToTop();
            titulo.textContent = "Não superei...";
            paragrafo.textContent = "Mas sempre voltava a ver as suas fotos, e sempre ficava maravilhado e pensativo, imaginando como seria se eu ainda estivesse contigo.";
            img.style.backgroundImage = "url('img/coracaopartido.jpg')";
        } else if (i == 5) {
            scrollToTop();
            titulo.textContent = "Amo você demais.";
            paragrafo.textContent = "Cada dia que passei contigo foi único, e esses dias jamais serão esquecidos.";
            img.style.backgroundImage = "url('img/02.jpg')";
        } else if (i == 6) {
            scrollToTop();
            titulo.textContent = "Cuide-se";
            paragrafo.textContent = "Se a vontade de voltar bater, é certeza que eu voltaria contigo. Mas tudo depende de você, e o que eu mais queria, na época, era servir de apoio a você quando passasse por turbulências na sua vida.";
            img.style.backgroundImage = "url('img/01.jpg')";
        } else if (i == 7) {
            scrollToTop();
            titulo.textContent = "Feliz Natal!";
            paragrafo.textContent = "De certa forma, queria passar o Natal e o Reveillon contigo, mas como não será possível, desejo a você feliz Natal e um próspero Ano Novo, que você realize seus sonhos, e lhe desejo muita felicidade.";
            img.style.backgroundImage = "url('img/03.jpg')";
            button2.style.display = "block";
            button2.disabled = false;
        } else if (i == 8) {
            scrollToTop();
            titulo.textContent = "Amo você!";
            paragrafo.textContent = "";
            paragrafo.style.display = "none";
            img.style.backgroundImage = "url('img/04.jpg')";
            paragrafo.style.backgroundSize = "cover";
            button2.style.display = "none";
            button2.disabled = true;
        } else if (i >= 8) {
            i = 8;
        }
    }
    
}

function retornar() {
    i = i - 1;

    if (i <= 3) {
        if (i == 1) {
            scrollToTop();
            titulo.textContent = "Sabe o quanto eu gosto de você?"
            paragrafo.textContent = "Bom, quando a gente terminou, de início não caiu a ficha. Mas depois parei para refletir um pouco, de que não posso forçar algo no qual você não estava bem. Eu estaria sendo ignorante, e narcisista forçar a você a ficar com alguém, no qual não confia. Então resolvi seguir em frente.";
            img.style.backgroundImage = "url('img/solidao.jpg')";
            button1.style.display = "block";
            button1.disabled = false;
        } else if (i == 2) {
            scrollToTop();
            titulo.textContent = "Pensava em você todo dia.";
            paragrafo.textContent = "Dias se passavam, e você não saía da minha mente, pensava no que eu fiz de errado que fez você perder a confiança em mim. E muitas vezes, queria que esse término fosse temporário e que você voltaria para mim, e quanto mais demorava, menor a esperança ficava.";
            img.style.backgroundImage = "url('img/solidao.jpg')";
            button1.style.display = "block";
            button1.disabled = false;
        } else if (i == 3) {
            scrollToTop();
            titulo.textContent = "Seguindo em frente.";
            paragrafo.textContent = "Todas as vezes que eu via a sua foto, e a foto de nós dois que ainda tenho, me perco nos momentos em que passamos. Porém vi que não podia ficar assim, e apaguei todas as fotos do celular, deixando guardadas na nuvem, de forma arquivada."
            img.style.backgroundImage = "url('img/coracaopartido.jpg')";
            button1.style.display = "block";
            button1.disabled = false;
        } else if (i == 4) {
            scrollToTop();
            titulo.textContent = "Não superei...";
            paragrafo.textContent = "Mas sempre voltava a ver as suas fotos, e sempre ficava maravilhado e pensativo, imaginando como seria se eu ainda estivesse contigo."
            img.style.backgroundImage = "url('img/coracaopartido.jpg')";
            button1.style.display = "block";
            button1.disabled = false;
        } else if (i == 5) {
            scrollToTop();
            titulo.textContent = "Amo você demais.";
            paragrafo.textContent = "Cada dia que passei contigo foi único, e esses dias jamais serão esquecidos.";
            img.style.backgroundImage = "url('img/02.jpg')";
            button1.style.display = "block";
            button1.disabled = false;
        } else if (i == 6) {
            scrollToTop();
            titulo.textContent = "Cuide-se";
            paragrafo.textContent = "Se a vontade de voltar bater, é certeza que eu voltaria contigo. Mas tudo depende de você, e o que eu mais queria, na época, era servir de apoio a você quando passasse por turbulências na sua vida.";
            img.style.backgroundImage = "url('img/01.jpg')";
            button1.style.display = "block";
            button1.disabled = false;
        } else if (i == 7) {
            scrollToTop();
            titulo.textContent = "Feliz Natal!";
            paragrafo.textContent = "De certa forma, queria passar o Natal e o Reveillon contigo, mas como não será possível, desejo a você feliz Natal e um próspero Ano Novo, que você realize seus sonhos, e lhe desejo muita felicidade.";
            img.style.backgroundImage = "url('img/03.jpg')";
            button1.style.display = "block";
            button1.disabled = false;
        } else if (i == 8) {
            scrollToTop();
            titulo.textContent = "Amo você!";
            paragrafo.textContent = "";
            paragrafo.style.display = "none";
            img.style.backgroundImage = "url('img/04.jpg')";
            paragrafo.style.backgroundSize = "cover";
            button2.style.display = "none";
            button2.disabled = true;
        } else if (i <= 1) {
            i = 1;
        } else {
            document.getElementsByTagName('span').innerHTML = "Erro!";
        }
    }
}
