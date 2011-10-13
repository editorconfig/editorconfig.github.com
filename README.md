## What is Editorconfig?

Editorconfig is an initiative for solving the "my indentation style is different than yours" problem common amongst open source projects.  An Editorconfig file is used to define the recommended indentation styles for a group of files.  The goal of this project is to finalize the Editorconfig file format and create plugins to add Editorconfig support to popular text editors and IDEs.

## What's an Editorconfig file look like?

The Editorconfig file format is not yet finalized.  This is the definition for the current editconfig version pending finalization (v0.1).

Editorconfig files use an INI file format with sections names are globs matching filenames.  The property <code>indent_style</code> can be defined as "tab" or "space" to use hard tabs or spaces respectively.  If spaces are used (`indent_style=space`), the `tab_width` should contain the number of spaces to use for each indentation level.

### Example file

The below file specifies that all files with a `py` file extension (Python files) use 4 spaces for indentation and all files with a `js` file extension (JavaScript files) use tabs for indentation.

    [*.py]
    indent_style = space
    tab_width = 4

    [*.js]
    indent_style = tab

### Where are these files stored?

When a file is opened in a text editor with an Editorconfig plugin, a search is performed in the current directory and all parent directories for a file called `.editconfig`.  All found `.editconfig` files are searched for sections with filename globs matching the current filename.  If multiple `.editconfig` files have matching globs, the rules from the closer `.editconfig` file takes precedence.

In the above example, editors should use 4 spaces for indenting when editing the Python files in the project and hard tabs for indenting in JavaScript files.
