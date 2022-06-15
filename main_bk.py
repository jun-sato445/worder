from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def read_root():
    return {"Message": "Hello World"}


# @app.get("/items/{item_id}")
# async def read_item(item_id: int, q: str = None):
#     return {"item_id": item_id, "q": q}

@app.get("/countries/{country_name}")
async def country(country_name: int):
    return {"country_name": country_name}

@app.get("/menu/{table_id}")
async def table(table_id):
    return {"table_id": table_id}