from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/connected_api', methods=['POST'])
def method_name():

  data = request.get_json()
  print(data)
  return jsonify({'message':'api connected success'})

if __name__ == "__main__":
  app.run(debug=True)