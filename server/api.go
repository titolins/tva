package main

import (
    "github.com/labstack/echo"
    "github.com/titolins/trancosovendasaluguel/server/controllers"
)

// API is a defined as struct bundle
// for api. Feel free to organize
// your app as you wish.
type API struct{}

// Bind attaches api routes
func (api *API) Bind(group *echo.Group) {
    group.GET("/v1/conf", api.ConfHandler)

    // houses
    group.GET("/houses", api.GetHousesHandler)
    group.GET("/houses/category", api.GetHousesByCategoryHandler)
    group.GET("/houses/featured", api.GetFeaturedHousesHandler)
}

// ConfHandler handle the app config, for example
func (api *API) ConfHandler(c echo.Context) error {
    app := c.Get("app").(*App)
    return c.JSON(200, app.Conf.Root)
}

func (api *API) GetHousesHandler(c echo.Context) error {
    return c.JSON(200, controllers.GetAllHouses())
}

func (api *API) GetHousesByCategoryHandler(c echo.Context) error {
    return c.JSON(200, controllers.GetCategoryHouses(c.Param("categoryId")))
}

func (api *API) GetFeaturedHousesHandler(c echo.Context) error {
    return c.JSON(200, controllers.GetFeaturedHouses(c.Param("categoryId")))
}
