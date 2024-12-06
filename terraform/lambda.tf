resource "aws_lambda_function" "cloudfront_kill_switch_lambda" {
  filename         = "lambda.zip"
  function_name    = cloudfront-kill-switch
  handler          = "index.handler"
  runtime          = "nodejs20.x"
  role             = aws_iam_role.cloudfront_kill_switch_role.arn
  source_code_hash = filebase64sha256("lambda.zip")
  environment {
    variables = {
      CLOUDFRONT_DISTRIBUTION_ID = aws_cloudfront_distribution.cloudfront.DistributionId
    }
  }
}

resource "aws_lambda_permission" "allow_sns_invoke" {
  statement_id  = "AllowSNSInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.cloudfront_kill_switch_lambda.function_name
  principal     = "sns.amazonaws.com"
  source_arn    = aws_sns_topic.cloudfront_kill_switch_topic.arn
}