!function t(n,e,r){function i(s,a){if(!e[s]){if(!n[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=e[s]={exports:{}};n[s][0].call(u.exports,function(t){var e=n[s][1][t];return i(e?e:t)},u,u.exports,t,n,e,r)}return e[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t){!function(n){function e(){return[{name:n("#editorconfig input").val(),contents:n("#editorconfig textarea").val()}]}function r(t){n("#output [name=filename]").each(function(e,r){var o="",s=i.parseFromFiles(r.value,t);for(var a in s)o+=a+" = "+s[a]+"\n";n("#output pre").text(o)})}var i=t("editorconfig");n("textarea").on("input",function(){this.style.height="auto",this.style.height=this.scrollHeight+16+"px"}).trigger("input"),n("input, textarea").on("input",function(){r(e())}).trigger("input"),n(".demo-link").click(function(){return n("#editorconfig input").val(n(this).siblings("input").val()),n("#editorconfig textarea").val(n(this).siblings("pre").text()).trigger("input"),n.deck("go","demo"),!1})}(jQuery)},{editorconfig:2}],2:[function(t,n){function e(t,n){var e={matchBase:!0,dot:!0,noext:!0};return n=n.replace(/\*\*/g,"{*,**/**/**}"),h(t,n,e)}function r(t,n){var e=t,r=e,i=[];do i.push(f.join(r,n||".editorconfig")),e=r,r=f.dirname(e);while(r!=e);return i}function i(t,n){return"indent_style"in t&&"tab"===t.indent_style&&!("indent_size"in t)&&n.gte(new p(0,10))&&(t.indent_size="tab"),"indent_size"in t&&!("tab_width"in t)&&"tab"!==t.indent_size&&(t.tab_width=t.indent_size),"indent_size"in t&&"tab_width"in t&&"tab"===t.indent_size&&(t.indent_size=t.tab_width),t}function o(t){return t=t||{},t.version=new p(t.version||g.version),t}function s(t,n,r){var o={};return n.reverse().forEach(function(n){var r=f.dirname(n.name),i=n.contents;i.forEach(function(n){var i,s=n[0],a=n[1];if(s&&(i=-1===s.indexOf("/")?f.join(r,"**/"+s):0===s.indexOf("/")?f.join(r,s.substring(1)):f.join(r,s),e(t,i)))for(var c in a){var u=a[c];-1!==d.indexOf(c)&&(u=u.toLowerCase());try{u=JSON.parse(u)}catch(h){}o[c.toLowerCase()]=u}})}),i(o,r.version)}function a(t){for(var n=[],e=0;e<t.length&&(t[e].contents=l.parseString(t[e].contents),n.push(t[e]),!/^true$/i.test(t[e].contents[0][1].root));e++);return n}function c(t){var n=[];return t.forEach(function(t){u.existsSync(t)&&n.push({name:t,contents:u.readFileSync(t,"utf-8")})}),n}var u=t("fs"),f=t("path"),h=t("./lib/fnmatch"),l=t("./lib/ini"),p=t("./lib/version"),g=t("./package.json"),d=["end_of_line","indent_style","indent_size","insert_final_newline","trim_trailing_whitespace","charset"];n.exports.parseFromFiles=function(t,n,e){return t=f.resolve(t),e=o(e),s(t,a(n),e)},n.exports.parse=function(t,n){t=f.resolve(t),n=o(n);var e=r(f.dirname(t),n.config),i=c(e);return s(t,a(i),n)}},{"./lib/fnmatch":3,"./lib/ini":4,"./lib/version":5,"./package.json":8,fs:9,path:10}],3:[function(t,n){(function(e){!function(t,n,e,r){function i(t){return t.split("").reduce(function(t,n){return t[n]=!0,t},{})}function o(){var t=Object.getOwnPropertyDescriptor(String.prototype,"match"),n=t.value;t.value=function(t){return t instanceof u?t.match(this):n.call(this,t)},Object.defineProperty(String.prototype,t)}function s(t,n){return n=n||{},function(e){return c(e,t,n)}}function a(t,n){t=t||{},n=n||{};var e={};return Object.keys(n).forEach(function(t){e[t]=n[t]}),Object.keys(t).forEach(function(n){e[n]=t[n]}),e}function c(t,n,e){if("string"!=typeof n)throw new TypeError("glob pattern string required");return e||(e={}),e.nocomment||"#"!==n.charAt(0)?""===n.trim()?""===t:new u(n,e).match(t):!1}function u(t,n){if(!(this instanceof u))return new u(t,n,y);if("string"!=typeof t)throw new TypeError("glob pattern string required");n||(n={}),"win32"===r&&(t=t.split("\\").join("/"));var e=t+"\n"+x(n),i=c.cache.get(e);return i?i:(c.cache.set(e,this),this.options=n,this.set=[],this.pattern=t,this.regexp=null,this.negate=!1,this.comment=!1,this.empty=!1,void this.make())}function f(){if(!this._made){var t=this.pattern,n=this.options;if(!n.nocomment&&"#"===t.charAt(0))return void(this.comment=!0);if(!t)return void(this.empty=!0);this.parseNegate();var e=this.globSet=this.braceExpand();n.debug&&console.error(this.pattern,e),e=this.globParts=e.map(function(t){return t.split(S)}),n.debug&&console.error(this.pattern,e),e=e.map(function(t){return t.map(this.parse,this)},this),n.debug&&console.error(this.pattern,e),e=e.filter(function(t){return-1===t.indexOf(!1)}),n.debug&&console.error(this.pattern,e),this.set=e}}function h(){var t=this.pattern,n=!1,e=this.options,r=0;if(!e.nonegate){for(var i=0,o=t.length;o>i&&"!"===t.charAt(i);i++)n=!n,r++;r&&(this.pattern=t.substr(r)),this.negate=n}}function l(t,n){function e(){d.push(y),y=""}if(n=n||this.options,t="undefined"==typeof t?this.pattern:t,"undefined"==typeof t)throw new Error("undefined pattern");if(n.nobrace||!t.match(/\{.*\}/))return[t];var r=!1;if("{"!==t.charAt(0)){for(var i=null,o=0,s=t.length;s>o;o++){var a=t.charAt(o);if("\\"===a)r=!r;else if("{"===a&&!r){i=t.substr(0,o);break}}if(null===i)return[t];var c=l(t.substr(o),n);return c.map(function(t){return i+t})}var u=t.match(/^\{(-?[0-9]+)\.\.(-?[0-9]+)\}/);if(u){for(var f=l(t.substr(u[0].length),n),h=+u[1],p=+u[2],g=h>p?-1:1,d=[],o=h;o!=p+g;o+=g)for(var m=0,v=f.length;v>m;m++)d.push(o+f[m]);return d}var o=1,b=1,d=[],y="",r=!1;t:for(o=1,s=t.length;s>o;o++){var a=t.charAt(o);if(r)r=!1,y+="\\"+a;else switch(a){case"\\":r=!0;continue;case"{":b++,y+="{";continue;case"}":if(b--,0===b){e(),o++;break t}y+=a;continue;case",":1===b?e():y+=a;continue;default:y+=a;continue}}if(0!==b)return l("\\"+t,n);var f=l(t.substr(o),n),w=1===d.length;d=d.map(function(t){return l(t,n)}),d=d.reduce(function(t,n){return t.concat(n)}),w&&(d=d.map(function(t){return"{"+t+"}"}));for(var x=[],o=0,s=d.length;s>o;o++)for(var m=0,v=f.length;v>m;m++)x.push(d[o]+f[m]);return x}function p(t,n){function e(){if(o){switch(o){case"*":a+=_,c=!0;break;case"?":a+=k,c=!0;break;default:a+="\\"+o}o=!1}}var r=this.options;if(!r.noglobstar&&"**"===t)return w;if(""===t)return"";for(var i,o,s,a="",c=!!r.nocase,u=!1,f=[],h=!1,l=-1,p=-1,g="."===t.charAt(0)?"":r.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",d=0,v=t.length;v>d&&(s=t.charAt(d));d++)if(r.debug&&console.error("%s	%s %s %j",t,d,a,s),u&&A[s])a+="\\"+s,u=!1;else switch(s){case"/":return!1;case"\\":e(),u=!0;continue;case"?":case"*":case"+":case"@":case"!":if(r.debug&&console.error("%s	%s %s %j <-- stateChar",t,d,a,s),h){"!"===s&&d===p+1&&(s="^"),a+=s;continue}e(),o=s,r.noext&&e();continue;case"(":if(h){a+="(";continue}if(!o){a+="\\(";continue}i=o,f.push({type:i,start:d-1,reStart:a.length}),a+="!"===o?"(?:(?!":"(?:",o=!1;continue;case")":if(h||!f.length){a+="\\)";continue}switch(c=!0,a+=")",i=f.pop().type){case"!":a+="[^/]*?)";break;case"?":case"+":case"*":a+=i;case"@":}continue;case"|":if(h||!f.length||u){a+="\\|",u=!1;continue}a+="|";continue;case"[":if(e(),h){a+="\\"+s;continue}h=!0,p=d,l=a.length,a+=s;continue;case"]":if(d===p+1||!h){a+="\\"+s,u=!1;continue}c=!0,h=!1,a+=s;continue;default:e(),u?u=!1:!A[s]||"^"===s&&h||(a+="\\"),a+=s}if(h){var b=t.substr(p+1),y=this.parse(b,C);a=a.substr(0,l)+"\\["+y[0],c=c||y[1]}for(var x;x=f.pop();){var j=a.slice(x.reStart+3);j=j.replace(/((?:\\{2})*)(\\?)\|/g,function(t,n,e){return e||(e="\\"),n+n+e+"|"});var E="*"===x.type?_:"?"===x.type?k:"\\"+x.type;c=!0,a=a.slice(0,x.reStart)+E+"\\("+j}e(),u&&(a+="\\\\");var O=!1;switch(a.charAt(0)){case".":case"[":case"(":O=!0}if(""!==a&&c&&(a="(?=.)"+a),O&&(a=g+a),n===C)return[a,c];if(!c)return m(t);var S=r.nocase?"i":"",T=new RegExp("^"+a+"$",S);return T._glob=t,T._src=a,T}function g(){if(this.regexp||this.regexp===!1)return this.regexp;var t=this.set;if(!t.length)return this.regexp=!1;var n=this.options,e=n.noglobstar?_:n.dot?E:O,r=n.nocase?"i":"",i=t.map(function(t){return t.map(function(t){return t===w?e:"string"==typeof t?v(t):t._src}).join("\\/")}).join("|");i="^(?:"+i+")$",this.negate&&(i="^(?!"+i+").*$");try{return this.regexp=new RegExp(i,r)}catch(o){return this.regexp=!1}}function d(t,n){if(this.comment)return!1;if(this.empty)return""===t;if("/"===t&&n)return!0;var e=this.options;"win32"===r&&(t=t.split("\\").join("/")),t=t.split(S),e.debug&&console.error(this.pattern,"split",t);for(var i=this.set,o=0,s=i.length;s>o;o++){var a=i[o],c=this.matchOne(t,a,n);if(c)return e.flipNegate?!0:!this.negate}return e.flipNegate?!1:this.negate}function m(t){return t.replace(/\\(.)/g,"$1")}function v(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}e?e.exports=c:n.minimatch=c,t||(t=function(t){switch(t){case"sigmund":return function(t){return JSON.stringify(t)};case"path":return{basename:function(t){t=t.split(/[\/\\]/);var n=t.pop();return n||(n=t.pop()),n}};case"lru-cache":return function(){var t={},n=0;this.set=function(e,r){n++,n>=100&&(t={}),t[e]=r},this.get=function(n){return t[n]}}}}),c.Minimatch=u;var b=t("lru-cache"),y=c.cache=new b({max:100}),w=c.GLOBSTAR=u.GLOBSTAR={},x=t("sigmund"),j=t("path"),k="[^/]",_=k+"*?",E="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",O="(?:(?!(?:\\/|^)\\.).)*?",A=i("().*{}+?[]^$\\!"),S=/\/+/;c.monkeyPatch=o,c.filter=s,c.defaults=function(t){if(!t||!Object.keys(t).length)return c;var n=c,e=function(e,r,i){return n.minimatch(e,r,a(t,i))};return e.Minimatch=function(e,r){return new n.Minimatch(e,a(t,r))},e},u.defaults=function(t){return t&&Object.keys(t).length?c.defaults(t).Minimatch:u},u.prototype.make=f,u.prototype.parseNegate=h,c.braceExpand=function(t,n){return new u(t,n).braceExpand()},u.prototype.braceExpand=l,u.prototype.parse=p;var C={};c.makeRe=function(t,n){return new u(t,n||{}).makeRe()},u.prototype.makeRe=g,c.match=function(t,n,e){var r=new u(n,e);return t=t.filter(function(t){return r.match(t)}),e.nonull&&!t.length&&t.push(n),t},u.prototype.match=d,u.prototype.matchOne=function(t,n,e){var r=this.options;r.debug&&console.error("matchOne",{"this":this,file:t,pattern:n}),r.matchBase&&1===n.length&&(t=j.basename(t.join("/")).split("/")),r.debug&&console.error("matchOne",t.length,n.length);for(var i=0,o=0,s=t.length,a=n.length;s>i&&a>o;i++,o++){r.debug&&console.error("matchOne loop");var c=n[o],u=t[i];if(r.debug&&console.error(n,c,u),c===!1)return!1;if(c===w){r.debug&&console.error("GLOBSTAR",[n,c,u]);var f=i,h=o+1;if(h===a){for(r.debug&&console.error("** at the end");s>i;i++)if("."===t[i]||".."===t[i]||!r.dot&&"."===t[i].charAt(0))return!1;return!0}t:for(;s>f;){var l=t[f];if(r.debug&&console.error("\nglobstar while",t,f,n,h,l),this.matchOne(t.slice(f),n.slice(h),e))return r.debug&&console.error("globstar found match!",f,s,l),!0;if("."===l||".."===l||!r.dot&&"."===l.charAt(0)){r.debug&&console.error("dot detected!",t,f,n,h);break t}r.debug&&console.error("globstar swallow a segment, and continue"),f++}return e&&f===s?!0:!1}var p;if("string"==typeof c?(p=r.nocase?u.toLowerCase()===c.toLowerCase():u===c,r.debug&&console.error("string match",c,u,p)):(p=u.match(c),r.debug&&console.error("pattern match",c,u,p)),!p)return!1}if(i===s&&o===a)return!0;if(i===s)return e;if(o===a){var g=i===s-1&&""===t[i];return g}throw new Error("wtf?")}}("function"==typeof t?t:null,this,"object"==typeof n?n:null,"object"==typeof e?e.platform:"win32")}).call(this,t("1YiZ5S"))},{"1YiZ5S":11,"lru-cache":6,path:10,sigmund:7}],4:[function(t,n){function e(t){var n={},e=null,r=[[e,n]],o=t.split(/\r\n|\r|\n/);return o.forEach(function(t){var o;i.comment.test(t)||(i.param.test(t)?(o=t.match(i.param),n[o[1]]=o[2]):i.section.test(t)&&(o=t.match(i.section),e=o[1],n={},r.push([e,n])))}),r}var r=t("fs"),i={section:/^\s*\[(([^#;]|\\#|\\;)+)\]\s*([#;].*)?$/,param:/^\s*([\w\.\-\_]+)\s*[=:]\s*(.*?)\s*([#;].*)?$/,comment:/^\s*[#;].*$/};n.exports.parse=function(t,n){n&&r.readFile(t,"utf8",function(t,r){t?n(t):n(null,e(r))})},n.exports.parseSync=function(t){return e(r.readFileSync(t,"utf8"))},n.exports.parseString=e},{fs:9}],5:[function(t,n){function e(t){var n=arguments;this.components="string"==typeof t?t.split(".").map(function(t){return parseInt(t,10)}):Object.keys(arguments).map(function(t){return n[t]});var e=this.components.length;if(this.major=e?this.components[0]:0,this.minor=e>1?this.components[1]:0,this.build=e>2?this.components[2]:0,this.revision=e>3?this.components[3]:0,"string"==typeof t){var r=t.split("-");2===r.length&&(this.configuration=r[1])}}e.prototype={toString:function(){var t=this.components.join(".");return"undefined"!=typeof this.configuration&&(t+="-"+this.configuration),t},gte:function(t){return this.major<t.major?!1:this.minor<t.minor?!1:this.build<t.build?!1:this.revision<t.revision?!1:!0}},n.exports=e},{}],6:[function(t,n){!function(){function t(t,n){return Object.prototype.hasOwnProperty.call(t,n)}function e(){return 1}function r(n){function o(){if(!(s>=p))for(var t in h){if(s>=p)break;var n=h[t];u&&u(n.key,n.value),p-=n.length,delete f[n.key],delete h[t]}}if(!(this instanceof r))return new r(n);var s;"number"==typeof n&&(s=n,n={max:s}),s=n.max,n||(n={});var a=n.length||e;"function"!=typeof a&&(a=e),(!s||"number"!=typeof s||0>=s)&&(s=1/0);var c=n.maxAge||null,u=n.dispose,f=Object.create(null),h=Object.create(null),l=0,p=0,g=0;Object.defineProperty(this,"max",{set:function(t){(!t||"number"!=typeof t||0>=t)&&(t=1/0),s=t,p>s&&o()},get:function(){return s},enumerable:!0}),Object.defineProperty(this,"lengthCalculator",{set:function(t){if("function"!=typeof t){a=e,p=g;for(var n in f)f[n].length=1}else{a=t,p=0;for(var n in f)f[n].length=a(f[n].value),p+=f[n].length}p>s&&o()},get:function(){return a},enumerable:!0}),Object.defineProperty(this,"length",{get:function(){return p},enumerable:!0}),Object.defineProperty(this,"itemCount",{get:function(){return g},enumerable:!0}),this.reset=function(){if(u)for(var t in f)u(t,f[t].value);f={},h={},l=0,p=0,g=0},this.dump=function(){return f},this.set=function(n,e){if(t(f,n))return u&&u(n,f[n].value),c&&(f[n].now=Date.now()),f[n].value=e,this.get(n),!0;var r=a(e),d=c?Date.now():0,m=new i(n,e,l++,r,d);return m.length>s?(u&&u(n,e),!1):(p+=m.length,h[m.lu]=f[n]=m,g++,p>s&&o(),!0)},this.get=function(n){if(t(f,n)){var e=f[n];return c&&Date.now()-e.now>c?void this.del(n):(delete h[e.lu],e.lu=l++,h[e.lu]=e,e.value)}},this.del=function(n){if(t(f,n)){var e=f[n];u&&u(n,e.value),delete f[n],delete h[e.lu],p-=e.length,g--}}}function i(t,n,e,r,i){this.key=t,this.value=n,this.lu=e,this.length=r,this.now=i}"object"==typeof n&&n.exports?n.exports=r:this.LRUCache=r}()},{}],7:[function(t,n){function e(t,n){function e(t,s){return s>n||"function"==typeof t||"undefined"==typeof t?void 0:"object"!=typeof t||!t||t instanceof o?void(i+=t):void(-1===r.indexOf(t)&&s!==n&&(r.push(t),i+="{",Object.keys(t).forEach(function(n){if("_"!==n.charAt(0)){var r=typeof t[n];"function"!==r&&"undefined"!==r&&(i+=n,e(t[n],s+1))}})))}n=n||10;var r=[],i="",o=RegExp;return e(t,0),i}n.exports=e},{}],8:[function(t,n){n.exports={name:"editorconfig",version:"0.11.4",description:"EditorConfig File Locator and Interpreter for Node.js",keywords:["editorconfig","core"],main:"editorconfig.js",contributors:[{name:"Hong Xu",url:"topbug.net"},{name:"Jed Hunsaker",email:"jed.hunsaker[at]gmail.com"},{name:"Trey Hunner",url:"http://treyhunner.com"}],directories:{bin:"./bin",lib:"./lib"},scripts:{pretest:"cmake .",test:"ctest .","test-verbose":"ctest -VV --output-on-failure .",codepaint:"codepaint xform -e **/**.js"},repository:{type:"git",url:"git://github.com/editorconfig/editorconfig-core-js.git"},bugs:{url:"https://github.com/editorconfig/editorconfig-core-js/issues"},author:{name:"EditorConfig Team"},license:{type:"MIT",url:"http://editorconfig.mit-license.org/2012"},dependencies:{commander:"~1.1.1","lru-cache":"~2.0.0",sigmund:"~1.0.0"},bin:{editorconfig:"bin/editorconfig"},readme:"# EditorConfig JavaScript Core\n\n[![Build Status](https://travis-ci.org/editorconfig/editorconfig-core-js.png?branch=master)](https://travis-ci.org/editorconfig/editorconfig-core-js)\n\nThe EditorConfig JavaScript core will provide the same functionality as the\n[EditorConfig C Core][] and [EditorConfig Python Core][].\n\n\n## Installation\n\nYou need [node][] to use this package.\n\nTo install this package (system-wide):\n\n    $ npm install editorconfig\n\nTo install the package system-wide:\n\n    $ npm install -g editorconfig\n\n\n## Usage\n\nUsage as a Node library:\n\n    $ node\n    > var editorconfig = require('./editorconfig');\n    undefined\n    > editorconfig.parse('/home/zoidberg/humans/anatomy.md');\n    { charset: 'utf-8',\n        insert_final_newline: 'true',\n        end_of_line: 'lf',\n        tab_width: '8',\n        trim_trailing_whitespace: 'sometimes' }\n\n\nUsage as a command line tool:\n\n```\n$ ./bin/editorconfig\n\n    Usage: editorconfig [OPTIONS] FILEPATH1 [FILEPATH2 FILEPATH3 ...]\n\n    EditorConfig Node.js Core Version 0.11.4-development\n\n    FILEPATH can be a hyphen (-) if you want path(s) to be read from stdin.\n\n    Options:\n\n        -h, --help     output usage information\n        -V, --version  output the version number\n        -f <path>      Specify conf filename other than \".editorconfig\"\n        -b <version>   Specify version (used by devs to test compatibility)\n```\n\nExample:\n\n    $ ./bin/editorconfig /home/zoidberg/humans/anatomy.md\n    charset=utf-8\n    insert_final_newline=true\n    end_of_line=lf\n    tab_width=8\n    trim_trailing_whitespace=sometimes\n\n\n## Development\n\nTo install dependencies for this package run this in the package directory:\n\n    $ npm install\n\nNext, run:\n\n    $ npm link\n\nThe global editorconfig will now point to the files in your development\nrepository instead of a globally-installed version from npm. You can now use\neditorconfig directly to test your changes.\n\nIf you ever update from the central repository and there are errors, it might\nbe because you are missing some dependencies. If that happens, just run npm\nlink again to get the latest dependencies.\n\nTo test the command line interface:\n\n    $ editorconfig <filepath>\n\n\n# Testing\n\n[CMake][] must be installed to run the tests.\n\nTo run the tests:\n\n    $ npm test\n\nTo run the tests with increased verbosity (for debugging test failures):\n\n    $ npm run-script test-verbose\n\n[EditorConfig C Core]: https://github.com/editorconfig/editorconfig-core\n[EditorConfig Python Core]: https://github.com/editorconfig/editorconfig-core-py\n[node]: http://nodejs.org/\n[cmake]: http://www.cmake.org\n",readmeFilename:"README.md",homepage:"https://github.com/editorconfig/editorconfig-core-js",_id:"editorconfig@0.11.4",_from:"editorconfig@"}},{}],9:[function(){},{}],10:[function(t,n,e){(function(t){function n(t,n){for(var e=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),e++):e&&(t.splice(r,1),e--)}if(n)for(;e--;e)t.unshift("..");return t}function r(t,n){if(t.filter)return t.filter(n);for(var e=[],r=0;r<t.length;r++)n(t[r],r,t)&&e.push(t[r]);return e}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return i.exec(t).slice(1)};e.resolve=function(){for(var e="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,i="/"===s.charAt(0))}return e=n(r(e.split("/"),function(t){return!!t}),!i).join("/"),(i?"/":"")+e||"."},e.normalize=function(t){var i=e.isAbsolute(t),o="/"===s(t,-1);return t=n(r(t.split("/"),function(t){return!!t}),!i).join("/"),t||i||(t="."),t&&o&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,function(t){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var n=0;n<t.length&&""===t[n];n++);for(var e=t.length-1;e>=0&&""===t[e];e--);return n>e?[]:t.slice(n,e-n+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;s>c;c++)if(i[c]!==o[c]){a=c;break}for(var u=[],c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var n=o(t),e=n[0],r=n[1];return e||r?(r&&(r=r.substr(0,r.length-1)),e+r):"."},e.basename=function(t,n){var e=o(t)[2];return n&&e.substr(-1*n.length)===n&&(e=e.substr(0,e.length-n.length)),e},e.extname=function(t){return o(t)[3]};var s="b"==="ab".substr(-1)?function(t,n,e){return t.substr(n,e)}:function(t,n,e){return 0>n&&(n=t.length+n),t.substr(n,e)}}).call(this,t("1YiZ5S"))},{"1YiZ5S":11}],11:[function(t,n){function e(){}var r=n.exports={};r.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,n="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};if(n){var e=[];return window.addEventListener("message",function(t){var n=t.source;if((n===window||null===n)&&"process-tick"===t.data&&(t.stopPropagation(),e.length>0)){var r=e.shift();r()}},!0),function(t){e.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),r.title="browser",r.browser=!0,r.env={},r.argv=[],r.on=e,r.addListener=e,r.once=e,r.off=e,r.removeListener=e,r.removeAllListeners=e,r.emit=e,r.binding=function(){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(){throw new Error("process.chdir is not supported")}},{}]},{},[1]);