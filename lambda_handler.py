from app import app
import aws_wsgi

def handler(event, context):
    return aws_wsgi.response(app, event, context)
