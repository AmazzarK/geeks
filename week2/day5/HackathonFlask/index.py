from flask import Flask, render_template, request, redirect, flash, url_for
from models.my_model import (
    db,
    get_all_games, create_game, get_game_by_id,
    update_game, delete_game,
    get_reviews_for_game, add_review
)

app = Flask(__name__)
app.secret_key = "here_is_my_secret_key_pass_pass"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///gaming.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize SQLAlchemy with the Flask app
db.init_app(app)

# Create tables if they don't exist
with app.app_context():
    db.create_all()

@app.route("/")
def index():
    games = get_all_games()
    return render_template("index.html", games=games)

@app.route("/games/<int:game_id>")
def game_details(game_id):
    game = get_game_by_id(game_id)
    if not game:
        flash("Game not found!", "error")
        return redirect(url_for('index'))
    
    reviews = get_reviews_for_game(game_id)
    return render_template("details.html", game=game, reviews=reviews)

@app.route("/create", methods=["GET", "POST"])
def create():
    if request.method == "POST":
        title = request.form["title"]
        release_year = request.form["release_year"]
        genre = request.form["genre"]
        platform = request.form["platform"]
        image_url = request.form.get("image_url")  # Optional

        if create_game(title, release_year, genre, platform, image_url):
            flash("Game added successfully!", "success")
            return redirect("/")
        else:
            flash("Error adding game!", "error")
    
    return render_template("create.html")

@app.route("/games/<int:game_id>/edit", methods=["GET", "POST"])
def edit_game(game_id):
    game = get_game_by_id(game_id)
    if not game:
        flash("Game not found!", "error")
        return redirect(url_for('index'))
    
    if request.method == "POST":
        title = request.form["title"]
        release_year = request.form["release_year"]
        genre = request.form["genre"]
        platform = request.form["platform"]
        image_url = request.form.get("image_url")  # Optional

        if update_game(game_id, title, release_year, genre, platform, image_url):
            flash("Game updated successfully!", "success")
            return redirect(url_for('game_details', game_id=game_id))
        else:
            flash("Error updating game!", "error")
    
    return render_template("edit.html", game=game)

@app.route("/games/<int:game_id>/delete", methods=["POST"])
def delete_game_route(game_id):
    if delete_game(game_id):
        flash("Game deleted successfully!", "success")
    else:
        flash("Error deleting game!", "error")
    
    return redirect(url_for('index'))

@app.route("/games/<int:game_id>/reviews", methods=["POST"])
def add_review_route(game_id):
    reviewer_name = request.form["reviewer_name"]
    comment = request.form["comment"]
    rating = request.form["rating"]

    if add_review(game_id, reviewer_name, comment, rating):
        flash("Review added successfully!", "success")
    else:
        flash("Error adding review!", "error")
    
    return redirect(url_for('game_details', game_id=game_id))

if __name__ == "__main__":
    app.run(debug=True)