from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

# Database Models
class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    release_year = db.Column(db.Integer, nullable=False)
    genre = db.Column(db.String(50), nullable=False)
    platform = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    image_url = db.Column(db.String(200))
    
    reviews = db.relationship('Review', backref='game', lazy=True, cascade='all, delete-orphan')

class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey('game.id'), nullable=False)
    reviewer_name = db.Column(db.String(100), nullable=False)
    comment = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# CRUD Functions for Games
def get_all_games():
    return Game.query.order_by(Game.release_year.desc()).all()

def get_game_by_id(game_id):
    return Game.query.get(game_id)

def create_game(title, release_year, genre, platform, image_url=None):
    try:
        game = Game(
            title=title,
            release_year=int(release_year),
            genre=genre,
            platform=platform,
            image_url=image_url
        )
        db.session.add(game)
        db.session.commit()
        return True
    except Exception as e:
        print(f"Error creating game: {e}")
        return False

def update_game(game_id, title, release_year, genre, platform, image_url=None):
    game = Game.query.get(game_id)
    if not game:
        return False
    try:
        game.title = title
        game.release_year = int(release_year)
        game.genre = genre
        game.platform = platform
        game.image_url = image_url
        db.session.commit()
        return True
    except Exception as e:
        print(f"Error updating game: {e}")
        return False

def delete_game(game_id):
    game = Game.query.get(game_id)
    if not game:
        return False
    try:
        db.session.delete(game)
        db.session.commit()
        return True
    except Exception as e:
        print(f"Error deleting game: {e}")
        return False

# Review Functions
def get_reviews_for_game(game_id):
    return Review.query.filter_by(game_id=game_id).order_by(Review.created_at.desc()).all()

def add_review(game_id, reviewer_name, comment, rating):
    try:
        review = Review(
            game_id=game_id,
            reviewer_name=reviewer_name,
            comment=comment,
            rating=int(rating)
        )
        db.session.add(review)
        db.session.commit()
        return True
    except Exception as e:
        print(f"Error adding review: {e}")
        return False