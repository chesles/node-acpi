var net = require('net')

var defaults = {
  socket: '/var/run/acpid.socket'
}

function acpi(options) {
  options = options || {}

  var sockfile = options.socket || defaults.socket

  var sock = net.connect(sockfile)

  sock.on('data', function(d) {
    var parts = d.toString().split(/\s+/)
    sock.emit(parts[0], parts[1], parts[2], parts[3])
  })

  return sock
}

module.exports = acpi
