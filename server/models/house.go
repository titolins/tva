package models

type Content struct {
    Name string
    Description string
    Features []string
}

type TranslatableContent struct {
    PT Content
    EN Content
}

type House struct {
    Category string
    Featured bool
    Capacity int
    Content TranslatableContent
}


