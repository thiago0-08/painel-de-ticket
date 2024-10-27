const data = new Date();
        

const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0'); // +1 pois os meses vão de 0 a 11
const ano = data.getFullYear();

// Supondo que você queira definir a data atual em todos os elementos
const dataAtual = new Date().toLocaleDateString(); // Formata a data atual
const dataElements = document.querySelectorAll('.data-atual');

dataElements.forEach(element => {
    element.textContent = dataAtual; // Define a data em cada elemento
});
