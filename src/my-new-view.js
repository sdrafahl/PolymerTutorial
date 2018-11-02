<!-- Load the Polymer.Element base class -->
<link rel="import" href="../bower_components/polymer/polymer-element.html">

<dom-module id="my-new-view">
  <!-- Defines the element's style and local DOM -->
  <template>
    <style>
      :host {
        display: block;

        padding: 16px;
      }
    </style>

    <h1>New view</h1>
  </template>
  <script>
    // Your new element extends the Polymer.Element base class
    class MyNewView extends Polymer.Element {
      static get is() { return 'my-new-view'; }
    }
    //Now, register your new custom element so the browser can use it
    customElements.define(MyNewView.is, MyNewView);
  </script>
</dom-module>
