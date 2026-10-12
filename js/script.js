// Menu Hamburger para dispositivos Mobile
document.addEventListener('DOMContentLoaded', () => {
 
    const botao  = document.getElementById('menu-toggle');
    const menu   = document.getElementById('menu-principal');
 
    // Segurança: se algum elemento não existir, o script não faz nada
    // (evita erros no console em páginas sem menu).
    if (!botao || !menu) return;
 
    const header = botao.closest('header');
 
    // Abre o menu: classe "aberto" (CSS) + atributos de acessibilidade
    function abrirMenu() {
        menu.classList.add('aberto');
        botao.setAttribute('aria-expanded', 'true');
        botao.setAttribute('aria-label', 'Fechar menu');
    }
 
    // Fecha o menu: desfaz tudo o que abrirMenu() fez
    function fecharMenu() {
        menu.classList.remove('aberto');
        botao.setAttribute('aria-expanded', 'false');
        botao.setAttribute('aria-label', 'Abrir menu');
    }
 
    // Clique no botão: alterna entre aberto e fechado
    botao.addEventListener('click', () => {
        const estaAberto = menu.classList.contains('aberto');
        estaAberto ? fecharMenu() : abrirMenu();
    });
 
    // Clique em um link do menu: fecha o menu
    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', fecharMenu);
    });
 
    // Tecla ESC: fecha o menu e devolve o foco ao botão (boa prática de acessibilidade)
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape' && menu.classList.contains('aberto')) {
            fecharMenu();
            botao.focus();
        }
    });
 
    // Clique fora do header: fecha o menu
    document.addEventListener('click', (evento) => {
        if (!header.contains(evento.target)) fecharMenu();
    });
 
    // Se a janela passar de 768px (ex.: girar o tablet), volta ao estado
    // padrão. O valor 769 combina com o breakpoint "max-width: 768px" do CSS.
    window.matchMedia('(min-width: 769px)').addEventListener('change', (evento) => {
        if (evento.matches) fecharMenu();
    });
});
//Função de envio de contato (solicitação de orçamento)
function contato (){
    var nome = document.getElementById('cnome');
    var email = document.getElementById('email');
    var con = document.getElementById('conteudo');

    if (nome.value.trim() === "" || email.value.trim() === "" || con.value.trim() === ""){
        window.alert(`Confira as informações`)
    } else{

    }
        
}