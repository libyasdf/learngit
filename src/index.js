import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';// import $ from '//code.jquery.com/jquery-1.11.3.min.js';
import 'babel-polyfill';

const crypto = require('crypto');
  var id = 21;

const users = {
  firstname:'jim',
  tags: ['js', 'web', 'mobile',[1,2,3]],
  'middle-school': 'No.1 Middle School',
  lastname:'green',
  birth:1980,
  agey:function(){
    let y = new Date().getFullYear();
    return y-this.birth;
  }
}

var abs = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};

function absd(x) {
    console.log("arguments",arguments);
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    return x>=0 ? x : -x;
}
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
function buildDate({year, month, day, hour=0, minute=0, second=0}) {
    console.log("hour:",hour);
    return new Date(2015, 5, 19, 20, 15, 30, 123);//Date(year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second);
}
function pow(x){
  return x*x;
}
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}
function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}
function callback() {
    console.log('Done');
}

function is32bit(c){
  return c.codePointAt(0) > 0xFFFF;
}

function authorize(user, action) {
  if (!user.hasPrivilege(action)) {
    throw new Error(
      // 传统写法为
      // 'User '
      // + user.name
      // + ' is not authorized to do '
      // + action
      // + '.'
      `User ${user.name} is not authorized to do ${action}.`);
  }
}
function tag(arrayArr,...value){
  console.log("arrayArr",arrayArr);
  console.log("value",value);
}

function passthru(literals) {
  let result = '';
  let i = 0;

  while (i < literals.length) {
    console.log(`t${i}:` + literals[i]);
    result += literals[i++];
    if (i < arguments.length) {
      result += arguments[i];
      console.log(`a${i}:` + arguments[i]);
    }
  }
  return result;
}

let total = 30;
let msg = passthru`The total is ${total} ${total-1}${total*1.05} with tax)${total+1}`;
console.log("msg",msg);

function SaferHTML(templateData) {
  console.log(`${typeof templateData} templateData:${templateData[1]}`);
  let s = templateData[0];
  console.log(`s1${s}`);
  for (let i = 1; i < arguments.length; i++) {
    let arg = String(arguments[i]);
    console.log(`arg${i}:${arg}`);
    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    console.log(`s2${s}`);
    // Don't escape special characters in the template.
    s += templateData[i];
    console.log(`s3${s}`);
  }
  return s;
}

let sender = '<script>alert("abc")</script>'; // 恶意代码
// let message = SaferHTML`<p>${sender} has sent you a message.</p>`;
var sf = String.raw`Hi\n${2+3}!`;
// var sf = String.raw({ raw: 'test' }, 0, 1, 2);//`dfadfadfs\nsfdsdfsf\t`;
console.log(`sf:${sf}`);


// console.log(`message:${message}`);

function compile(template){
  const evalExpr = /<%=(.+?)%>/g;
  const expr = /<%([\s\S]+?)%>/g;
  console.log("11.11",template);
  template = template
    .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
    .replace(expr, '`); \n $1 \n  echo(`');
  console.log("22.22",template);
  template = 'echo(`' + template + '`);';
  console.log("33.33",template);
  let script =
  `(function parse(data){
    let output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

  return script;
}
/*返回字符串长度的函数 */
function codePointLength(text) {
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

var eat = (x,y) => {
  console.log(`eat:${x+y}`);
}
function foo1  ()  {
  // console.log(`this-foo1:${this}`);
  setTimeout(() => {
    console.log('foo1-id:', this.id);
  }, 100);
}

function foo2() {
// console.log(`foo2-id:${this.id}`);
  setTimeout(function(){
  console.log(`foo2-id:${this.id}`);
},100)
}

function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var name = 'laruence';
function echo() {
     console.log(`echo-name:${name}`);//(name);
     var name = 'eve';
     console.log(`echo-name2:${name}`);//(name);
     // alert(age);
}

function drink(x,y){
  console.log(`drink:${x-y}`);
}

function formatName(users){
  var timer = new Timer();
  setTimeout(()=>{console.log(`s1:${timer.s1}`)},3000);
  setTimeout(()=>{console.log(`s2:${timer.s2}`)},3000);
  // eat.call(drink,5,3);
  // foo1.call({ id: "foo1-42" });
  // var kjd = {id:100};
  // // kjd.foo2();
  // foo2.call({id: "foo2-71"});
  echo();
  if (0b111110111 === 503 ) {
    console.log("o0O");
    console.log(`isfinite:${Number.isFinite(1/3)}`);
    console.log(`max:${Number.MAX_SAFE_INTEGER}\nJINGDU:${Number.EPSILON}`);
    var x = -1;
    x = +x
    console.log(`x:${Math.sign(-0)}`);
    console.log(`log:${1 << 29}`);
  }
  console.log(`16.42:${/^\S$/u.test('昂')}`);
  let codep = "h李b!";
  console.log(typeof $);
  // var locon = $('[className^="hello"]');
  var locon = $('.hello');
  console.log("12.12",locon.toString());
  var ps = $('div');
  console.log(`sdf${ps.length}`);
  $('#root').append(`
    <div>
    There are <p>${codep}</p> items
     in your basket, <p>${codep}</p>
   are on sale!</div>
  `);
  $('#root').html(`
    <ul>
    <li>first</li>
    <li>second</li>
  </ul>`.trim());
  // 写法一
  let str = 'return ' + '`Hello ${name}!`';
  let func = new Function('name', str);
  func('Jack') // "Hello Jack!"

  // 写法二
  let str1 = '(name) => `Hello ${name}!`';
  let func1 = eval.call(null, str1);
  console.log(func1('Jack')); // "Hello Jack!"
  // console.log(`${codep.codePointAt(0)}`);
  for (let ch of codep) {
    // console.log(`${ch.codePointAt(0).toString(16)}`);
  }
  // console.log(is32bit('𠮷'));
  // console.log(`${String.fromCodePoint(0xFFFF,0x78,0x79)}`);
  // normalize用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。
  // if ( '\u01d1'.normalize() === '\u004F\u030C'.normalize() ) {
    // console.log("\u01d1"+"\u004F\u030C");
  // }
  // console.log(`${codep.includes('b',2)}`+`${codep.endsWith('!')}`+`${codep.startsWith('h')}`);
  // console.log('王'.padStart(3,'wo').padEnd(6,'uo~').repeat(2));
  const hash = crypto.createHash('md5');
  const hmac = crypto.createHmac('sha256','secret-key');
  // xiaoming's keys:
  // var ming = crypto.createDiffieHellman(512);
  // var ming_keys = ming.generateKeys();
  //
  // var prime = ming.getPrime();
  // var generator = ming.getGenerator();
  //
  // console.log('Prime: ' + prime.toString('hex'));
  // console.log('Generator: ' + generator.toString('hex'));
  // // xiaohong's keys:
  // var hong = crypto.createDiffieHellman(prime, generator);
  // var hong_keys = hong.generateKeys();
  //
  // // exchange and generate secret:
  // var ming_secret = ming.computeSecret(hong_keys);
  // var hong_secret = hong.computeSecret(ming_keys);
  //
  // // print secret:
  // console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
  // console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));
  //
  hmac.update('hmac1');
  hmac.update('hmac2');
  // console.log(hmac.digest('hex'));
  // 可任意多次调用update():
  hash.update('Hello, world!');
  hash.update('Hello, nodejs!');

  // console.log(hash.digest('hex')); // 7e1977739c748beac0c0fd14fd26a544
    // console.log('width:',window.innerWidth);
    // setTimeout(callback, 1000); // 1秒钟后调用callback函数
    // var s = Object.create(users);
    // s.firstname = "liby";
    // console.log(s);
    // if (s.__proto__ === users) {
    //   console.log("hahahahaha!");
    // }
    // var s = JSON.stringify(users,null,' ');
    // console.log(`s:${s}`);
    // var results = count();
    // var f1 = results[0];
    // f1();
    //
    // var c1 = create_counter();
    // c1.inc();
    // var result = users.tags[3].map(pow);
    // console.log(`result:${result}`+typeof result);
    // var gety = users.agey();
    // console.log(`year:${gety}`);
    // var fooq = foo(1,2,3);
    // var output = buildDate({ year: 2017, month: 1, day: 1 });
    // var output1 = buildDate({ year: 2017, month: 1, day: 1, hour: 20, minute: 15 });
    // console.log("11.11:",output);
    // console.log("11.12:",output1);
    // console.log("foo",fo);
    // var ab = absd(9,"kj");
    // console.log(`nick name:${ab}`);
    // console.log("users:",users);
    // var number1 = Math.abs(1/3);
    // var str = "liby";
    // var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    // var aCopy = str.slice();
    // var numberA = ['3','1','2','5','4'];
    // numberA.sort();
    // console.log("numberA",numberA);
    // numberA.push(['a','b','c']);
    // console.log(`after numberA:`,numberA);
    // console.log(`acopy${typeof(aCopy)}`,aCopy);
    // arr.push('V');
    // console.log(`school:`,users['middle-school']);;
    // // delete users['middle-school'];
    // // console.log(`delete school:`,users['middle-school']);
    // users.age = 18;
    // console.log("age",users.age);
    // if ('firstname' in users) {
    //   console.log("have firstname!!!");
    //   // prompt()
    // }
    // console.log("v:",arr);
    // console.log("str length;",str.length);
    // console.log(`test"${number1}"`+`str:${str[2]}`);
    // for (var key in users) {
    //   console.log("key:",key);
    // }
    var a = ['A', 'B', 'C'];
    var s = new Set(['A', 'B', 'C']);
    var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
    a.push("hello");
    a.forEach(function(element,index,array){
      console.log(element + ', index = ' + index);
    });
    console.log("a",a);
    for (var x of a) { // 遍历Array
        console.log(x);
    }
    // for (var x of s) { // 遍历Set
    //     console.log(x);
    // }
    // for (var x of m) { // 遍历Map
    //     console.log(x[0] + '=' + x[1]);
    // }
    return users.firstname+' '+users.lastname;
}

/*
*** arguments 的使用 start
 */
// function repeat(fn, times, delay) {
//   return function() {
//     if(times-- > 0) {
//       fn.apply(null, arguments);
//       var args = Array.prototype.slice.call(arguments);
//       var self = arguments.callee;
//       setTimeout(function(){self.apply(null,args)}, delay);
//     }
//   };
// }
function format(string) {
  var args = arguments;
  console.log("format:",args);
  console.log("string",string);
  var pattern = new RegExp("%([1-" + arguments.length + "])", "g");
  return String(string).replace(pattern, function(match, index) {
    console.log("match:",match+" index:" + index);
    return args[index];
  });
};
function makeFunc() {
  var args = Array.prototype.slice.call(arguments);
  // console.log("makefunc-args:",args);
  var func = args.shift();
  // console.log("func:",func);
  var lasts = args[args.length-1];
  // console.log("lastd:",lasts);
  // console.log( args.concat(Array.prototype.slice.call(arguments)));
  return function() {
    return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
  };
}
/* arguments 的使用 end */
function Person(name,age){
  this.name = name;
  this.age = age;
}
Person.prototype.sayHello = function(){
  console.log(`${this.name} say Hello!`);
}
// 尾调优化
function tco(f) {
  var value;
  var active = false;
  var accumulated = [];

  return function accumulator() {
    console.log("toc-arg:",arguments);
    accumulated.push(arguments);
    console.log("acc:",accumulated[0]);
    if (!active) {
      active = true;
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift());
      }
      active = false;
      return value;
    }
  };
}

function typeOf(){
    return Array.from(arguments, (x) => typeof x);
}

var doSomething = function(){

}
function formatName1(){
  // console.log("12.13:",typeOf(undefined,NaN,"1",2,null,[]));
  console.log("777:",[1, 2, 3, 4, 5].copyWithin(0, -3, -2));
  console.log("888:",[NaN].findIndex(y => Object.is(NaN, y)));
  for(let [indexK,elem] of ["a","b"].entries() ){
    console.log(indexK,elem);
  }
  console.log("11,11",[1,2,3,4].includes(4,3));
  console.log("00.00",...[,"c"]);
  console.log("22,22",[...[,'a'].entries()] );//扩展运算符（...）也会将空位转为undefined。
  console.log("33.33",[,"b"].entries() );
  // Object.getOwnPropertyDescripter()
  console.log("函数：",doSomething.bind().name);
  console.log("name",(new Function()).name);
  const key1 = Symbol('description');
  const key2 = Symbol();
  let obj1 = {
    [key1]() {},
    [key2]() {},
  };
  console.log("symbol:",obj1[key1].name); // "[description]"
  console.log("name:",obj1[key2].name);// ""
  console.log("遍历：",Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 ,1:7 ,c:2 ,3:4}));
  console.log("key:",Object.keys( { [Symbol()]:0, b:0, 10:0, 2:0, a:0 ,1:7 ,c:2 ,3:4} ));

  // working feature1

  let {m,n,...b} = {m:1,n:2,c:3,d:4,e:5};
  let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
  console.log("b",b);
  console.log("z", {...1});
  console.log( "v:",{..."liby"});
  const obj2 = {
    foo: 123,
    get bar() {return 'abc' }
  }

  console.log(Object.getOwnPropertyDescriptors(obj2));
  console.log(Object.getOwnPropertyDescriptor(obj2,'foo'));
  console.log(Object.getPrototypeOf(1) === Number.prototype);

  console.log(Object.keys(obj2));
  console.log(Object.values(obj2));

  const obj3 = Object.create({}, {p: {value: 42,enumerable:true}});//Object.values只返回对象自身的可遍历属性。
  // 第二个参数添加的对象属性（属性p），如果不显式声明，默认是不可遍历的，因为p的属性描述对象的enumerable默认是false，
  // Object.values不会返回这个属性。只要把enumerable改成true，Object.values就会返回属性p的值。
  console.log("enumerable:",Object.values(obj3));
  console.log(Object.values({[Symbol()]:123,foo:"abc"}));//Object.values会过滤属性名为 Symbol 值的属性。

  console.log(Object.values("foo"));
  let obj5 = { one: 1, two: 2 };
  for (let [k, v] of Object.entries(obj5)) {
    console.log(
      `${JSON.stringify(k)}: ${JSON.stringify(v)}`
    );
  }
  const map = new Map(Object.entries(obj5));
  console.log("obj5:",map);

  const map1 = new Map().set('foo', true).set('bar', false);
  console.log("map1",map1);

  // Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'));//undefined
  let sym1 = Symbol("liby");
  console.log("Symbol:",sym1);
  console.log(sym1.toString());
  console.log(String(sym1));

  const log = {};

  log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
  };
  console.log(log.levels.DEBUG, 'debug message');
  console.log(log.levels.INFO, 'info message');

  const obj6 = {};
  let a1 = Symbol('a');
  let b1 = Symbol('b');

  obj6[a1] = "hello a!";
  obj6[b1] = "Hello b!";

  Object.defineProperty(obj6,a1,{value:"foobar"});

  const objectSymbol = Object.getOwnPropertySymbols(obj6);
  console.log(objectSymbol);
  // Reflect.ownKeys();
  let ds1 = Symbol.for("libya");
  let ds2 = Symbol.for("libya");
  console.log("de1:",ds1 === ds2);
  console.log("key:",Symbol.keyFor(ds1));

  let arr1 = ["a","b"];
  arr1[Symbol.isConcatSpreadable] = false;
  console.log("array:",["c","d"].concat(arr1,"b"));

  let sameObj = {0:"a", 1:"sda", length:2};
  sameObj[Symbol.isConcatSpreadable] = true;
  console.log("spreadable:",["a","b"].concat(sameObj,"e"));

  class MyArray extends Array{
    static get [Symbol.species](){ return Array; }
  }
  const a11 = new MyArray();
  const b11 = a11.map( x => x );

  console.log("MyArray:",b11 instanceof MyArray );
  console.log("Array:",b11 instanceof Array );

  class MyMatcher {
    [Symbol.match](string){
      return "hlloe world!".indexOf(string);
    }
  }
  console.log("match:",'e'.match(new MyMatcher()));;

  const x11 = {};
  x11[Symbol.replace] = (...s) => console.log(s);
  console.log("replace:",'Hello'.replace(x11, 'World') ); // ["Hello", "World"]

  class MySearch {
    constructor(value) {
      this.value = value;
    }
    [Symbol.search](string) {
      return string.indexOf(this.value);
    }
  }
  console.log("search:",'foobar'.search(new MySearch('bar')) );// 0


  const myIterable = {};
  myIterable[Symbol.iterator] = function*(){
    yield 1;
    yield 2;
    yield 3;

  };
  console.log("iterator:",[...myIterable]);

  class MySplite {
    constructor(value){
      this.value = value;
    }
    [Symbol.split](string){
      let index = string.indexOf(this.value);
      if(index === -1){
        return string;
      }
      return [
        string.substr(0,index),
        string.substr(index + this.value.length)
      ]
    }
  }

  console.log("split:","foobar".split(new MySplite('foo')) );

  let obj7 = {
    [Symbol.toPrimitive](hint){
      switch (hint){
        case 'number':
          return 100;
        case 'string':
          return 'liby';
        case 'default':
          return 'default';
        default:
          throw new Error();
      }
    }
  };

  console.log("number:",1 * obj7);
  console.log("string:",1 + obj7);
  console.log("default:",obj7 == 'default');
  console.log("````",String(obj7));

  class Collection{
    get [Symbol.toStringTag](){
      return '$$$';
    }
  }
  let coll = new Collection();
  console.log("toStringTag:",Object.prototype.toString.call(coll));
  console.log(":",JSON.toString(coll) );

  const s = new Set();
  [2,3,4,2,3,2,3,7,4].forEach(x=>s.add(x));
  console.log("result:",s);

  const set = new Set(document.querySelectorAll('div'));
  console.log("set.size:",set); // 56
  console.log([...set]);
  console.log(document.querySelectorAll('div'));

  //   作者：Fundebug
  // 链接：https://www.zhihu.com/question/22855484/answer/657320514
  // 来源：知乎
  // 著作权归作者所有，转载请联系作者获得授权。

  function addMethod(object, name, f) {　　
      var old = object[name];
      console.log("obj:>>",object);
      object[name] = function() {
          // f.length为函数定义时的参数个数
          // arguments.length为函数调用时的参数个数　　　　
          if (f.length === arguments.length) {　　
              return f.apply(this, arguments);　　　　
          } else if (typeof old === "function"){
              return old.apply(this, arguments);　　　　
          }　　
      };
  }


// 不传参数时，返回所有name
function find0() {　　
    return this.names;
}


// 传一个参数时，返回firstName匹配的name
function find1(firstName) {　　
    var result = [];　　
    for (var i = 0; i < this.names.length; i++)
    {　　　　
        if (this.names[i].indexOf(firstName) === 0)
        {　　　　　　
            result.push(this.names[i]);　　　　
        }　　
    }　　
    return result;
}


// 传两个参数时，返回firstName和lastName都匹配的name
function find2(firstName, lastName) {　
    var result = [];　　
    for (var i = 0; i < this.names.length; i++)
    {　　　　
        if (this.names[i] === (firstName + " " + lastName))
        {　　　　　　
            result.push(this.names[i]);　　　　
        }　　
    }　　
    return result;
}


var people = {　　
    names: ["Dean Edwards", "Alex Russell", "Dean Tom"]
};


addMethod(people, "find", find0);
addMethod(people, "find", find1);
addMethod(people, "find", find2);


console.log(people.find()); // 输出["Dean Edwards", "Alex Russell", "Dean Tom"]
console.log(people.find("Dean")); // 输出["Dean Edwards", "Dean Tom"]
console.log(people.find("Dean", "Edwards")); // 输出["Dean Edwards"]

  let set01 = new Set([1,4,6,8]);
  set01.forEach( (value,key) => console.log(key + "" + value) );

  let set02 = new Set(['red','green','gray']);
  let arr2 = [...set02];
  console.log("arr2",arr2);

  let arr3 = [2,2,3,4,3,5,6,5,8];
  let uniq = [...new Set(arr3)];
  console.log("uniq:",uniq);

  let aa = new Set([1,2,3]);
  let bb = new Set([3,4,2]);

  let union = new Set([...aa,...bb]);
  let intersect = new Set([...aa].filter((x) => {bb.has(x)}));
  // let difference = new Set([...aa].filter((x) => {!bb.has(x)}));
  let difference = new Set([...aa].filter((x) => (!bb.has(x))));
  console.log("union",union);

  // const ws = new WeakSet();
  const aaa = [[1, 2], [3, 4],[1,2]];
  const ws = new WeakSet(aaa);
  console.log("ws:",ws);

  const bbb = [[1],[2]];
  const wsws = new WeakSet(bbb);
  console.log("wsws:",wsws);

  const mapm = new Map([
    ['liby','账单'],
    ['title','author']
  ])
  console.log("map.size:",mapm.size);
  console.log("map.has:",mapm.has('liby'));
  console.log("map.title:",mapm.get('title'));

  const myMap = new Map()
  .set(true,1)
  .set({'foo':1},['liby', 2]);
  console.log("map set:",[...myMap]);

  let testMap = new Map([
    [true,1],
    [{'foo':1},['liby',2]]
  ]);
  console.log("testMap:",testMap);
  console.log("testMap []",[...testMap]);

  function changeObj(mapObj){
    let obj = Object.create(null);
    for (let [k,v] of mapObj) {
      obj[k] = v;
    }
    return obj;
  }
  console.log("object map:",changeObj(testMap));

  // proxy
  // var objproxy = new Proxy ({}, {
  //   get : function(target, key, receiver ){
  //     console.log(`getting ${key} !`);
  //     return Reflect.get(target, key, receiver);
  //   },
  //   set : function(target, key, value, receiver){
  //     console.log(`setting ${key} !`);
  //     return Reflect.set(target, key, value, receiver);
  //   }
  // });
  // objproxy.count = 1;
  // ++objproxy.count;
  // console.log(objproxy.count);
  //
  // var proxy = new Proxy({},{
  //   get : function(target, property){
  //     return 35;
  //   }
  // });
  //
  // console.log("proxy.time",proxy.time);
// 拦截器函数，可以设置拦截多个操作。
  // var handler = {
  // get: function(target, name) {
  //   if (name === 'prototype') {
  //     return Object.prototype;
  //   }
  //   return 'Hello, ' + name;
  // },
  //
  // apply: function(target, thisBinding, args) {
  //   console.log("apply:",target);
  //   console.log("binding:",thisBinding);
  //   return args[0];
  // },
  //
  // construct: function(target, args) {
  //     console.log("construct:",target);
  //     return {value: args[1]};
  //   }
  // };
  //
  // var fproxy = new Proxy(function(x, y) {
  //   return x + y;
  // }, handler);
  //
  // fproxy(1, 2) // 1
  // new fproxy(1, 2) // {value: 2}
  // if (proxy.prototype === Object.prototype) {
  //   console.log("prototype true");
  // } // true
  // if (fproxy.foo === "Hello, foo" ) {
  //   console.log("foo true");
  // }
  // var person = {
  //   name: "张三"
  // };
  //
  // var proxyg = new Proxy(person, {
  //   get: function(target, property) {
  //     console.log(target);
  //     console.log(property);
  //     if (property in target) {
  //       return target[property];
  //     } else {
  //       throw new ReferenceError("Property \"" + property + "\" does not exist.");
  //     }
  //   }
  // });
  // console.log("proxy.name:",proxyg.name); // "张三"
  // let testC = Object.create(proxyg);
  // console.log("testC.name:",testC.name);//get方法可以继承。
  //
  // // console.log("proxy.age:",proxyg.age); // 抛出一个错误
  //
  // var nx = 36;
  // var np = nx.toString().split("").reverse().join("");
  // console.log("np:",np);
  // 链式操作
  var double = n => n * 2;
  var pow    = n => n * n;
  var reverseInt = n => n.toString().split("").reverse().join("") | 0;

  var pipe = (function () {
    return function (value) {
      var funcStack = [];
      var oproxy = new Proxy({} , {
        get : function (pipeObject, fnName) {
          if (fnName === 'get') {
            return funcStack.reduce(function (val, fn) {
              return eval(fn + "(val);");//将string的方法名，转为函数执行
            },value);
          }
          funcStack.push(fnName);
          return oproxy;
        }
      });
      return oproxy;
    }
  }());

  console.log("link:",pipe(3).double.pow.reverseInt.get); // 63
  // 利用get拦截，实现一个生成各种 DOM 节点的通用函数dom。#01复习proxy，没怎么懂
  const dom = new Proxy({}, {
    get(target, property) {
      console.log("11property:",property);//property 里面存的是标签il、ul、div、a
      return function(attrs = {}, ...children) {//[...children] 数组标签和数据
        const el = document.createElement(property);
        console.log("11children:",[...children]);
        // attrs: – {href: "//example.com"}
        for (let prop of Object.keys(attrs)) {
          //Object.keys(attrs) : ["href"]
          //el : <a href="//example.com">Mark</a>
          //prop : "href"
          //attrs[prop] : "//example.com"
          el.setAttribute(prop, attrs[prop]);
        }
        console.log("children",children);
        for (let child of children) {
          console.log("child:",child);
          if (typeof child === 'string') {
            child = document.createTextNode(child);
          }
          el.appendChild(child);
        }
        return el;
      }
    }
  });

  const el = dom.div({},
      'Hello, my name is ',
      dom.a({href: '//example.com'}, 'Mark'),
      '. I like:',
      dom.ul({},
      dom.li({}, 'The web'),
      dom.li({}, 'Food'),
      dom.li({}, '…actually that\'s it')
    )
  );
  console.log("getreceiver",dom.getReceiver === dom);
  document.body.appendChild(el);

  const d = Object.create(dom);
  console.log("fjadfdsf:",d.a);

  // set（）
  let validator = {
    set : function (obj , prop, value ) {
      if (prop === "age") {
        if (!Number.isInteger(value) ) {
          throw new TypeError("The age is not an integer");
        }
        if (value > 200) {
          throw new RangeError("The age seems invalid");
        }
      }
      obj[prop] = value;
    }
  };
  let personset = new Proxy({},validator);
  personset.age = 100;
  console.log("set ",personset.age);
  /*set() */
  function invariant(key,action){
    if (key[0] === "_") {
      throw new Error("canot change!");
    }
  }
  const handler = {
    get : function(target,key){
      invariant(key,"get");
      return true;
    },
    set : function(target,key,value){
      invariant(key,"set");
      target[key] = value;
      return target;
    }
  }
  const proxysett = new Proxy({} , handler);
  // proxysett._prop = "test";

  const targetes = {
    m: function () {
      console.log(this);
      console.log("thisL:",this === proxyes);
      }
  };
  const handleres = {};
  const proxyes = new Proxy(targetes, handleres);
  targetes.m() // false
  proxyes.m()  // true
//
  const targeted = new Date('2015-01-01');
  const handlered = {
    get(targeted, prop) {
      if (prop === 'getDate') {
        return targeted.getDate.bind(targeted);
      }
      return Reflect.get(targeted, prop);
    }
  };
  const proxyed = new Proxy(targeted, handlered);

  console.log( "getdata:",proxyed.getDate()  );// 1

  var myObject = {
    foo: 1,
    bar: 2,
    get baz() {
      return this.foo + this.bar;
    },
  };

  var myReceiverObject = {
    foo: 4,
    bar: 4,
  };

  console.log("Reflect get:",Reflect.get(myObject, 'baz', myReceiverObject) ); // 8

  const ages = [11, 33, 12, 54, 18, 96];

  // 旧写法
  const youngest = Reflect.apply(Math.min, Math, ages);
  const oldest = Reflect.apply(Math.max, Math, ages);
  const type = Reflect.apply(Object.prototype.toString, youngest, []);

  console.log("string:",type);

  const queuedObservers = new Set();
  const observe = fn => queuedObservers.add(fn);

  function seter(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    queuedObservers.forEach(observer => observer());
    return result;
  }
  const observable = obj => new Proxy(obj, {seter});
  const personer = observable({
    name: '张三',
    age: 20
  });

  function print() {
    console.log(`${personer.name}, ${personer.age}`)
  }

  observe(print);
  personer.name = "赵四";

  // { foo: "bar", baz: "qux" }
  // Object.fromEntries(map1)
  // Object.defineProperties()
  // console.log("sd",...[1,2,3]);
  // const a1 = [1, 2];
  // const [...a2] = a1;
  // a2[0] = 2;
  // console.log("a1:",a1);
  // let str = 'x\uD83D\uDE80y';
  // console.log("11.11:",[...str].reverse().join(''));//扩展运算符使reverse结果准确
  // console.log("11.12:",str.split('').reverse().join(''));//错误的结果
  // // 定义了Number对象的遍历器接口，扩展运算符将5自动转成Number实例以后，就会调用这个接口，就会返回自定义的结果。
  // Number.prototype[Symbol.iterator] = function*() {
  //   let i = 0;
  //   let num = this.valueOf();
  //   while (i < num) {
  //     yield i++;
  //   }
  // }
  // console.log("11.13:",[...5]);
  // var sum = tco(function(x, y) {
  //   if (y > 0) {
  //     return sum(x + 1, y - 1)
  //   }
  //   else {
  //     return x
  //   }
  // });
  // var allt = sum(1, 10);
  // console.log("allt",allt);

  // var boy = new Person("liby",24);
  // console.log(`boy:${boy.name}`);
  // console.log(boy.constructor === Person);
  // console.log(boy.constructor);
  // var person1 = new Person("za",12);
  // var person2 = new person1.constructor();
  // console.log(person2 instanceof Person); //true
  // console.log(boy.__proto__ === Person.prototype);//true
  // console.log(Person.prototype);
  // console.log(boy.__proto__.constructor === Person.prototype.constructor);//true
  // console.log(boy.__proto__.constructor);
  // console.log("/////////////////");
  // console.log(Person.prototype.__proto__ === Object.prototype);//true
  // console.log(Object.prototype);//{}
  // console.log(Object.prototype.__proto__); //null

  // var func = makeFunc(format, "I like %1 not %2.");
  // var s1 = func("js", "python");
  // console.log("s1：",s1);
  // var somethingWrong = repeat(function(s){console.log(s)}, 3, 2000);
  // somethingWrong("Can you hear me, major tom?");

  return "funs";
  // console.log(arguments[0].firstname);
  // console.log(arguments[Symbol.iterator]);
  // var sjdj = arguments[Symbol.iterator]();
  // console.log(sjdj.next());
  // console.log(sjdj.next());
  //
  // var users1 = Array.prototype.slice.call(arguments);
  // var args = toString(users1[0]);
  // console.log(`JSON args:${args}`);
  // console.log(users1);
  // console.log(`users1 type:${typeof users1}`);
  // console.log(Object.prototype.toString.call(users1));
  // console.log(Array.isArray(users1));
}
// const element2 = <h2>bye {formatName(users)}</h2>;


// componentDidMount
// componentWillUnmount
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];
let a = 5;
let b = 10;
tag`Hello ${a+b} world ${a*b}`;
// console.log(tmpl(data));
$('#loco').append(
  `${tmpl(data)}`
)
//
let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
var parse = eval(compile(template));

console.log(`87.08:${codePointLength('李不出这也就是')}`);
console.log(parse({ supplies: [ "broom", "mop", "cleaner" ] }));
console.log(`huned:${/\d+(?=%)/.exec('100% of US presidents have been male') }`);
console.log(`fourty:${/\d+(?!%)/.exec('that’s all 44 of them')}`);
const element = (
  <span id = "loco">
    <h1 className="hello">Hello, {formatName1(users)}</h1>
  </span>
)
ReactDOM.render(
  element,//<App />,是创建的模板，多个dom元素外层需使用一个标签进行包裹
  document.getElementById('root')//参数是插入该模板的目标位置。
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
