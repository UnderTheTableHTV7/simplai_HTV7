from fastapi import FastAPI
# from ./simplify import simplify_text
from simplify import simplify_text
from simplify_cohere import simplify_text_cohere

app =  FastAPI()

@app.get("/")
async def root():
    return "."

@app.post("/simplify/")
def simplify(input_text: str):
    return {"simplified_text": simplify_text(input_text)}

@app.post("/simplify_cohere/")
def simplify_cohere(input_text: str):
    return {"simplified_text": simplify_text_cohere(input_text)}


@app.post("/simplify_nested/")
def simplify_nested(input_text: str):
    return {"simplified_text": simplify_text(simplify_text_cohere(input_text))}
