import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';// import $ from '//code.jquery.com/jquery-1.11.3.min.js';

const crypto = require('crypto');

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

function formatName(users){
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

// console.log(tmpl(data));
$('#loco').append(
  `${tmpl(data)}`
)
const element = (
  <span id = "loco">
    <h1 className="hello">Hello, {formatName(users)}</h1>
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
