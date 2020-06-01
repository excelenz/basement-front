from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

def create_app(config_filename):

    app.config.from_object(config_filename)
    
    from app import api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    from Model import db
    db.init_app(app)
    return app

@app.route("/home")
def welcome():
    print("ASdasdasdas")
    return "ASdasdasdas"

if __name__ == "__main__":
    app = create_app("config")
    CORS(app)
    app.run(debug=True)