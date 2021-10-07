const totalVoosDomesticos = db.voos.find(
  {
    "empresa.nome": "LATAM AIRLINES BRASIL",
    natureza: "Doméstica",
  },
).count();

db.resumoVoos.insertOne(
  { empresa: "LATAM AIRLINES BRASIL" },
  { totalVoosDomesticos },
);

db.resumoVoos.findOne({}, {
  _id: 0,
  empresa: 1,
  totalVoosDomesticos: 1,
});