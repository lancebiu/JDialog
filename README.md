# JDialog

jDialog is a jQuery plugin for modal dialog. By using this plugin, You
can create interesting dialogs easily. It works in all modern browsers.
Tested with jQuery 2.2+, file size is under 1KB, MIT Licensed.

## Usage

First include the plugin file

```html
<link rel="stylesheet" href="path/to/jdialog.min.css">
<script src="path/to/jdialog.min.js"><script>
```

Then, define a dialog and a button to trigger it

```html
<button data-toggle="JDialog" data-target="dialog">CLICK ME</button>

<div class="jDialog" id="dialog">
    // your dialog code here

</div>
```

Finally, init your dialog.

```javascript
$("#dialog").jDialog({
    skinClassName: 'demo',        // add your custom class to the dialog
    allowOverlay: true            // whether to show overlay, default true
    animationType: 'fade-in',     // select how to animate the dialog
                                  // try 'fade-in', 'sticky-up', 'slide-in' and 'flip'
});
```

Done!
