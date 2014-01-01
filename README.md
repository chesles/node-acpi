# node-acpi

This is a simple wrapper around `net.connect` that listens for events from
acpid and emits them for further processing.

## example

```javascript
var acpi = require('acpi')

var client = acpi({socket: '/var/run/acpid.socket'})
client.on('battery', function(battery) {
  console.log('battery acpi event on %s', battery)
})

client.on('ac_adapter', function(adapter) {
  console.log('ac_adapter acpi event on %s', adapter)
})
```
