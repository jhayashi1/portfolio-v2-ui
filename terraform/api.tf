resource "aws_apigatewayv2_api" "api" {
  name          = "portfolio-api"
  protocol_type = "HTTP"

  cors_configuration {
    allow_headers = ["*"]
    allow_methods = ["GET", "POST"]
    allow_origins = ["https://jaredhayashi.com"]
  }
}

resource "aws_apigatewayv2_stage" "stage" {
  api_id      = aws_apigatewayv2_api.api.id
  auto_deploy = true
  name        = "portfolio-api-stage"
}

resource "aws_apigatewayv2_domain_name" "domain" {
  domain_name = "api.jaredhayashi.com"

  domain_name_configuration {
    certificate_arn = aws_acm_certificate.api_cert.arn
    endpoint_type   = "REGIONAL"
    security_policy = "TLS_1_2"
  }
}

resource "aws_apigatewayv2_api_mapping" "mapping" {
  api_id      = aws_apigatewayv2_api.api.id
  domain_name = aws_apigatewayv2_domain_name.domain.id
  stage       = aws_apigatewayv2_stage.stage.id
}

### Usage API endpoints ###

resource "aws_apigatewayv2_integration" "usage" {
  api_id                 = aws_apigatewayv2_api.api.id
  integration_method     = "POST"
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.usage.invoke_arn
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "usage_post" {
  api_id             = aws_apigatewayv2_api.api.id
  route_key          = "POST /usage"
  target             = "integrations/${aws_apigatewayv2_integration.usage.id}"
}