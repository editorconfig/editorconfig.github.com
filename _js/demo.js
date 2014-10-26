(function ($) {

  var editorconfig = require('editorconfig');

  function createFiles() {
    return [{
      name: $('#editorconfig input').val(),
      contents: $('#editorconfig textarea').val()
    }];
  }

  // Resize textarea automatically
  $('textarea').on('input', function () {
    // Set textarea height
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 16 + 'px';
  }).trigger('input');

  function renderOutput(configFiles) {
    $('#output [name=filename]').each(function (index, el) {
      var output = "", config, key;
      config = editorconfig.parseFromFiles(el.value, configFiles);
      for (key in config) {
        if (config.hasOwnProperty(key)) {
          output += key + " = " + config[key] + "\n";
        }
      }
      $('#output pre').text(output);
    });
  }

  // Update output automatically
  $('input, textarea').on('input', function () {
    renderOutput(createFiles());
  }).trigger('input');

  $('.demo-link').click(function () {
    $('#editorconfig input').val($(this).siblings('input').val());
    $('#editorconfig textarea')
      .val($(this).siblings('pre').text())
      .trigger('input');
    $.deck('go', 'demo');
    return false;
  });

}(jQuery));
