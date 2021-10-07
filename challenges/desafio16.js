db.voos.find({ natureza: { $in: ["Internacional"] } }).count();
