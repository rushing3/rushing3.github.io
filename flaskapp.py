from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def cover():
    return render_template('cover.html')

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/about')
def about():
    return render_template('about.html')

# @app.route('/contact')
# def contact():
#     return render_template('contact.html')

@app.route('/aroundtheworld')
def blog():
    return render_template('aroundtheworld.html')

@app.route('/aroundtheworld1')
def blog1():
    return render_template('aroundtheworld1.html')

@app.route('/aroundtheworld/1')
def post1():
    return render_template('post1.html')

@app.route('/big_monkey')
def big_monkey():
    return render_template('big_monkey.html')

@app.route('/fariha')
def fariha():
    return "Hey, Fariha! (:"

@app.route('/victor')
def victor():
    return render_template('victor.html')

if __name__ == '__main__':
        app.run(debug=True)
