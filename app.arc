@app
test-dlq2

@macros
dlq

@http
get /

@events
e
dlq

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
