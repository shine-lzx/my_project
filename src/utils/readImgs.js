// 获取项目工程里的图片
let fs = require('fs')// 引用文件系统模块
// let image = require('imageinfo') // 引用imageinfo模块
// function readFileList (path, filesList) {
//   let files = fs.readdirSync(path)
//   files.forEach(function (itm, index) {
//     let stat = fs.statSync(path + itm)
//     if (stat.isDirectory()) {
//       // 递归读取文件
//       readFileList(path + itm + '/', filesList)
//     } else {
//       let obj = {}// 定义一个对象存放文件的路径和名字
//       obj.path = path// 路径
//       obj.filename = itm// 名字
//       filesList.push(obj)
//     }
//   })
// }
// let getFiles = {
//   // 获取文件夹下的所有文件
//   getFileList: function (path) {
//     let filesList = []
//     readFileList(path, filesList)
//     return filesList
//   },
//   // 获取文件夹下的所有图片
//   getImageFiles: function (path) {
//     let imageList = []
//     this.getFileList(path).forEach((item) => {
//       let ms = image(fs.readFileSync(item.path + item.filename))
//       ms.mimeType && (imageList.push(item.filename))
//     })
//     return imageList
//   }
// }

// export default getFiles.getImageFiles('../assets/images/')

export default function reading () {
  return fs.readFile('../assets/images/', (err, data) => {
    console.log(err)
    console.log(data)
  })
}