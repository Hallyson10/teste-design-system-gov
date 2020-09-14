const fs = require('fs')
const path = require('path')
const dir = './dist/js/temp'
const files = fs.readdirSync('./src/js/components/')
const sass = require('node-sass')
const arquivo = ''
var Terser = require("terser");
var babel = require("@babel/core");

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist')
}
if (!fs.existsSync('./dist/js/')) {
  fs.mkdirSync('./dist/js')
}

files.forEach((file) => {
  
  componentName = file
  if (componentName) {
    jsMinify(componentName)
  }
})

async function jsMinify(componentName) {
  let miniJS = ''
  
  fs.readFile(`./dist/js/components/${componentName}`, 'utf8', (err, data) => {
    if (err) {
      return console.log('erro leitura',err)
    }
    let es6code=''
    miniJS = Terser.minify(data,{sourceMap: {
      filename: componentName,
      url: componentName+".map"
    }});

    let dist_output = path.resolve(__dirname, 'dist', 'js', 'components')
    dist_output += "/"
    dist_output += componentName.split('.')[0]
    dist_output += ".min.js"

    
    fs.writeFile(dist_output, miniJS.code, (err) => {
      if (err) {
        return console.log('erro escrita',err)
      }
      
    })

    fs.writeFile(dist_output+".map", miniJS.map, (err) => {
      if (err) {
        return console.log('erro escrita',err)
      }
      
    })
    
    
  })

  
}
