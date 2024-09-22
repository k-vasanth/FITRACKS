from flask import Flask, render_template, url_for

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


if __name__=='__main__':
    app.run(debug=True)