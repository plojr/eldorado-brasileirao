from flask import Blueprint, Response
import os

CONTEXT_PATH = os.environ.get("CONTEXT_PATH")
blueprint = Blueprint("home_route", __name__)

@blueprint.get(CONTEXT_PATH + "/")
def root():
    return Response("Bem vindo à API do Eldorado", status=200)

@blueprint.get(CONTEXT_PATH + "/home")
def home():
    return root()

@blueprint.get(CONTEXT_PATH + "/index")
def index():
    return root()
