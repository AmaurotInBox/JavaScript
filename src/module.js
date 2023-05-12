console.log('Module!')

async function start() {
  return await Promise.resolve('promise')
}

start().then(console.log)