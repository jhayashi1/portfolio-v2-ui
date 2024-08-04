provider "aws" {
	region = "us-east-1"
}

data "aws_caller_identity" "current" {}

resource "aws_cloudfront_distribution" "cloudfront" {
    enabled             = true
    default_root_object = "index.html"
    price_class = "PriceClass_100"

    origin {
        domain_name = "portfolio-v2.s3.amazonaws.com"
        origin_id   = "portfolio-v2-origin-id"

        s3_origin_config {
            origin_access_identity = "origin-access-identity/cloudfront/EXAMPLE"
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
        cloudfront_default_certificate = true
    }
}