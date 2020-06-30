from flask import request
from flask_restful import Resource
from Model import db, herolo, heroloSchema
import datetime

entries_schema = heroloSchema(many=True)
entry_schema = heroloSchema()

class HeroloResource(Resource):

    def get(self):
        entries = herolo.query.all()
        entries = entries_schema.dump(entries).data
        return {'status': 'success', 'data': entries}, 200

    def post(self):
        json_data = request.get_json(force=True)
        if not json_data:
               return {'message': 'No input data provided'}, 400

        data, errors = entry_schema.load(json_data)
        if errors:
            return errors, 422
        entry = herolo.query.filter_by(message_id=data['message_id']).first()
        if entry:
            return {'message': 'Entry already exists'}, 400
        entry = herolo(
            message_id=json_data['message_id'],

            sender_id=json_data['chat_id'],


            chat_title=json_data['chat_title'],
            user_id=json_data['user_id'],
            first_name=json_data['first_name'],
            username =json_data['username'],
            date=datetime.datetime.now(),
            text=json_data['text']
            )

        db.session.add(entry)
        db.session.commit()

        result = entry_schema.dump(entry).data

        return { "status": 'success', 'data': result }, 201

    def put(self):
        json_data = request.get_json(force=True)
        if not json_data:
               return {'message': 'No input data provided'}, 400
        data, errors = entry_schema.load(json_data)
        if errors:
            return errors, 422
        entry = herolo.query.filter_by(id=data['id']).first()
        if not entry:
            return {'message': 'Entry does not exist'}, 400
        entry.message_id = data['message_id']
        entry.chat_id = data['chat_id']
        entry.chat_title = data['chat_title']
        entry.user_id = data['user_id']
        entry.first_name = data['first_name']
        entry.username = data['username']
        entry.date = data['date']
        entry.text = data['text']

        db.session.commit()

        result = entry_schema.dump(entry).data

        return { "status": 'success', 'data': result }, 204
