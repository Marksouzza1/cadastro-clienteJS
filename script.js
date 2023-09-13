document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const contadorForm = document.getElementById("contador-form");
    const clienteForm = document.getElementById("cliente-form");
    const clienteList = document.getElementById("cliente-list");

   
    const clientes = [];


    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        
        loginForm.reset();
    });

    contadorForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const contadorUsername = document.getElementById("contador-username").value;
        const contadorPassword = document.getElementById("contador-password").value;

       
        contadorForm.reset();
    });

   
    clienteForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const clienteNome = document.getElementById("cliente-nome").value;
        const clienteEmail = document.getElementById("cliente-email").value;

        
        clientes.push({ nome: clienteNome, email: clienteEmail });

       
        clienteForm.reset();

        
        atualizarListaClientes();
    });

  
    function atualizarListaClientes() {
        clienteList.innerHTML = "";
        clientes.forEach(function (cliente) {
            const li = document.createElement("li");
            li.textContent = `Nome: ${cliente.nome}, Email: ${cliente.email}`;
            clienteList.appendChild(li);
        });
    }
});
