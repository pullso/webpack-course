import * as $ from 'jquery'
import { Post } from '@models/Post'
import './styles/styles.css'
import './styles/styl.styl'
import './styles/sass.sass'
import './babel'
import json from '@/assets/json'
import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'
import webpackLogo from './assets/webpack-logo'

const post = new Post('Webpack post title', webpackLogo)

$('pre').addClass('code').html(post.toString())

console.log(json, ':json')
console.log(xml, ':xml')
console.log(csv, ':csv')

import('lodash').then(_=>{
  console.log(_.random(0,42,false), ':_.random(0,42,false)')
})
