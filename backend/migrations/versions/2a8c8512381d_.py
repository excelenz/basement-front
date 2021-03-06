"""empty message

Revision ID: 2a8c8512381d
Revises: 9292eb5aa16c
Create Date: 2020-06-29 15:24:12.676932

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2a8c8512381d'
down_revision = '9292eb5aa16c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('telegram_messages',
    sa.Column('message_id', sa.Integer(), nullable=False),
    sa.Column('chat_id', sa.Integer(), nullable=True),
    sa.Column('chat_title', sa.String(length=240), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('first_name', sa.String(length=240), nullable=True),
    sa.Column('username', sa.String(length=240), nullable=True),
    sa.Column('date', sa.DateTime(), nullable=True),
    sa.Column('text', sa.String(length=300), nullable=True),
    sa.PrimaryKeyConstraint('message_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('telegram_messages')
    # ### end Alembic commands ###
