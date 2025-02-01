let palavra = String(prompt("Olá! Qual palavra deseja aplicar a evolução mágica? "));

let evolucao = (palavra) => {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let transformacao = '';

    for (let char of palavra) {
        if (/[a-zA-Z]/.test(char)) {
            let proximaLetra = String.fromCharCode(char.charCodeAt(0) + 1);

            if (char === 'z') proximaLetra = 'a';
            if (char === 'Z') proximaLetra = 'A';

            if (vogais.includes(proximaLetra.toLowerCase())) {
                proximaLetra = proximaLetra === proximaLetra.toLowerCase() 
                    ? proximaLetra.toUpperCase() 
                    : proximaLetra.toLowerCase();
            }

            transformacao += proximaLetra;
        } else {
            transformacao += char;
        }
    }

    return transformacao;
};

alert(`Contemple a evolução mágica: ${evolucao(palavra)}`);
