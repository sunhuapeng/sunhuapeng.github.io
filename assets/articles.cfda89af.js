import{g as t}from"./index.70f65eb9.js";const e={state:{articles:[]},getters:{getArticles:t=>t.articles,getTags:t=>{let e=[];return t.articles.forEach((t=>{e.push(...t.tags),e=[...new Set(e)]})),e}},actions:{async setArticles({commit:e,state:s}){e("articles",[...await t()])}},mutations:{articles(t,e){t.articles=e}}};export{e as articles};