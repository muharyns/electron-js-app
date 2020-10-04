
module.exports = {
   dbConnect: function () {
      const fs = require('fs')
      const path = require('path')

      var Excel = require('exceljs');

      let pathIdx = __dirname.search("konsep-ak");
      let getPath = __dirname.slice(0, pathIdx);
      let mainPath = path.join(getPath, 'konsep-ak');
      const lodashId = require('lodash-id')
      //console.log(__dirname)

      //const crypto = require('crypto'),
      low = require('lowdb');
      //FileSync = require('lowdb/adapters/FileSync');
      const LocalStorage = require('lowdb/adapters/LocalStorage');
      const adapter = new LocalStorage('db')

      const db = low(adapter)
      
      db.defaults({ customer: [], nomor: [], pengeluaran:[] })
      .write()

      return db;

   }
}