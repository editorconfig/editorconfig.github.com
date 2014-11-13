(function ($) {

  var editorconfig = require('editorconfig');

  function createFiles() {
    var configFiles = [], configSuffix = "/.editorconfig";
    $('.js-ec-demo-config').each(function () {
      var pathLength, configPath, form = $(this);
      configPath = form.find('[name="filename"]').val();
      pathLength = configPath.length - configSuffix.length;
      if (configPath.indexOf(configSuffix, pathLength) !== -1) {
        configFiles.push({
          name: configPath,
          contents: form.find('[name="file"]').val()
        });
      }
    });
    return configFiles;
  }

  // Resize textarea automatically
  $('textarea').on('input', function () {
    // Set textarea height
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 16 + 'px';
  }).trigger('input');

  function renderOutput(configFiles) {
    $('.js-ec-demo-output').each(function () {
      var output = "", config, key, filename;
      filename = $(this).find('[name="filename"]');
      config = editorconfig.parseFromFiles(filename.val(), configFiles);
      for (key in config) {
        if (config.hasOwnProperty(key)) {
          output += key + " = " + config[key] + "\n";
        }
      }
      $(this).find('pre').text(output);
    });
  }

  // Update output automatically
  $('input, textarea').on('input', function () {
    renderOutput(createFiles());
  }).trigger('input');

}(jQuery));
