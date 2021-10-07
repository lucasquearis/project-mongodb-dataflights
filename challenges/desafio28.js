const empresaName = "LATAM AIRLINES BRASIL";
const totalVoos = db.voos.find(
  {
    "empresa.nome": empresaName,
    natureza: "Doméstica",
  },
).count();

db.resumoVoos.insert(
  { empresa: empresaName, totalVoosDomesticos: totalVoos },
);

db.resumoVoos.findOne({ empresa: empresaName }, {
  _id: 0,
  empresa: 1,
  totalVoosDomesticos: 1,
});