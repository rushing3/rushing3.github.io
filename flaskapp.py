from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def base():
    return render_template('base.html')

@app.route('/resume')
def resume():
    return render_template('resume.html')

if __name__ == '__main__':
        app.run(debug=True)
