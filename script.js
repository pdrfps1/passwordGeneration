let passwordLength = 16; 
const upperCaseCheckEl = document.querySelector("#uppercase-check"); 
const numberCheckEl = document.querySelector("#number-check");
const symbolCheckEl = document.querySelector("#symbol-check");
const inputEl = document.querySelector("#password");

function gerarSenha() { // Função para gerar a senha
  var chars = "abcdefghijklmnopqrstuvwxyz";

  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "1234567890"
  const symbols = "!@#$%^&*()-+<>"

  if (upperCaseCheckEl.checked) { // Verifica se o checkbox de letras maiúsculas está marcado
    chars += upperCaseChars; // Adiciona as letras maiúsculas à string de caracteres
  }
  if (numberCheckEl.checked) { // Verifica se o checkbox de números está marcado
    chars += numbers; // Adiciona os números à string de caracteres
  }
  if (symbolCheckEl.checked) { // Verifica se o checkbox de símbolos está marcado
    chars += symbols; // Adiciona os símbolos à string de caracteres
  }

  let password = ""; // Variável para armazenar a senha

  for (var x = 0; x < passwordLength; x++) { // Loop para gerar a senha
    var i = Math.floor(Math.random() * chars.length); // Gera um número aleatório entre 0 e o tamanho da string de caracteres
    password += chars.charAt(i); // Adiciona um caractere aleatório a cada iteração
  }

  inputEl.value = password; // Adiciona a senha ao campo de senha
}

function mudarSenha() { // Função para mudar a senha quando o botão é clicado
  inputEl.value = "";  // Limpa o campo de senha quando o botão é clicado
  gerarSenha(); // Gera uma nova senha quando o botão é clicado
}

function copiarSenha() {
  navigator.clipboard.writeText(inputEl.value); // Copia a senha para a área de transferência
  alert("Senha copiada com sucesso!") // Adiciona um alerta quando a senha é copiada
}

function mudarTamanho() {
  const mudarTamanhoEl = document.querySelector("#mudar-tamanho"); // Seleciona o range
  mudarTamanhoEl.addEventListener("range", function () { // Atualiza o tamanho da senha quando o range é alterado
    passwordLength = mudarTamanhoEl.value; // Atualiza o tamanho da senha
    gerarSenha(); // Atualiza a senha quando o tamanho é alterado
  });
}

function mudarTextoTamanho() {
  const mudarTextoTamanhoEl = document.querySelector("#mudar-texto-tamanho"); // Seleciona o range
  mudarTextoTamanhoEl.addEventListener("input", function () { // Atualiza o texto quando o tamanho é alterado
    mudarTextoTamanhoEl.value = mudarTextoTamanhoEl.value; // Atualiza o texto quando o tamanho é alterado
  }); // Atualiza o texto quando o tamanho é alterado
}

upperCaseCheckEl.addEventListener("click", gerarSenha); // Atualiza a senha quando o checkbox é clicado
