package main

import (
    //"github.com/labstack/echo"
)

type House struct {
    Name string
    Category string
    Description string
    Features []string
    Featured bool
}

func buildDevData() []House {
    return []House{
        House{ Name: "Casa 1",
               Category: "1",
               Description: "descricao casa",
               Features: []string{ "wifi",
                                   "Ar condicionado" },
               Featured: true },
        House{ Name: "Casa 2",
               Category: "1",
               Description: "descricao casa",
               Features: []string{ "wifi",
                                   "Ar condicionado" },
               Featured: true },
    }

}

func GetAllHouses() []House {
    // get's all houses
    return buildDevData()
}

func GetCategoryHouses(cId string) []House {
    // get's houses by their category (sales, rent, etc.)
    return buildDevData()
}

func GetFeaturedHouses(cId string) []House {
    // method for getting featured houses for display at the main page
    // requires a category id, considering that we won't be needing all
    // featured houses at once
    return buildDevData()
}

