'use strict'
import generateHeader from './generateHeader.js'
import generateCatalog from './generateCatalog.js'
import generateFooter from './generateFooter.js'
import generateGoodsPage from './generateGoodsPage.js'
import {loadData} from './loadData.js'


generateHeader();
generateCatalog();
generateFooter();
generateGoodsPage();
loadData();
