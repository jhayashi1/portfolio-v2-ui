provider "aws" {
	region = "us-east-1"

    default_tags {
        tags = {
            Name = "portfolio-v2"
            git_url = "https://github.com/jhayashi1/portfolio-v2-ui"
        }
    }
}

data "aws_caller_identity" "current" {}

resource "aws_cloudfront_origin_access_identity" "cloudfront_oai" {
  comment = "Origin Access Identity for S3 bucket"
}

resource "aws_cloudfront_distribution" "cloudfront" {
    enabled             = true
    default_root_object = "index.html"
    price_class = "PriceClass_100"
    aliases = [ "www.jaredhayashi.com", "jaredhayashi.com" ]

    origin {
        domain_name = aws_s3_bucket.cloudfront_bucket.bucket_regional_domain_name
        origin_id   = "portfolio-v2-origin-id"

        s3_origin_config {
            origin_access_identity = aws_cloudfront_origin_access_identity.cloudfront_oai.cloudfront_access_identity_path
        }
    }

    default_cache_behavior {
        allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
        cached_methods   = ["GET", "HEAD"]
        target_origin_id = "portfolio-v2-origin-id"

        forwarded_values {
            cookies {
                forward = "none"
            }
            query_string = true
            headers = ["Origin"]
        }

        viewer_protocol_policy = "redirect-to-https"
    }

    custom_error_response {
        error_code         = 403
        response_code      = 200
        response_page_path = "/index.html"
    }

    custom_error_response {
        error_code         = 404
        response_code      = 200
        response_page_path = "/index.html"
    }

    restrictions {
        geo_restriction {
            restriction_type = "none"
        }
    }

    viewer_certificate {
        acm_certificate_arn = aws_acm_certificate.main_cert.arn
        cloudfront_default_certificate = false
        ssl_support_method = "sni-only"
    }
}

resource "aws_cloudfront_origin_access_identity" "identity" {
    comment = "porfolio-v2"
}