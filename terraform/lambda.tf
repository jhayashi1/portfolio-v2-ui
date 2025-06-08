resource "aws_lambda_function" "cloudfront_kill_switch_lambda" {
  filename         = "switch.zip"
  function_name    = "cloudfront-kill-switch"
  handler          = "index.handler"
  runtime          = "nodejs20.x"
  role             = aws_iam_role.cloudfront_kill_switch_role.arn
  source_code_hash = filebase64sha256("switch.zip")
  environment {
    variables = {
      CLOUDFRONT_DISTRIBUTION_ID = aws_cloudfront_distribution.cloudfront.id
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

resource "aws_lambda_permission" "api_can_invoke_usage_lambda" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.usage.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "arn:aws:execute-api:us-east-1:${data.aws_caller_identity.current.account_id}:${aws_apigatewayv2_api.api.id}*"
}

resource "aws_lambda_function" "usage" {
  function_name = "portfolio-v2-usage"
  handler       = "index.handler"

  memory_size = "256"
  timeout     = "5"
  runtime     = "nodejs22.x"
  role        = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:role/cloudfront-kill-switch-role" // todo

  filename         = "api.zip"
  source_code_hash = filebase64sha256("api.zip")

  # environment {
  #   variables = {
  #   }
  # }
}