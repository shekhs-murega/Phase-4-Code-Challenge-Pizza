# Phase-4-Code-Challenge-Pizza

![python version](https://img.shields.io/badge/python-3.10.12-blue.svg)
![Flask version](https://img.shields.io/badge/flask-2.3.3-red.svg)
![Flask-RESTX version](https://img.shields.io/badge/Flask_RESTX-1.1.0-cyan.svg)
![Pytest version](https://img.shields.io/badge/pytest-7.4.2-white.svg)
[![license](https://img.shields.io/badge/license-%20MIT%20-green.svg)](./LICENSE)
![Gunicorn version](https://img.shields.io/badge/gunicorn-21.2.0-orange.svg)

This is a project creating a FLASK API for a Pizza Restaurant domain.

Running the Flask server and using Postman to make requests
Models. You need to create the following relationships:

- A Restaurant has many Pizzas through RestaurantPizza
- A Pizza has many Restaurants through RestaurantPizza
- A RestaurantPizza belongs to a Restaurant and belongs to a Pizza

![img.png](images/img.png)

### Validations

Add validations to the RestaurantPizza model:

- Must have a price between 1 and 30

Add validations to Restaurant Model:

- must have a name less than 50 words in length
- must have a unique name

### Routes

- Set up the following routes. Make sure to return JSON data in the format specified along with the appropriate HTTP verb.
- GET /restaurantsLinks to an external site.
- Return JSON data in the format below:

# SET UP & CONFIGURATION

## VIRTUAL ENVIRONMENT

1. Create virtual environment
   - `pip install pipenv`
   - `pipenv install Flask`

2. Install and start react
   -`npm install`
    
## CREATE $ CONFIGURE FLASK APP

1. In app.py.
2. from flask import Flask
3. app = Flask(**name**)
4. app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///app.db'
5. app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
6. app.json.compact = False
7. import app to routes module to instantiate app and use it
8. link db form models to to app
9. e.t.c

## CREATE FLASK DB

1. Run:
   - `pipenv install flask-migrate `
2. In `app.py`.
   - from flask_migrate import Migrate
   - migrate = Migrate(app, db)
   - db.init_app(app)
3. Run to create database:
   - `flask db init `
   - `flask db migrate -m "Initial migration"`
   - `flask db upgrade`
5. Add requirements.txt file
   - `pipenv run pip freeze > requirements.txt`
6. Add items to requirements file
   - `pip install 'dependency' e.g. gunicorn`
   - `pip freeze> requirements.txt`
7. Setup RESTX for documentation
   - run `pip install flask-restx`
   - from flask_restx import Resource, Api
     - api = Api(app) # same way to initialize api but this time, it is coming from restx and not restful
   - on the routes:
     - from flask_restx import namespace

# RUN THE APPLICATION
Start the flask application:
```
flask run
```

Start the react application
```
npm start
```
## Author & License

Authored by [Shekinah Murega](https://github.com/shekhs-murega).

Licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.

