terraform {
    backend "s3" {
        bucket = "terraform-state"
        acl = "bucket-owner-full-control"
        encrypt = true
        region = "us-east-1"
        key = "portfolio"
    }
}