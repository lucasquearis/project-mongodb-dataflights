db.voos.findOne(
  {
    litrosCombustivel: {
      $exists: true,
      $lt: 600,
    },
    "empresa.nome": {
      $not: {
        $in: ["GOL", "AZUL"],
      },
    },
  },
  {
    _id: 0,
    vooId: 1,
    "empresa.nome": 1,
    litrosCombustivel: 1,
  },
);
