<template>
  <f7-page>
    <f7-navbar sliding title="Home"></f7-navbar>
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Distinctio est aliquam officiis quaerat placeat, cum explicabo magni
      soluta totam maxime autem minima accusamus eos suscipit dignissimos
      corporis modi voluptatum fugiat!
    </f7-block>
    <div class="test">
      <h1>Apache Cordova</h1>
      <div id="deviceready" class="blink">
          <p class="event listening">Connecting to Device</p>
          <p class="event received">Device is Ready</p>
      </div>
      <div v-if="$root.$data.dbCreated">
        Database created!
      </div>
    </div>
  </f7-page>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'Hello World'
    };
  }
};
</script>
