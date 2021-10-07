db.voos.findOne(
  {
    $or: 
    [
      { "empresa.nome": "DELTA AIRLINES" },
      { "empresa.nome": "AMERICAN AIRLINES" },
    ],
    "aeroportoOrigem.sigla": { $in: ["SBGR"] },
    "aeroportoDestino.sigla": { $in: ["KJFK"] },
  },
  {
    vooId: 1,
    _id: 0,
  },
);
