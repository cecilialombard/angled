export function openDB() {
  var db = null;
  db = window.sqlitePlugin.openDatabase({
    name: 'Angled.db',
    location: 'default',
    createFromLocation: 1,
    androidDatabaseProvider: 'system'
  }), function (error) {
      console.log('Open database ERROR: ' + JSON.stringify(error));
      document.getElementById('deviceready').querySelector('.received').innerHTML = 'Open database ERROR: ' + JSON.stringify(error);
  };
  return db;
}

export function dbCreated(db) {
  if (db) {
    //db.transaction(function(tx) {
      // tx.executeSql('SELECT count(*) AS mycount FROM Rock', [], function(tx, rs) {
      //   console.log('Record count (expected to be 23): ' + rs.rows.item(0).mycount);
      //   emit (dbCreated, true);
      // }, function(tx, error) {
      //   console.log('SELECT error: ' + error.message);
      //   emit (dbCreated, false);
      // });
    //});
    db.executeSql('SELECT count(*) AS mycount FROM Rock', [], function(rs) {
      console.log('Record count (expected to be 23): ' + rs.rows.item(0).mycount);
      return true;
    }, function(error) {
      console.log('SELECT SQL statement ERROR: ' + error.message);
      return false;
    });
  } else {
    //emit (dbCreated, false);
    return false;
  }
}

export function closeDB(db) {
  db.close(function () {
        console.log("DB closed!");
    }, function (error) {
        console.log("Error closing DB:" + error.message);
  });
}

export function createDB(db) {
  try {
      db.transaction(function (tx) {
      // ...
      tx.executeSql('CREATE TABLE customerAccounts (firstname, lastname, acctNo)');
  }, function (error) {
      console.log('transaction error: ' + error.message);
  }, function () {
      console.log('transaction ok');
      emit('dbcreated');
  });
} catch (error) {

  }
}
