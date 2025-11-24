# Random Color Generator (FastAPI)

Small FastAPI app that returns a randomly generated hex color and renders a minimal UI showing the color. The app serves static assets and _Jinja2_ templates

## Features

- Generates a random hex color on each request
- Displays the color as the page background
- Click hex code to copy to clipboard
- Notification shown after successful copy
- Static assets served from /static (CSS, JS)

## Requirements

- Python 3.8+
- FastAPI
- Uvicorn
- Optional: pipenv or virtualenv for an isolated environment

Install dependencies:

```sh
pip install "fastapi[standard]"
```

## Run (development)

From project root:

```sh
fastapi dev main.py
```
or

```sh
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Open http://127.0.0.1:8000 in your browser.

## Project layout

- main.py — FastAPI app, mounts static files and renders templates
- templates/ — Jinja2 templates (base.html, color.html)
- static/
  - style.css — layout and custom styles
  - script.js — copy/notification behavior (if present)
- LICENSE.md — MIT license for the project
- README.md — this file

## How it works

- GET / generates a random 6-digit hex string (prefixed with `#`) and passes it to the template.
- Template sets the page background to the color and renders the hex code.
- Client-side JS copies the hex to clipboard, flashes the element, and displays a temporary notification.

## License

This project is released under the [MIT License](LICENSE.md)