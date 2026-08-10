function verificarForcaSenha(senha) {
  let pontuacao = 0;
  const recomendacoes = [];

  // Critério 1: comprimento mínimo
  if (senha.length >= 8) {
    pontuacao += 1;
  } else {
    recomendacoes.push("Use pelo menos 8 caracteres.");
  }

  // Critério 2: letra maiúscula
  if (/[A-Z]/.test(senha)) {
    pontuacao += 1;
  } else {
    recomendacoes.push("Inclua ao menos uma letra maiúscula.");
  }

  // Critério 3: letra minúscula
  if (/[a-z]/.test(senha)) {
    pontuacao += 1;
  } else {
    recomendacoes.push("Inclua ao menos uma letra minúscula.");
  }

  // Critério 4: número
  if (/[0-9]/.test(senha)) {
    pontuacao += 1;
  } else {
    recomendacoes.push("Inclua ao menos um número.");
  }

  // Critério 5: caractere especial
  if (/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
    pontuacao += 1;
  } else {
    recomendacoes.push('Inclua ao menos um caractere especial (ex: !@#$%).');
  }

  // Classificação final
  let classificacao;
  if (pontuacao <= 2) {
    classificacao = "Fraca";
  } else if (pontuacao <= 4) {
    classificacao = "Média";
  } else {
    classificacao = "Forte";
  }

  return { classificacao, recomendacoes };
}
export default verificarForcaSenha;