import random
import json
from flask import Flask, jsonify, render_template, url_for

app = Flask(__name__, static_url_path='/static')

@app.route("/")
def Dashboard():
    return render_template('home.html')


@app.route("/Exercises")
def Exercises():
    return render_template('Exercises.html')


@app.route("/workout")
def workOut():
    return render_template('workOut.html')

@app.route('/load_component', methods=['POST'])
def load_component():
    components='quote_component'
    # random_component = random.choice(components)
    component_html = render_template(f"{components}.html")  # Replace with your template naming convention
    return jsonify({'component_html': component_html})

if __name__=='__main__':
    app.run(debug=True)