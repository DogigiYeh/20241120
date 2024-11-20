import axios from 'axios'
import * as cheerio from 'cheerio';

(async () => {
  try {
    const { data } = await axios.get('http://wdaweb.github.io/')
    const $ = cheerio.load(data)
    // console.log($('#content').text())
    const courses = []
    $('#fe .card-title').each(function () {
      courses.push($(this).text().trim())
    })
    console.log(courses)
  } catch (error) {
    console.error(error)
  }
})()
