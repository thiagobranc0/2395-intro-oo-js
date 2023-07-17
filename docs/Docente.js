import User from "./user.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovaEstudante(estudante, curso) {
    return `${estudante} aprovado(a) no curso de ${curso}!`;
  }
}

const novoDocente = new Docente("Ana", "a@a.com", "2021-01-01");
