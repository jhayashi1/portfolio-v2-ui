resource "aws_route53_zone" "main_zone" {
  name = "jaredhayashi.com"
}

resource "aws_route53_record" "website_record" {
  zone_id = aws_route53_zone.main_zone.zone_id
  name    = "www.jaredhayashi.com"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cloudfront.domain_name
    zone_id                = aws_cloudfront_distribution.cloudfront.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "website_record2" {
  zone_id = aws_route53_zone.main_zone.zone_id
  name    = "jaredhayashi.com"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cloudfront.domain_name
    zone_id                = aws_cloudfront_distribution.cloudfront.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_acm_certificate" "main_cert" {
  domain_name       = "www.jaredhayashi.com"
  validation_method = "DNS"

  subject_alternative_names = ["jaredhayashi.com"]
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.main_cert.domain_validation_options : dvo.domain_name => {
      name  = dvo.resource_record_name
      type  = dvo.resource_record_type
      value = dvo.resource_record_value
    }
  }

  zone_id = aws_route53_zone.main_zone.zone_id
  name    = each.value.name
  type    = each.value.type
  records = [each.value.value]
  ttl     = 300
}