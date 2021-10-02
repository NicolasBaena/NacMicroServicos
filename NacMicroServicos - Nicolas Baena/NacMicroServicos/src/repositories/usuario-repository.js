const mongoose = require("mongoose");
const Usuario = mongoose.model("Usuario");

exports.get = async () => {
  const result = await Usuario.find({active: true});
  return result;
};

exports.create = async (data) => {
  let usuario = Usuario(data);
  await usuario.save();
};

exports.delete = async (id) => {
  await Usuario.findByIdAndDelete(id);
};

exports.getById = async (id) => {
  const result = await Usuario.findById(id);
  return result;
};

exports.udpate = async (id, data) => {
  await Usuario.findByIdAndUpdate(id, {
    $set: {
      nome: data.nome,
      endereco: data.endereco,
      idade: data.idade,
    },
  });
};
