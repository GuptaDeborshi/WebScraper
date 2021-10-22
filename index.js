const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();
const port = 8000

const url = ('https://www.theguardian.com/international')
axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.fc-item__title', html).each(function(){
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles);
    })
    .catch(err => {
        console.log(err)
    })

app.listen(port, () => {
    console.log(`server running on PORT http://localhost:${port}`)
})