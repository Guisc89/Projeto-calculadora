document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('Resultado');
    const calculator = document.querySelector('.calculadora');

    // Aqui o código vai adicionar um evento de clique para cada botão da calculadora
    const buttonsTable = document.querySelector('table');
    buttonsTable.addEventListener('click', (event) => {
        const target = event.target;

        // Ignora cliques que não são em botões
        if (!target.matches('button')) {
            return;
        }

        const value = target.innerText;

        switch (value) {
            case 'C':
                limpar();
                break;
            case '<':
                apagar();
                break;
            case '=':
                calcula();
                break;
            case 'X': // Aqui o botão de multiplicação exibe 'X' mas deve inserir '*'
                insert('*');
                break;
            default:
                insert(value);
                break;
        }
    });

    function insert(num) {
        display.value += num;
    }

    function limpar() {
        display.value = '';
    }

    function apagar() {
        display.value = display.value.slice(0, -1);
    }

    function calcula() {
        if (display.value) {
            try {
                display.value = eval(display.value.replace(',', '.'));
            } catch (e) {
                display.value = 'Erro';
            }
        }
    }
});