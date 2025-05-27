// trabalho.js

export function geradorDeTagsDeIdentificacao(nomePet) {
  return nomePet.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  if (idade >= 1 && (porte === "P" || porte === "M")) {
    return true;
  }
  return false;
}

export function calcularConsumoDeRacao(nomePet, idade, peso) {
  return peso * 300;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  switch (porte.toLowerCase()) {
    case "pequeno":
      return "brincar dentro de casa";
    case "médio":
      return "caminhar na praia";
    case "grande":
      return "corrida e brincadeiras mais intensas no parcão";
    default:
      return "atividade desconhecida";
  }
}

export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pipoca");
    }, 100);
  });
}
