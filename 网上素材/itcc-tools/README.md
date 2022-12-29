## 安装
```
npm install dateformat_htmlescape-tools

```

## 导入

```js

const itcc=require('itcc-tools')

```

## 格式化时间

```js
// 调用dateFormat对事件进行格式化
const dtStr=itcc.dateFormat(new Date())
console.log(dtStr);

```

## 转义htnl中的特殊字符

```js

// 带转换的html字符串
const htmlStr='<h1 title="abc">这是h1标签<span>123&nbsp</span></h1>'
//调用html方法进行转换
const str=itcc.htmlEscape(htmlStr)
// 转换结果
&lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&nbsp&lt;/span&gt;&lt;/h1&gt; 

```

## 还原html中的特殊字符

```js

// 待还原的html字符串
const  str2 = itcc.htmlUnEscape(str)
// 输出结果<h1 title="abc">这是h1标签<span>123&nbsp</span></h1>
console.log(str2);

```

## 开源协议
ISC