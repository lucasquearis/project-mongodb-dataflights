db.voos.find(
  {
    $and: [
      { "empresa.nome": "PASSAREDO" },
      { natureza: "Doméstica" },
    ],
  },
).count();
db.resumoVoos.insertOne({
  $and: [
    { empresa: "PASSAREDO" }, { totalVoosDomesticos: 4187 },
  ],
});

db.resumoVoos.findOne({}, {
  empresa: 1,
  totalVoosDomesticos: 1,
  _id: 0,
});