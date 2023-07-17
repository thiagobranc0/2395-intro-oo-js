import User from "./user.js";
import Docente from "./Docente.js";
import Admin from "./admin.js";

const novoUser = new User("Mariana", "m@m.com", "2021-01-01");

const novoAdmin = new Admin("Rodrigo", "r@r.com", "2021-01-01");
console.log(novoAdmin.nome);
novoAdmin.nome = "André";
console.log(novoAdmin.nome);
