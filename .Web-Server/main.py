from flask import Flask, jsonify, request
from flask_cors import CORS
import string
import random
import db

# configuration
DEBUG = True
DEV = True

# instantiate the app
app = Flask(__name__)
CORS(app)
app.config.from_object(__name__)

security_key = "we4tgdrgf34tergdghhfj"

accounts = {
	'john' : { 'password' : '234rwef' },
}

dataB = db.DataBase()
storage = db.Storage()
storage.set('active', 0)

def res(res):
	return jsonify({ 'result' : res })


def CreateSession(user):
	session_id = ''.join(random.choice(string.ascii_lowercase) for i in range(30))
	session_code = ''.join(random.choice(string.ascii_lowercase) for i in range(20))
	struct = { 'user' : user, 'id' : session_id, 'code' : session_code }
	storage.set_session(session_id, struct)
	
	return struct

	
@app.route('/auth', methods=['POST', 'GET'])
def auth():
	if not DEV and security_key != request.args.get('key'):
		return "<h1>API KEY REQUIRED</h1>"
		
	user = request.args.get('login')
	pw = request.args.get('pass')
	
	result = dataB.CheckAuth(user, pw)
	if result:
		return res(result)
	
	session = CreateSession(user)
	data = { 'result': result, 'session' : session}
	return jsonify(data)
	
@app.route('/reg', methods=['POST', 'GET'])
def reg():
	if not DEV and security_key != request.args.get('key'):
		return "<h1>API KEY REQUIRED</h1>"
		
	return res(dataB.CreateAccount(request.args.get('user'), request.args.get('pass')))

@app.route('/check_session', methods=['POST', 'GET'])
def check_session():
	if not DEV and security_key != request.args.get('key'):
		return "<h1>API KEY REQUIRED</h1>"
		
	if not storage.get_session(request.args.get('session_id')):
		return res(1)
	
	return res(0)


@app.route('/logout', methods=['POST'])
def logout():
	if not DEV and security_key != request.args.get('key'):
		return "<h1>API KEY REQUIRED</h1>"
		
	storage.rm_session(request.args.get('session_id'))

	return ""
	


if __name__ == '__main__':
    app.run()
	
	
	
	
	
	
	


