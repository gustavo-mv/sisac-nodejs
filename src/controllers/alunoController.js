const alunoModel = require("../models/alunoModel");

const adicionarPresenca = async (req, res) => {
  const idAluno = req.body.idAluno;
  const idAula = req.body.idAula;
  const result = await alunoModel.adicionarPresenca(idAluno, idAula);
  return res.status(200).json(result);
};
const consultarPresencas = async (req, res) => {
  const idAluno = req.params.idAluno;
  if (idAluno != null) {
    const result = await alunoModel.consultarPresencas(idAluno);
    return res.status(200).json(result);
  } else
    return res
      .status(500)
      .json("O id está inexistente ou não é um tipo aceitável");
};
const verPresencaMarcada = async (req, res) => {
  const idAluno = req.body.idAluno;
  const idAula = req.body.idAula;
  if (idAluno != null && idAula != null) {
    const result = await alunoModel.verPresencaJaMarcada(idAluno, idAula);
    return res.status(200).json(result);
  } else
    return res
      .status(500)
      .json("O id está inexistente ou não é um tipo aceitável");
};
const verTodasDisciplinas = async (req, res) => {
  const idAluno = req.params.idAluno;
  if (idAluno != null) {
    const result = await alunoModel.verTodasDisciplinas(idAluno);
    return res.status(200).json(result);
  } else
    return res
      .status(500)
      .json("O id está inexistente ou não é um tipo aceitável");
};

module.exports = {
  adicionarPresenca,
  consultarPresencas,
  verPresencaMarcada,
  verTodasDisciplinas,
};