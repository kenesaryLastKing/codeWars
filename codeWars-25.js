//Nodejs package.json
//Node applications require a file named package.json on the root of the project.

//You can create this file manually or have the command npm init to assist you in this process.

//The fields name and version are mandatory. But there a lot of other fields that you can include:
//Solution:
const configuration = {
  name: 'your-pack-name',
  description: '',
  version: '1.0.0',
  devDependencies: {
    'coffee-script': '~1.6.3',
  },
}
