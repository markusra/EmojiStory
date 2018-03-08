import pandas as pd
import json

with open ("test.json") as data_file:
  data = json.load(data_file)["users"]

df = pd.DataFrame(data)
df = df.T
df.to_csv("csv-example.csv", encoding="utf-8")