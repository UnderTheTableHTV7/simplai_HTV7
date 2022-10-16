from fastapi import FastAPI
# from ./simplify import simplify_text
from simplify import simplify_text

app =  FastAPI()

@app.get("/")
async def root():
    return "."

@app.post("/simplify/")
def simplify(input_text: str):
    return {"simplified_text": simplify_text(input_text)}