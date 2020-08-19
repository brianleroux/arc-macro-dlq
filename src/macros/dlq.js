module.exports = function dlq(arc, cfn) {
  cfn.Resources.E.Properties.DeadLetterQueue = {
    TargetArn: {Ref: 'DlqTopic'},
    Type: 'SNS'
  } 
  cfn.Resources.E.Properties.Tracing = 'Active'
  return cfn
}
