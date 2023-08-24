import{_ as c,E,o,b as r,w as n,k as s,J as C,a as p,p as F,m as y,d,c as B,U as i}from"./chunks/framework.50faa213.js";const t=a=>(F("data-v-9bafdd6a"),a=a(),y(),a),h={class:"card-header"},u=t(()=>s("span",null,"我是头部",-1)),b=t(()=>s("div",null,"我是内容",-1)),m="always",_={__name:"card-1",setup(a){return(e,D)=>{const l=E("el-button"),A=E("p-card");return o(),r(A,{shadow:m},{header:n(()=>[s("div",h,[u,C(l,{class:"button",text:""},{default:n(()=>[p("Operation button")]),_:1})])]),content:n(()=>[b]),_:1})}}},g=c(_,[["__scopeId","data-v-9bafdd6a"]]),v=s("h1",{id:"card-卡片组件",tabindex:"-1"},[p("Card 卡片组件 "),s("a",{class:"header-anchor",href:"#card-卡片组件","aria-label":'Permalink to "Card 卡片组件"'},"​")],-1),x=s("h2",{id:"基本使用",tabindex:"-1"},[p("基本使用 "),s("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1),f=i('<h2 id="card-组件-api" tabindex="-1">Card 组件 API <a class="header-anchor" href="#card-组件-api" aria-label="Permalink to &quot;Card 组件 API&quot;">​</a></h2><h3 id="card-attributes-属性" tabindex="-1">Card Attributes 属性 <a class="header-anchor" href="#card-attributes-属性" aria-label="Permalink to &quot;Card Attributes 属性&quot;">​</a></h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><h3 id="card-methods-方法" tabindex="-1">Card Methods 方法 <a class="header-anchor" href="#card-methods-方法" aria-label="Permalink to &quot;Card Methods 方法&quot;">​</a></h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table><h3 id="card-events-事件" tabindex="-1">Card Events 事件 <a class="header-anchor" href="#card-events-事件" aria-label="Permalink to &quot;Card Events 事件&quot;">​</a></h3><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th><th>返回值</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table><h3 id="card-exposes-抛出" tabindex="-1">Card Exposes 抛出 <a class="header-anchor" href="#card-exposes-抛出" aria-label="Permalink to &quot;Card Exposes 抛出&quot;">​</a></h3><table><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table><h3 id="card-slots-插槽" tabindex="-1">Card Slots 插槽 <a class="header-anchor" href="#card-slots-插槽" aria-label="Permalink to &quot;Card Slots 插槽&quot;">​</a></h3><table><thead><tr><th>插槽名</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table>',11),k=JSON.parse('{"title":"Card 卡片组件","description":"","frontmatter":{"layout":"doc","layoutClass":"doc-layout"},"headers":[],"relativePath":"components/card.md","filePath":"components/card.md","lastUpdated":1688456667000}'),q={name:"components/card.md"},S=d({...q,setup(a){return(e,D)=>{const l=E("demo-preview");return o(),B("div",null,[v,x,C(l,{title:"基本使用",description:"",code:"%3Ctemplate%3E%0D%0A%20%20%3Cp-card%20:shadow=%22cardShadow%22%3E%0D%0A%20%20%20%20%3Ctemplate%20#header%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20class=%22card-header%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%3E%E6%88%91%E6%98%AF%E5%A4%B4%E9%83%A8%3C/span%3E%0D%0A%20%20%20%20%20%20%20%20%3Cel-button%20class=%22button%22%20text%3EOperation%20button%3C/el-button%3E%0D%0A%20%20%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%3C/template%3E%0D%0A%0D%0A%20%20%20%20%3Ctemplate%20#content%3E%0D%0A%20%20%20%20%20%20%3Cdiv%3E%E6%88%91%E6%98%AF%E5%86%85%E5%AE%B9%3C/div%3E%0D%0A%20%20%20%20%3C/template%3E%0D%0A%20%20%3C/p-card%3E%0D%0A%3C/template%3E%0D%0A%0D%0A%3Cscript%20setup%3E%0D%0Aconst%20cardShadow%20=%20'always'%20//%20always%20%20hover%20%20never%0D%0A%3C/script%3E%0D%0A%0D%0A%3Cstyle%20scoped%20lang=%22scss%22%3E%0D%0A.card-header%20%7B%0D%0A%20%20display:%20flex;%0D%0A%20%20justify-content:%20space-between;%0D%0A%20%20align-items:%20center;%0D%0A%7D%0D%0A.text%20%7B%0D%0A%20%20font-size:%2014px;%0D%0A%7D%0D%0A%0D%0A.item%20%7B%0D%0A%20%20margin-bottom:%2018px;%0D%0A%7D%0D%0A%3C/style%3E%0D%0A",showCode:"%3Cpre%20v-pre%20class%3D%22shiki%20vitesse-dark%20vp-code-dark%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ep-card%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3E%3Ashadow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3EcardShadow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3Eheader%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Ecard-header%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%E6%88%91%E6%98%AF%E5%A4%B4%E9%83%A8%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Eel-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3EOperation%20button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Eel-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3Econtent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%E6%88%91%E6%98%AF%E5%86%85%E5%AE%B9%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ep-card%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3EcardShadow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Ealways%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23758575DD%22%3E%2F%2F%20always%20%20hover%20%20never%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Escoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Escss%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Ecard-header%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B8A965%22%3Edisplay%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C99076%22%3Eflex%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B8A965%22%3Ejustify-content%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C99076%22%3Espace-between%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B8A965%22%3Ealign-items%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C99076%22%3Ecenter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B8A965%22%3Efont-size%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234C9A91%22%3E14%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Eitem%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B8A965%22%3Emargin-bottom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234C9A91%22%3E18%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22shiki%20vitesse-light%20vp-code-light%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ep-card%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3E%3Ashadow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3EcardShadow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3Eheader%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Ecard-header%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%E6%88%91%E6%98%AF%E5%A4%B4%E9%83%A8%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Eel-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3EOperation%20button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Eel-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3Econtent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%E6%88%91%E6%98%AF%E5%86%85%E5%AE%B9%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ep-card%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3EcardShadow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Ealways%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A0ADA0%22%3E%2F%2F%20always%20%20hover%20%20never%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Escoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Escss%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Ecard-header%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23998418%22%3Edisplay%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A65E2B%22%3Eflex%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23998418%22%3Ejustify-content%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A65E2B%22%3Espace-between%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23998418%22%3Ealign-items%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A65E2B%22%3Ecenter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23998418%22%3Efont-size%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%232F798A%22%3E14%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Eitem%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23998418%22%3Emargin-bottom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%232F798A%22%3E18%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"},{default:n(()=>[C(g)]),_:1}),f])}}});export{k as __pageData,S as default};
