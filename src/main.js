/* eslint-disable no-unused-vars */
// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/css/framework7.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import Routes
import Routes from './routes.js';

// Import js
import * as Database from './js/database.js';

// Import App Component
import App from './app';

// Init F7 Vue Plugin
Framework7.use(Framework7Vue);

// Init App
const baseApp = new Vue({
  el: '#app',
    data() {
      return {
        db: null,
        dbCreated: false,
      };
    },
  template: '<app/>',
  // Register App Component
  components: {
    app: App
  },
  methods: {
  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log('Received Event: deviceready');
        this.$nextTick(function () {
          this.receivedEvent('deviceready');
        })
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        this.$root.$data.db = Database.openDB();
        // this.$root.$data.db = window.sqlitePlugin.openDatabase({
        //   name: 'angled.db',
        //   location: 'default',
        //   androidDatabaseProvider: 'system'
        // }), function (error) {
        //     console.log('Open database ERROR: ' + JSON.stringify(error));
        //     document.getElementById('deviceready').querySelector('.received').innerHTML = 'Open database ERROR: ' + JSON.stringify(error);
        // };
        // window.sqlitePlugin.openDatabase({ name: 'hello-world.db', location: 'default' }, function (db) {
        //   db.executeSql("select length('tenletters') as stringlength", [], function (res) {
        //     var stringlength = res.rows.item(0).stringlength;
        //     console.log('got stringlength: ' + stringlength);
        //     document.getElementById('deviceready').querySelector('.received').innerHTML = 'stringlength: ' + stringlength;
        //  });
        // });

        if (this.$root.$data.db) {
          this.$root.$data.dbCreated = Database.dbCreated(this.$root.$data.db);
          // this.$root.$data.db.transaction(function(tx) {
          //   tx.executeSql('SELECT count(*) AS mycount FROM Rock', [], function(tx, rs) {
          //     console.log('Record count (expected to be 23): ' + rs.rows.item(0).mycount);
          //   }, function(tx, error) {
          //     console.log('SELECT error: ' + error.message);
          //   });
          // });
        }

        var parentElement = document.getElementById(id);
        if (parentElement) {
          console.log('parentElement found');
        } else {
          console.log('parentElement not found');
        }
        var listeningElement = parentElement.querySelector('.listening');
        if (parentElement) {
          console.log('listeningElement found');
        } else {
          console.log('listeningElement not found');
        }
        var receivedElement = parentElement.querySelector('.received');
        if (parentElement) {
          console.log('receivedElement found');
        } else {
          console.log('receivedElement not found');
        }

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

    }
  }
});

document.addEventListener('deviceready', baseApp.onDeviceReady, false);
