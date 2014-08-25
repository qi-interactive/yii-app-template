module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			files: {
				options: {
				},
				expand: true,
				cwd: 'less',
				src: ['**/*.less', '!base/*.less', '!imports/**/*.less', '../protected/modules/portalModules/**/*.less', '../protected/widgets/**/*.less'],
				dest: 'css/',
				ext: '.css'
			}
		},

		watch: {
			protected: {
				files: ['*'],
				options: {
					interrupt: true ,
					livereload: true, 
				},
			},
		},

		cssmin: { 
			minify: {
				expand: true,
				cwd: 'css/',
				src: ['*.css', '!*.min.css'],
				dest: 'css/',
				ext: '.min.css' 
			}
		},
				/*
				uglify: {
					dist: {
						preserveComments: false,
						files: {
							'dist/behaviors.min.js': ['dist/behaviors.js']
						}
					}
				},
				*/
				autoprefixer: {
					run: {
						src: ['css/*.css', '!css/*.min.css'], 
					}
				}


			});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('dist', ['autoprefixer:run', 'uglify:dist', 'cssmin:minify']);

};