from flask import Flask, request, jsonify,json,abort,make_response
# from flask_cors import CORS
import mysql.connector as mysql
import uuid
import bcrypt


db = mysql.connect(
    host = "localhost",
	user = "root",
	passwd = "FullStack2020",
	database = "SafetyCenter"
)
# print(db)

app = Flask(__name__)
# CORS(app)


@app.route('/login', methods=['POST'])
def login():
	data = request.get_json()
	# return ""
	query = "select id,pass from Users where username = %s"
	values = (data['username'],)
	print(json.dumps(values,default=str))
	cursor = db.cursor()
	cursor.execute(query,values)
	record = cursor.fetchone()
	if not record:
		abort(401)
	user_id = record[0]
	hashed_pwd = record[1].encode('utf-8')
	if bcrypt.hashpw(data['pass'].encode('utf-8'),hashed_pwd) != hashed_pwd:
		abort(401)

	session_id = str(uuid.uuid4())
	query = "insert into Sessions (userId,sessionId) values (%s,%s) on duplicate key update sessionId=%s"
	values = (user_id, session_id,session_id)
	cursor.execute(query,values)
	db.commit()
	resp = make_response()
	resp.set_cookie("Session_id",session_id)
	return resp

@app.route('/signup', methods=['POST'])
def signup():
	data = request.get_json()
	hashpass = bcrypt.hashpw(data['pass'].encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
	values = (data['username'],hashpass)
	cursor = db.cursor()
	cursor.callproc('sp_NewUser', values)
	records = cursor.stored_results()
	cursor.close()
	db.commit()
	return {'Message': 'User signup successfully'}


	#role for do somethings about user
def check_login():
	session_id = request.cookies.get('Session_id')
	# print(session_id)
	if not session_id:
		abort(401)
	query = "select userId from Sessions where sessionId=%s"
	values = (str(session_id),)
	cursor = db.cursor()
	cursor.execute(query,values)
	record = cursor.fetchone()
	print(record[0])
	if not record:
		abort(401)
	return record[0]

@app.route('/user', methods=['GET'])
def who_login():
    session_id = request.cookies.get('Session_id')
    cursor = db.cursor()
    query = "select userId from Sessions where sessionId=%s"
    cursor.execute(query,(str(session_id),))
    record = cursor.fetchone()
    cursor.close()
    return str(record[0])


@app.route('/logout', methods=['POST'])
def logout():
	userid = check_login()
	cursor = db.cursor()
	# print(userid)
	cursor.callproc('sp_LogoutByUserId',(int(userid),))
	records = cursor.stored_results()
	cursor.close()
	db.commit()
	resp = make_response()
	resp.set_cookie("Session_id",'')
	return resp


@app.route('/posts/<id>', methods=['GET'])
def get_post_by_id(id):
		# logout_cookie()
		query = "select idPost,titlePost,bodyPost,createTimeUTC from Post where idPost = %s"
		value = (id,)
		cursor = db.cursor()
		cursor.execute(query,value)
		record = cursor.fetchone()
		header = ['idPost','titlePost', 'bodyPost','createTimeUTC']
		cursor.close()
		return json.dumps(dict(zip(header,record)), default=str)
		# cursor = db.cursor()
		# cursor.callproc('sp_getPostById', (id,))
		# records = cursor.stored_results()
		# header = ['idPost','titlePost', 'bodyPost','createTimeUTC']
		# result = cursor.fetchall()
		# data = []
		# for r in result:
		# 	data.append(dict(zip(header, r)))
		# cursor.close()
		# return json.dumps(data,default=str)

@app.route('/posts', methods=['GET','POST'])
def manage_cities():
	if request.method == 'GET':
		return get_all_posts()
	else:
		return create_new_post()


def create_new_post():
			userId = check_login()
			post = request.get_json()
			cursor = db.cursor()
			cursor.callproc('sp_NewPost', (post['titlePost'],post['bodyPost'],int(userId))
			records = cursor.stored_results()
			cursor.close()
			db.commit()
			return {'Message': 'Inserted successfully'}
			# post = request.get_json()
			# print(post)
			# query = "insert into Post(titlePost,bodyPost,createTimeUTC) values (%s,%s,UTC_TIMESTAMP);"
			# value = (post['titlePost'],post['bodyPost'])
			# cursor = db.cursor()
			# cursor.execute(query,value)
			# record = cursor.fetchone()
			# cursor.close()
			# db.commit()
			# return {'Message': 'Inserted successfully'}


def get_all_posts():
		query = "select idPost,titlePost,bodyPost,createTimeUTC from Post order by createTimeUTC desc"
		data = []
		cursor = db.cursor()
		cursor.execute(query)
		records = cursor.fetchall()
		header = ['idPost','titlePost', 'bodyPost','createTimeUTC']
		for r in records:
			data.append(dict(zip(header, r)))
		cursor.close()
		return json.dumps(data,default=str)
		# data = []
		# cursor = db.cursor()
		# cursor.callproc('sp_getAllPosts',(),)
		# records = cursor.stored_results()
		# header = ['idPost','titlePost', 'bodyPost','createTimeUTC','1']
		# content = {}
		# for r in records:
		# 	content = {'idPost': r, 'titlePost':r,'bodyPost':r,'createTimeUTC':r}
		# 	data.append(content)
		# cursor.close()
		# return json.dumps(data,default=str)



if __name__ == "__main__":
	app.run()




