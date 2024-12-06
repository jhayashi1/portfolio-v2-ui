resource "aws_cloudwatch_metric_alarm" "cloudfront_requests_alarm" {
  alarm_name          = "CloudFrontRequestsAlarm"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = 1
  metric_name         = "Requests"
  namespace           = "AWS/CloudFront"
  period              = 300
  statistic           = "Sum"
  threshold           = 1000
  alarm_description   = "Alarm triggered when CloudFront requests exceed threshold"
  dimensions = {
    DistributionId = aws_cloudfront_distribution.cloudfront.id
  }
  alarm_actions = [aws_sns_topic.cloudfront_kill_switch_topic.arn]
  treat_missing_data = "notBreaching"
}