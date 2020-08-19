let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function http (req) {

  if (req.requestContext.http.method === 'POST') {
    for (let i = 0; i < 10; i++) { 
      let tasks = []
      for (let j = 0; j < 210; j++) {
        tasks.push(arc.events.publish({ name: 'e', payload: {ts: Date.now()} }) )
      }
      await Promise.all(tasks)
    }
    return { statusCode: 302, headers: { location: '/' }}
  }

  // display count
  let eventCount = await data.get({table: 'counts', key: 'events', prop: 'hits' }) 
  //let queueCount = await data.get({table: 'counts', key: 'queues', prop: 'hits' }) 

  return {
    statusCode: 200,
    headers: { 'content-type': 'text/html; charset=utf8' },
    body: `
      <style>
        button {
          font-size: larger;
        }
      </style>
      <form action=/ method=post>
        <button>hit me</button>
      </form>
      <pre>${ JSON.stringify(eventCount, null, 2 ) }</pre>
    `
  }
}
