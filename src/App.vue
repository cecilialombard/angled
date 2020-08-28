<template>
  <!-- App -->
  <f7-app :params="f7params">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Main View -->
    <f7-view url="/" :main="true"></f7-view>

  </f7-app>
</template>

<script>
import routes from './routes';
export default {
  data() {
    return {
      f7params: {
        theme: 'auto',
        routes,
        id: 'io.framework7.testapp',
      },
    };
  },
  name: 'App',
  methods: {
  // // deviceready Event Handler
  // //
  // // Bind any cordova events here. Common events are:
  // // 'pause', 'resume', etc.
  //   onDeviceReady: function() {
  //       console.log('Received Event: deviceready');
  //       this.receivedEvent('deviceready');
  //   },
  //
  //   // Update DOM on a Received Event
  //   receivedEvent: function(id) {
  //       console.log('Received Event: ' + id);
  //       // this.$root.$data.db = window.sqlitePlugin.openDatabase({
  //       //   name: 'angled.db',
  //       //   location: 'default',
  //       //   androidDatabaseProvider: 'system'
  //       // }), function (error) {
  //       //     console.log('Open database ERROR: ' + JSON.stringify(error));
  //       // });
  //       window.sqlitePlugin.openDatabase({ name: 'hello-world.db', location: 'default' }, function (db) {
  //         db.executeSql("select length('tenletters') as stringlength", [], function (res) {
  //           var stringlength = res.rows.item(0).stringlength;
  //           console.log('got stringlength: ' + stringlength);
  //           document.getElementById('deviceready').querySelector('.received').innerHTML = 'stringlength: ' + stringlength;
  //        });
  //       });
  //       var parentElement = document.getElementById(id);
  //       if (parentElement) {
  //         console.log('parentElement found');
  //       } else {
  //         console.log('parentElement not found');
  //       }
  //       var listeningElement = parentElement.querySelector('.listening');
  //       if (parentElement) {
  //         console.log('listeningElement found');
  //       } else {
  //         console.log('listeningElement not found');
  //       }
  //       var receivedElement = parentElement.querySelector('.received');
  //       if (parentElement) {
  //         console.log('receivedElement found');
  //       } else {
  //         console.log('receivedElement not found');
  //       }
  //
  //       listeningElement.setAttribute('style', 'display:none;');
  //       receivedElement.setAttribute('style', 'display:block;');
  //
  //   },
    handleBackButton() {
      // NOTE: The back button will behave differently depending on circumstance
      // If the side panel is open, close it
      if (document.querySelector('.panel-left.panel-active')) {
        // This will do nothing when the split-view is open
        return this.$f7.panel.close();
      }
      // Close modals
      // @TODO How to handle modals we shouldn't close like a login-screen?
      if (document.querySelector('.modal-in')) {
        return this.$f7.popover.close();
      }
      // If we have a back button, we want it to go back
      if (this.$f7.views.main.router.history.length > 1) {
        return this.$f7.views.main.router.back();
      }
      // Default to closing the app
      return window.navigator.app.exitApp();
    }
  },
  computed: {
    isiOS() {
      return window.isiOS;
    }
  },
  created() {
    document.addEventListener('backbutton', this.handleBackButton);
    //document.addEventListener('deviceready', this.onDeviceReady, false);
  },
};
</script>
