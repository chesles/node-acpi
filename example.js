var acpi = require('./')

var client = acpi({socket: '/var/run/acpid.socket'})
client.on('battery', function(battery) {
  console.log('battery acpi event on %s', battery)
})

client.on('ac_adapter', function(adapter) {
  console.log('ac_adapter acpi event on %s', adapter)
})
