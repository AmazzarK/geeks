import requests
import psycopg2
import random

def connect():
    return psycopg2.connect(
        dbname="countries_DB",
        user="postgres",
        password="123456",
        host="localhost",
        port="5432"
    )

def add_country(name, capital, flag, subregion, population):
    conn = connect()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO country (name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s)",
        (name, capital, flag, subregion, population)
    )
    conn.commit()
    conn.close()
    print(f"Added {name} to the database.")

def fetch_countries():
    url_api = "https://restcountries.com/v3.1/all"
    response = requests.get(url_api)
    if response.status_code == 200:
        return response.json()
    else:
        print("Error fetching data from API.")
        return []

def main():
    countries_info = fetch_countries()
    if len(countries_info) < 10:
        print("Not enough countries to sample.")
        return

    random_list = random.sample(countries_info, 10)

    for country in random_list:
        name = country.get("name", {}).get("common", "Unknown")
        capital = country.get("capital", [None])[0] if country.get("capital") else None
        flag = country.get("flags", {}).get("png", None)
        subregion = country.get("subregion", None)
        population = country.get("population", 0)
        add_country(name, capital, flag, subregion, population)

if __name__ == "__main__":
    main()