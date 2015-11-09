if (!window.console) { // fuck IE 8 and 9 for not having a console
  var noOp = function () {}
  console = {
    log: noOp,
    warn: noOp,
    error: noOp
  }
}
