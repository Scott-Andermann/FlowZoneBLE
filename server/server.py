from flask import Flask, request, Response
from flask_cors import cross_origin
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

@app.route('/')
@cross_origin()
def home():
    response_body = {"message": "Hello World"}
    return response_body

@app.route('/email')
@cross_origin()
def index():
    msg = Message('Hello from the other side!', sender=app.config.get("MAIL_USERNAME"), recipients = ['scottandermann@gmail.com'])
    msg.body = "Hey Paul, sending you this email from my Flask app, lmk if it works"
    mail.send(msg)
    return "Message sent!"