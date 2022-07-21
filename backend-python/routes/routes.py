import home_route
import partida_route
from flask import Flask

app = Flask(__name__)

app.register_blueprint(home_route.blueprint)
app.register_blueprint(partida_route.blueprint)