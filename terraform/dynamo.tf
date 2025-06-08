resource "aws_dynamodb_table" "usage_sessions" {
  billing_mode = "PAY_PER_REQUEST"
  name         = "portfolio-usage-sessions"
  hash_key     = "sessionId"

  attribute {
    name = "sessionId"
    type = "S"
  }
}

resource "aws_dynamodb_table" "usage_pages" {
  billing_mode = "PAY_PER_REQUEST"
  name         = "portfolio-usage-pages"
  hash_key     = "sessionId"
  range_key    = "ts"

  attribute {
    name = "sessionId"
    type = "S"
  }

  attribute {
    name = "ts"
    type = "N"
  }
}