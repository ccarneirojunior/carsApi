const db = require('../database');

const car = {
  getAllCars: function(callback) {
    return db.query('select * from car', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from car where id_car=?', [id], callback);
  },
  add: function(car, callback) {
    return db.query(
      'insert into car (name,author,isbn) values(?,?,?)',
      [car.name, car.author, car.isbn],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from car where id_car=?', [id], callback);
  },
  update: function(id, car, callback) {
    return db.query(
      'update car set name=?,author=?, isbn=? where id_car=?',
      [car.name, car.author, car.isbn, id],
      callback
    );
  }
};
module.exports = car;