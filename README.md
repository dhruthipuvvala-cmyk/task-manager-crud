
# Task Manager CRUD Application

## Project Description

This is a full-stack CRUD (Create, Read, Update, Delete) application built using **React**, **Django REST Framework**, and **MySQL**. It allows users to create, view, update, and delete tasks through a simple user interface.

## Technologies Used

- React.js
- Django
- Django REST Framework
- MySQL
- Axios
- Git
- GitHub

## Features

- Add a new task
- View all tasks
- Update existing tasks
- Delete tasks
- Store data in MySQL database

## Project Structure

```
taskmanager project
│
├── backend/
├── frontend/
└── README.md
```

## Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

## API Endpoint

```
http://127.0.0.1:8000/api/tasks/
```

## Author

Akshaya Puvvala