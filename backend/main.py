from flask import Flask, render_template, request, flash, make_response, jsonify
from flask_cors import CORS, cross_origin
import tensorflow as tf
from summary_maker import make_summary
from token_maker import generate_token


server = Flask(__name__, template_folder="./public", static_folder="./public")
CORS(server)
server.uploads_dir = "uploads"


@server.route("/", methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def home():

    return "404 Unauthorized access"


@server.route("/getSummary", methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def get_summary():
    if request.method == "POST":
        summary = make_summary(request.json["text"])
        res = make_response(jsonify({"message": summary}), 200)
        return res

    return "404 Unauthorized access"


@server.route("/getTokens", methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def get_tokens():
    if request.method == "POST":
        tokens = generate_token(request.json["text"])
        res = jsonify({"message": tokens}, 200)
        return res

    return "404 Unauthorized access"


server.run(host="0.0.0.0", port=8080)

