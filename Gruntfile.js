module.exports = function(grunt) {
  
  //Configuration
  grunt.initConfig({
    sass: {                              
      dist: {                             
        options: {                        
          style: "expanded"
        },
        files: {                         
          "style.css": "style.scss"
        }
      }
    },
    watch: {
      scripts: {
          files: ["**/*.scss"],
          tasks: ["sass"],
          options: {
              spawn: false,
          },
      }
  }
  });

  //Load plugins
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  //Register tasks
  grunt.registerTask("default", ["sass", "watch"]);
};