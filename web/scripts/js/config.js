var des = '../build/',
    src = '../src/',
    vsrc = 'vendor/';




var versionCtrl = Date.parse(new Date().toISOString()),
    environment = process.env.NODE_ENV || 'development';


module.exports = {
    src: src,
    des: des,
    vsrc: vsrc,

    env: {dist: environment === 'production',
          dev: environment === 'development'},

    banner: '/* <%=pkg.title || pkr.name %> |' + '<%=pkg.homepage ? " " + pkg.homepage : "" %> | v' + '<%=pkg.version %><%="\\n"%>' + '<%= currentDate %>' + ' */' + '<%="\\n"%>',

    js: {
        config: src + 'scripts/js/config.js',
        requireJsSrc: src + 'scripts/js/index.js',
        jsSrc: src + 'scripts/js/*.js',
        localTempDest: des + 'scripts/',
        devScripts: des + 'scripts/*.js',
        jshint: {
            jshintSrc: src + 'scripts/**/*.js'
        },


        options: {
            local: {
                mainConfigFile: src + 'scripts/js/config.js',
                skipDirOptimize: true,
                preserveLicenseComments: false,
                generateSourceMaps: false,
                optimize: 'uglify2',
                enforceDefine: true,
                appDir: src + 'scripts/js/',
                baseUrl: './',
                dir: src + 'build/scripts/js/',
                wrap: {
                    start: '<%= banner %>',
                    end: ''
                }

            },


            dist: {
                mainConfigFile: src + 'scripts/js/config.js',
                skipDirOptimize: true,
                preserveLicenseComments: false,
                generateSourceMaps: true,
                optimize: 'uglify2',
                appDir: src + 'scripts/js/',
                baseUrl: './',
                dir: des + 'scripts',
                wrap: {
                    start: '<%= banner %>',
                    end: ''
                }

            },

            globalJavascript: [
                vsrc + 'requirejs/require.js',
                vsrc + 'modernizer/modernizer.js',
                vsrc + 'scripts/js/config.js',
                vsrc + 'picturefill/picturefill.js',
                vsrc + 'underscore/underscore.js',
                vsrc + 'domReady/domReady.js'
            ],

            globaljsLocalDest: src + 'scripts/',
            globaljsDest: des + 'scripts/'

        }// end of options
    },// end of js object

    spriteSmith:{
        src: src + 'img/icons/*.png',
        cssDest: des + 'css/sprites/',
        localCssDest: src + 'styles/sass/sprites/'

    },
    libsass: {
        src:  des + 'styles/sass/**/*.scss',
        dest:  src + 'styles/css/',
        localDest: des + 'css/',
        processDest: des + 'styles/*.css',
        sassconfigLocal: {
            imagePath: 'img/',
            outputstyle: 'expanded'
        },

        sassconfigDist: {
            imagePath:  'images/',
            outPutStyle: 'compressed',
            outFiles: des + 'css/main.css'
        }

    }

};