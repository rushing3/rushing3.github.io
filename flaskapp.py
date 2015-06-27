from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hey, Fariha! (:'

@app.route('/fariha')
def fariha():
    return "You're purdy. How was breaking fast?"

if __name__ == '__main__':
        app.run(debug=True)
