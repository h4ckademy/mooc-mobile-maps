var app = {
  inicio: function() {
    this.iniciaFastClick();
  },

  iniciaFastClick: function () {
    FastClick.attach(document.body);
  }
};

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    app.inicio();
  }, false);
}
