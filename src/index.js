import * as $ from 'jquery'
import { Post } from '@models/Post'
import './styles/styles.css'
import json from '@/assets/json'
import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'
import webpackLogo from './assets/webpack-logo'

const post = new Post('Webpack post title', webpackLogo)

$('pre').addClass('code').html(post.toString())

console.log(json, ':json')
console.log(xml, ':xml')
console.log(csv, ':csv')
