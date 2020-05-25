from flask import Flask, render_template
from flask_cors import CORS


def create_app(config_filename):
    app = Flask(__name__)
    app.config.from_object(config_filename)
    return app

if __name__ == '__main__':
    app = create_app("config")
    CORS(app)
    app.run(debug=True)
