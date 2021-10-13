'use strict';

var vue = require('vue');

var MyButton = {
  mame: 'MyButton',
  data: function () {
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">click me {{count}}</button>'
};

var script = {
    name: "SfcButton",
  };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("button", null, "sfc 666"))
}

script.render = render;
script.__file = "src/SfcButton.vue";

MyButton.install = app => app.component('MyButton', MyButton);

script.install = app => app.component('SfcButton', script); // 组件库


const Element = {
  MyButton,
  SfcButton: script,
  install: app => {
    app.use(MyButton);
    app.use(script);
  }
};

module.exports = Element;
