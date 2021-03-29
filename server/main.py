from flask import Flask, jsonify, request
from flask_cors import CORS

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
CORS(app)
app.config.from_object(__name__)

security_key = "we4tgdrgf34tergdghhfj"

accounts = {
	'john' : { 'password' : '234rwef' },
}

def ReturnResult(res):
	return jsonify({ 'result' : res })

	
@app.route('/auth', methods=['POST', 'GET'])
def test():
	if security_key != request.args.get('key'):
		return "<h1>API KEY REQUIRED</h1>"
	user = request.args.get('login')
	pw = request.args.get('pass')
	
	if not user in accounts:
		return ReturnResult(1)
	
	if pw != accounts[user]['password']:
		return ReturnResult(2)
		
	return ReturnResult(0)
	
@app.route('/reg', methods=['POST', 'GET'])
def reg():
	if security_key != request.args.get('key'):
		return "<h1>API KEY REQUIRED</h1>"
	
	user = request.args.get('user')
	
	if not user or not request.args.get('email'):
		return ReturnResult(3)	
	
	if user in accounts:
		return ReturnResult(2)
		
	accounts[user] = { 'password' : request.args.get('pass'), 'email' : request.args.get('mail') }
		
	return ReturnResult(0)

if __name__ == '__main__':
    app.run()