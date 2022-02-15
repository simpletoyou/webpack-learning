/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-02-11 10:15:49
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-02-14 14:13:03
 */

const getData = require('./js/api');
import { sum, square} from "./js/utils"

import './js/login'
import './js/lg'

console.log(sum(4,5))
console.log(square(7))

console.log(getData())