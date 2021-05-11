import sqlite3



class Storage:
	def __init__(self):
		self.data = {}
		self.sessions = {}
		
	def set(self, key, value):
		self.data[key] = value
	
	def get(self, key):
		if key in self.data:
			return self.data[key]
		return None
		
	def set_session(self, key, value):
		self.sessions[key] = value
		
	def get_session(self, key):
		if key in self.sessions:
			return self.sessions[key]
		return None
		
	def rm_session(self, key):
		if key in self.sessions:
			del self.sessions[key]
			return True
		return False		


class DataBase:
	def __init__(self):
		self.accounts = {}
		self.currentUsers = 0
		
		self.connection = sqlite3.connect('database.db')
		self.InitTables()
		
		
	def InitTables(self):
		for row in self.connection.execute('SELECT * FROM main.accounts ORDER BY id'):
			self.accounts[row[1]] = {'id' : row[0], 'pass' : row[2]}
			
	
	def SaveTables(self):
		pass
		
	
	def CheckAuth(self, userName, password):
		if not userName in self.accounts:
			return 1
			
		if not userName or not password:
			return 2
	
		if self.accounts[userName]['pass'] != password:
			return 3

		return 0		
	
	def CreateAccount(self, userName, password):
		if userName in self.accounts:
			return 1
			
		if not userName:
			return 2
			
		if not password:
			return 3
			
		id = len(self.accounts)+1
		self.accounts[userName] = {'id' : id, 'pass' : password}	
		
		con = sqlite3.connect('database.db')
		sql = "INSERT INTO main.accounts (id, username, password) VALUES(%d, '%s', '%s');" % (id, userName, password)
		con.execute(sql)
		con.commit()
		con.close()
		
		return 0
	
		
		
