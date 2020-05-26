from flask import Flask
from marshmallow import Schema, fields, pre_load, validate
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy


ma = Marshmallow()
db = SQLAlchemy()


class Entry(db.Model):
    __tablename__ = 'entries'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    address = db.Column(db.String(240))
    phone = db.Column(db.String(20))
    org_id = db.Column(db.Integer, db.ForeignKey('organisations.id', ondelete='SET NULL'))
    pic = db.Column(db.String(300))

    def __init__(self, name, address, phone, org_id, pic):
        self.name = name
        self.address = address
        self.phone = phone
        self.org_id = org_id
        self.pic = pic

class Organisation(db.Model):
    __tablename__ = 'organisations'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=True, nullable=False)
    address = db.Column(db.String(240))
    phone = db.Column(db.String(20))
    pic = db.Column(db.String(300))

    def __init__(self, name, address, phone, pic):
        self.name = name
        self.address = address
        self.phone = phone
        self.pic = pic

class EntrySchema(ma.Schema):
    id = fields.Integer()
    name = fields.String(required=True)
    address = fields.String()
    phone = fields.String()
    org_id = fields.Integer()
    pic = fields.String()

class OrganisationSchema(ma.Schema):
    id = fields.Integer()
    name = fields.String(required=True)
    address = fields.String()
    phone = fields.String()
    pic = fields.String()
