import serverless_wsgi
from app import app

def handler(event, context):
    """
    AWS Lambda handler function for Flask WSGI application
    Works with both API Gateway and Lambda Function URLs
    """
    return serverless_wsgi.handle_request(app, event, context)
