from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from scapy.all import *

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/home')
async def root():
    return {"Hello" : "World"}

@app.post("/upload")
async def root(file: UploadFile):
    return {"file": file.filename}

# Append additional code

