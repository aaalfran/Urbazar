const urldev = "http://localhost:3000/"
const urlprod = "http://134.209.215.193:3000/"

const data = {
    url: urldev,
    number: "3204d957986d.ngrok.io",
    prod : "134.209.215.193:3000",
    categoriesFilter: urlprod+"productos?filter[where][ID_Categoria]="
}

module.exports = data;