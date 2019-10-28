// import React,{Fragment,Component} from 'react';
// import ReactDOM from 'react-dom';
// import {ShowTime} from './showTime';
// import './index.css';
// import Todolist from './Todolist/Todolist';
// import Request from './Request/Request'
// import Parent from './Context/Parent'
// import {con,con2} from './Context/Context'
// import Hoc from './Hoc/Hoc'
// import Portal from './Portal/Portal'
// import ParentPortal from './Portal/ParentPortal'
// import App from './App'
// //显示当前系统时间
// // function showTime(){
// //     var ele=<div>
// //         <p>当前时间是：</p>
// //         <div>{new Date().toLocaleString()}</div>
// //         </div>;
// //     ReactDOM.render(
// //         ele,
// //         document.querySelector('#root')
// //     );

// // }
// // showTime();
// // setInterval(showTime,1000);
// //函数声明组件
// // function ShowTime(props){
// //     console.log(props);
// //     return (<Fragment>
// //             <div>
// //                 <div>  {props.name}</div>
// //                 <div>
                  
// //                     {new Date().toLocaleString()}
// //                 </div>
// //             </div>
// //             </Fragment>)
// // }
// //
// //组件交互
// //父组件----->子组件：调用子组件时添加属性，子组件通过props拿到传递的数据
// //子组件----->父组件

// /*
// Context:
// 1.生成Context，可写在一个js文件中，export导出
// 2.在根组件import Provider，并配置Provider,加上value属性
// 3.在需要获取数据的组件，import Consumer并配置Consumer
// Consumer组件里是个函数，函数的参数传过来的是value值
// */
// let id=1234;
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// )
// // ReactDOM.render(
// //     <con.Provider value={id}>
// //         <div>ddd</div>
// //         <con2.Provider>
// //             <Parent/>
// //         </con2.Provider>
      
// //     </con.Provider>,
// //         document.getElementById('root')
// // );



// // var num=[1,2,3,4,5];
// // ReactDOM.render(
// //     <ShowTime age={num} name="wangj"/>,
// //     document.getElementById('root')  
// // );


















// // import './index.css';
// // import App from './App';
// // import * as serviceWorker from './serviceWorker';
// // var ele=<h1>hello{str}</h1>
// // var str='react';
// var obj={
//     type:'h1',
//     props:{
//         id:'tit',
//         class:'tit',
//         children:['hello','react']
//     }
// }
// // var ele=React.createElement('h1',{id:'tit',class:"title"},'hello');
// // console.log(ele);
// // ReactDOM.render(ele, document.getElementById('root'));


// // serviceWorker.unregister();
// function render(obj,container){
//     var {type,props}=obj;
//     //文档碎片
//     var fragment=document.createDocumentFragment();
//     var ele=document.createElement(obj.type);
//     for(var item in obj.props){
//         // ele.item=obj.props.item;
//         if(item==='class'){
//             ele.className=obj.props[item];
//         }else if(item==='children'){
//             for(var i=0;i<props[item].length;i++){
//                 // ele.innerHTML+=props.children[i];
//                 if(typeof props.children[i]==='object'){
//                     render(props.children[i],ele);
//                 }else{
//                     var txt=document.createTextNode(props.children);
//                     ele.appendChild(txt);
    
//                 }
               
//             }
//         }else{
//             ele[item]=obj.props[item];
//         }
//         // ele[item]=obj.props[item];
//     }
//     fragment.appendChild(ele);
//     container.appendChild(fragment);
// }
// // render(obj,document.getElementById('root'));
// //页面渲染过程
// /*
// 请求HTML页面，浏览器HTML解析器解析html文件，生成DOM树
// link引入css文件，css解析器解析css，生成css对象模型，CSSOM和DOM tree结合生成一个render tree,最后浏览器绘制页面
// */
// //页面回流（重排reflow）:DOM结构变化，内容变化，大小，显示的变化，位置的变化，使性能变差
// //页面重绘（repaint）:颜色的变化（背景色，字体颜色，边框颜色，代价小）
// //1.先用变量进行dom处理，最后一次渲染
// // console.time('time');
// // var div=document.getElementById('root');
// // var str='';

// // for(var i=0;i<1000;i++){
// //     str+='<p>'+i+'</p>';
// // }
// // div.innerHTML=str;
// // console.timeEnd('time');
// //2.对样式进行处理
// var div=document.getElementById('root');
// // div.style.width='100px';
// // div.style.heigth='100px';
// // div.style.background='red';

// div.className='active';
// //3.offsetLeft,offsetWidth等都会引起回流
// // console.log(div.offsetLeft);
// // var wid=div.offsetWidth;
// // setInterval(()=>{
// //   wid+=1;
// //   div.style.width=wid+'px';
// // },100)
// //4文档碎片（内容中的一个变量）.只要页面回流就会引起页面重绘






import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Todolist from './Todolist/Todolist'
import './index.css';
// 容器组件 / UI组件（展示组件）
// 智能组件 / 木偶组件

// 容器组件（container/pages）：逻辑，功能
// UI组件（components）：写成函数组件，展示，返回React元素

ReactDOM.render(
    // <App/>,
    <Todolist/>,
    document.getElementById('root')
)