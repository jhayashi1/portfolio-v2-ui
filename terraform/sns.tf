resource "aws_sns_topic" "cloudfront_kill_switch_topic" {
  name = "cloudfront-kill-switch"
}

resource "aws_sns_topic_subscription" "cloudfront_kill_switch_subscription" {
  topic_arn = aws_sns_topic.cloudfront_kill_switch_topic.arn
  protocol  = "lambda"
  endpoint  = aws_lambda_function.cloudfront_kill_switch_lambda.arn
}