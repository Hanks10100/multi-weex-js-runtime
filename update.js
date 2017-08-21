const fs = require('fs')
const semver = require('semver')
const child_process = require('child_process')
const pkg = require('./package.json')

function exec (command) {
  const tasks = Array.isArray(command) ? command : [command]
  let res = ''
  tasks.forEach(function (task) {
    console.log(' =>', task)
    res = child_process.execSync(task)
  })
  // console.log(' =>', green('done'), '\n')
  return res.toString()
}

const formerVersion = pkg.devDependencies['weex-js-runtime']
let targetVersion = process.argv[2]
let isLatest = false

if (semver.valid(targetVersion)) {

} else {
  targetVersion = exec(`npm view weex-js-runtime version`).trim()
  isLatest = true
}

console.log(formerVersion, targetVersion)

if (formerVersion === targetVersion) {
  // TODO: validate
  console.log('same')
  process.exit()
}

// [ '0.17.0-alpha4',
//   '0.19.1',
//   '0.19.2',
//   '0.19.16',
//   '0.20.5',
//   '0.20.6',
//   '0.20.9',
//   '0.21.7',
//   '0.21.8',
//   '0.21.9' ]

exec([
  `npm install weex-js-runtime@${targetVersion} -E`
])

const filePath = `v${semver.major(targetVersion)}.${semver.minor(targetVersion)}`

if (!fs.existsSync(filePath)) {
  fs.mkdirSync(filePath)
}

exec([
  `cp node_modules/weex-js-runtime/index.js ${filePath}/v${targetVersion}.js`,
  `cp node_modules/weex-js-runtime/index.min.js ${filePath}/v${targetVersion}.min.js`,
])

if (isLatest) {
  exec([
    `cp node_modules/weex-js-runtime/index.js ${filePath}/index.js`,
    `cp node_modules/weex-js-runtime/index.min.js ${filePath}/index.min.js`,
    `cp node_modules/weex-js-runtime/index.js index.js`,
    `cp node_modules/weex-js-runtime/index.min.js index.min.js`
  ])
}

exec([
  `git add -A`,
  `git commit -m "add v${targetVersion}"`
])
