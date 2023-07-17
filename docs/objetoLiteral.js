const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "01/01/2012",
  role: "admin",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

user.exibirInfos();
