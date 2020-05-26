from flask import Flask, request, jsonify,json
from flask_cors import CORS
import mysql.connector as mysql

db = mysql.connect(
	host = "localhost",
	user = "root",
	passwd = "FullStack2020",
	database = "SafetyCenter"
)
# print(db)

app = Flask(__name__)
CORS(app)

@app.route('/posts/<id>', methods=['GET'])
def get_post_by_id(id):
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
			post = request.get_json()
			cursor = db.cursor()
			cursor.callproc('sp_NewPost', (post['titlePost'],post['bodyPost']))
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
	app.run(port=5000,debug = True)