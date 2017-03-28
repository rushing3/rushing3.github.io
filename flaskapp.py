from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def base():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/resume')
def resume():
    return render_template('resume.html')

if __name__ == '__main__':
        app.run(debug=True)
