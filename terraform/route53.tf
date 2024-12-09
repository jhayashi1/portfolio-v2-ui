resource "aws_route53_zone" "main_zone" {
  name = "jaredhayashi.com"
}

# resource "aws_route53_record" "website_record" {
#   zone_id = aws_route53_zone.main_zone.zone_id
#   name    = "www.jaredhayashi.com"
#   type    = "A"

#   alias {
#     name                   = aws_cloudfront_distribution.cloudfront.domain_name
#     zone_id                = aws_cloudfront_distribution.cloudfront.hosted_zone_id
#     evaluate_target_health = false
#   }
# }

# resource "aws_route53_record" "website_record2" {
#   zone_id = aws_route53_zone.main_zone.zone_id
#   name    = "jaredhayashi.com"
#   type    = "A"

#   alias {
#     name                   = aws_cloudfront_distribution.cloudfront.domain_name
#     zone_id                = aws_cloudfront_distribution.cloudfront.hosted_zone_id
#     evaluate_target_health = false
#   }
# }

resource "aws_acm_certificate" "main_cert" {
  domain_name       = "jaredhayashi.com"
  validation_method = "DNS"

  subject_alternative_names = ["www.jaredhayashi.com"]
}

resource "aws_route53_record" "main_cert_validation_records" {
  for_each = {
    for dvo in aws_acm_certificate.main_cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.main_zone.zone_id
}

resource "aws_acm_certificate_validation" "main_cert_validation" {
  certificate_arn         = aws_acm_certificate.main_cert.arn
  validation_record_fqdns = [for record in aws_route53_record.main_cert_validation_records : record.fqdn]
}