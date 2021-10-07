const empresaName = "PASSAREDO";
const totalVoos = db.voos.find(
  { "empresa.nome": "PASSAREDO", natureza: "Doméstica" },
).count();

db.resumoVoos.insert(
    { empresa: empresaName, totalVoosDomesticos: totalVoos },
);

db.resumoVoos.findOne({ empresa: empresaName }, {
  empresa: 1,
  totalVoosDomesticos: 1,
  _id: 0,
});
