const path = require('path')
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/photo', express.static(path.join(__dirname, 'photo')))

app.get('/album', (req, res) => {
  const photoList = []

  photoList.push({
    title: 'title1',
    author: 'author1',
    photos: ['photo/2014042218480341632.jpg', 'photo/2014042218480441633.jpg', 'photo/2014042218480441634.jpg']
  })
  photoList.push({
    title: 'title2',
    author: 'author2',
    photos: ['photo/2014042218480441635.jpg', 'photo/2014042218480541636.jpg', 'photo/2014042218480541637.jpg']
  })
  photoList.push({
    title: 'title3',
    author: 'author3',
    photos: ['photo/2014042218480641640.jpg', 'photo/2014042218480641641.jpg', 'photo/2014042218480641642.jpg', 'photo/2014042218480741643.jpg']
  })
  photoList.push({
    title: 'title4',
    author: 'author4',
    photos: ['photo/2014042218480741644.jpg', 'photo/2014042218480741645.jpg', 'photo/2014042218480841646.jpg']
  })
  photoList.push({
    title: 'title5',
    author: 'author56',
    photos: ['photo/2014042218480941650.jpg', 'photo/2014042218480941651.jpg', 'photo/2014042218481041652.jpg']
  })

  res.send(JSON.stringify(photoList))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
