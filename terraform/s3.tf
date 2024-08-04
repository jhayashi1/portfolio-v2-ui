resource "aws_s3_bucket" "cloudfront_bucket" {
  bucket = "portfolio-v2"
}

resource "aws_s3_bucket_public_access_block" "access_block" {
    bucket = aws_s3_bucket.cloudfront_bucket
    
    block_public_acls   = true
    block_public_policy = true
    ignore_public_acls  = true
    restrict_public_buckets = true
}

# S3 Bucket Policy to allow access only from CloudFront
resource "aws_s3_bucket_policy" "cloudfront_bucket_policy" {
  bucket = aws_s3_bucket.cloudfront_bucket.bucket

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity YOUR_OAI_ID"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::${aws_s3_bucket.cloudfront_bucket.bucket}/*"
    }
  ]
}
POLICY
}

# CloudFront Origin Access Identity
resource "aws_cloudfront_origin_access_identity" "cloudfront_oai" {
  comment = "Origin Access Identity for S3 bucket"
}

# Attach the CloudFront OAI to the bucket policy
resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.cloudfront_bucket.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect    = "Allow",
        Principal = {
          AWS = aws_cloudfront_origin_access_identity.cloudfront_oai.iam_arn
        },
        Action    = "s3:GetObject",
        Resource  = "${aws_s3_bucket.cloudfront_bucket.arn}/*"
      }
    ]
  })
}