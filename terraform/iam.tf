resource "aws_iam_role" "cloudfront_kill_switch_role" {
  name = "cloudfront-kill-switch-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action    = "sts:AssumeRole"
        Effect    = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy" "cloudfront_kill_switch_policy" {
  name   = "cloudfront-kill-switch-policy"
  role   = aws_iam_role.cloudfront_kill_switch_role.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Effect   = "Allow"
        Resource = "*"
      },
      {
        Action = [
          "cloudfront:UpdateDistribution",
          "cloudfront:GetDistribution",
          "cloudfront:GetDistributionConfig"
        ]
        Effect   = "Allow"
        Resource = "*"
      }
    ]
  })
}