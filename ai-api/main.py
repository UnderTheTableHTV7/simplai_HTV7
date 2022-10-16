from fastapi import FastAPI, Request, Body
# from ./simplify import simplify_text
from simplify import simplify_text
from simplify_cohere import simplify_text_cohere
from fastapi.middleware.cors import CORSMiddleware

app =  FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
async def root():
    return "."

@app.post("/simplify/")
def simplify(payload: dict = Body(...)):
    input_text = payload['input_text']
    return {"simplified_text": simplify_text(input_text)}

@app.post("/simplify_cohere/")
def simplify_cohere(payload: dict = Body(...)):
    input_text = payload['input_text']
    return {"simplified_text": simplify_text_cohere(input_text)}


@app.post("/simplify_nested/")
def simplify_nested(payload: dict = Body(...)):
    input_text = payload['input_text']
    if len(input_text.split(' ')) > 100:
        return {"simplified_text": simplify_text_cohere(input_text)}
    else:
        return {"simplified_text": simplify_text(input_text)}



# def init_webhooks(base_url):
#     # Update inbound traffic via APIs to use the public-facing ngrok URL
#     pass

# # pyngrok should only ever be installed or initialized in a dev environment when this flag is set
# from pyngrok import ngrok
# import sys
# from fastapi.logger import logger

# # Get the dev server port (defaults to 8000 for Uvicorn, can be overridden with `--port`
# # when starting the server
# port = sys.argv[sys.argv.index("--port") + 1] if "--port" in sys.argv else 8000

# # Open a ngrok tunnel to the dev server
# public_url = ngrok.connect(port).public_url
# # logger.info("ngrok tunnel \"{}\" -> \"http://127.0.0.1:{}\"".format(public_url, port))
# print(public_url)
# # Update any base URLs or webhooks to use the public ngrok URL
# # settings.BASE_URL = public_url
# init_webhooks(public_url)
