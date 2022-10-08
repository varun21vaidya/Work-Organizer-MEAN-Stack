const repo = require('../Model/Schema');

exports.generateDefectId = async () => {
  const defects = await repo.find({});
  const Id = 7001 + defects.length;
  return Id;
};
