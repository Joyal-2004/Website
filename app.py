from flask import Flask, render_template, request, redirect, url_for, flash
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.secret_key = 'komodo_hub_secret_key'

# Configure upload folder
UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure upload directory exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def allowed_file(filename):
  return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Routes
@app.route('/')
def index():
  return render_template('index.html')

@app.route('/about')
def about():
  return render_template('about.html')

@app.route('/features')
def features():
  return render_template('features.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
  if request.method == 'POST':
      # Process the form data
      name = request.form.get('name')
      email = request.form.get('email')
      subject = request.form.get('subject')
      message = request.form.get('message')
      inquiry_type = request.form.get('inquiry_type')
      
      # In a real application, you would save this to a database
      # and/or send an email notification
      
      # Flash a success message
      flash('Thank you for your message! We will get back to you soon.', 'success')
      
      # Redirect to avoid form resubmission
      return redirect(url_for('contact'))
  
  # For GET requests, just render the contact page
  return render_template('contact.html')

@app.route('/login')
def login():
  return render_template('login.html')

@app.route('/signup')
def signup():
  return render_template('signup.html')

@app.route('/forgot-password')
def forgot_password():
  return render_template('forgot_password.html')

@app.route('/resources')
def resources():
  return render_template('resources.html')

@app.route('/knowledge-base')
def knowledge_base():
  # Redirect to resources page with knowledge base section
  return redirect(url_for('resources') + '#knowledge-base')

@app.route('/learning-resources')
def learning_resources():
  return render_template('learning_resources.html')

@app.route('/conservation-news')
def conservation_news():
  # Redirect to resources page with conservation news section
  return redirect(url_for('resources') + '#conservation-news')

@app.route('/kids-games')
def kids_games():
    return render_template('kids_games.html')

@app.route('/komodo-wordle')
def komodo_wordle():
  return render_template('komodo_wordle.html')

@app.route('/komodo-quiz')
def komodo_quiz():
    return render_template('komodo_quiz.html')

@app.route('/quiz-answers')
def quiz_answers():
  return render_template('answers.html')

@app.route('/conservation-programs')
def conservation_programs():
  return render_template('conservation_programs.html')

@app.route('/schools-communities')
def schools_communities():
  return render_template('schools_communities.html')

@app.route('/reports-sightings', methods=['GET', 'POST'])
def reports_sightings():
    if request.method == 'POST':
        # Process form submission
        name = request.form.get('name')
        email = request.form.get('email')
        location = request.form.get('location')
        species = request.form.get('species')
        description = request.form.get('description')
        date = request.form.get('date')
        count = request.form.get('count', 1)
        
        # Handle file upload
        if 'photo' in request.files:
            photo = request.files['photo']
            if photo and allowed_file(photo.filename):
                filename = secure_filename(photo.filename)
                photo.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                # Here you would typically save the file path to a database
        
        # In a real application, you would save this data to a database
        flash('Thank you for your submission! Your sighting has been recorded.', 'success')
        return redirect(url_for('reports_sightings'))

    return render_template('reports_sightings.html')

@app.route('/privacy-policy')
def privacy_policy():
  return render_template('privacy_policy.html')

@app.route('/terms-of-service')
def terms_of_service():
  return render_template('terms_of_service.html')

@app.route('/pricing')
def pricing():
  return render_template('pricing.html')

@app.route('/donate')
def donate():
  return render_template('donate.html')

if __name__ == '__main__':
  app.run(debug=True)

