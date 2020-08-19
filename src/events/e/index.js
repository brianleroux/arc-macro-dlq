let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.events.subscribe(handler)

async function handler (event) {
  // chill for five
  await new Promise(res=> {
    setTimeout(res, 300000-3000)
  })
  // hit it
  await data.incr({
    table: 'counts', 
    key: 'events', 
    prop: 'hits' 
  }) 
}
