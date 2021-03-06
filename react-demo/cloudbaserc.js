module.exports = {
  envId: '{{envId}}',
  functionRoot: 'functions',
  functions: [
    {
      name: 'custom-login',
      config: {
        timeout: 5,
        envVariables: {},
        runtime: "Nodejs10.15",
        // 内存 128
        memorySize: 128,
      }
    },
    {
      name: 'base64',
      config: {
        timeout: 5,
        envVariables: {},
        runtime: "Nodejs10.15",
        // 内存 128
        memorySize: 128,
      }
    }
  ]
}
