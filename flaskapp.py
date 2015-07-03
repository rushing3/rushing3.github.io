from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('my_index.html')

@app.route('/fariha')
def fariha():
    return "Hey, Fariha! (:"

@app.route('/victor')
def victor():
    return render_template('victor.html')

@app.route('/user/<username>')
def show_user_profile(username):
    return 'User {}'.format(username)

@app.route('/post/<int:post_id>')
def show_post(post_id):
    return 'Post {}'.format(post_id)

@app.route('/projects/')
def projects():
    return 'Project page'

@app.route('/about')
@app.route('/about/<name>')
def about(name=None):
    return render_template('about.html', name=name)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        #do login
        pass
    else:
        #show login form
        pass

if __name__ == '__main__':
        app.run(debug=True)
