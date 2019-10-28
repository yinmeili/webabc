// import React, { Component } from 'react'
// import Todoinput from './Todoinput'
// import Todoing from './Todoing'
 
// export default class Todolist extends Component {
//     constructor(){
//         super();
//         this.state={
//             todo:[1,2,3]
//         }
//         //深拷贝\浅拷贝
//         var obj={a:100,b:[1,2,3]};
//         //新的对象，和原来对象引用不一样
//         // var o={...obj};
//         var obj1={c:300};
//         var o=Object.assign(obj,obj1);
//         // var o=JSON.parse(JSON.stringify(obj));
//         // o.b[0]=200;
//         console.log(o===obj);
//         Object.keys(obj).forEach((item)=>{
//             console.log(item);
//             console.log(obj[item]);
//         })

//     }
//     addItem=(data)=>{
//         // this.state.todo.push(data);
//         // console.log(this.state.todo);
//         // console.log(data);
//         //改变状态
//         this.setState({
//             todo:[...this.state.todo,data]
//         })
        
//     }
//     delItem=(idx)=>{
        
//         //1.不能直接改变或处理state,通过setState改变
//         let todo=[...this.state.todo];
//         //开始删的位置，删掉几个
//         todo.splice(idx,1);
//         //2.setState是异步执行
//         this.setState((states,props)=>{
//             console.log(state.todo);
//             return{
//                 todo:todo
//             }
//         })
//         // this.setState({
//         //     todo:todo
//         // })
//     }
//     render() {
//         return (
//             <div>
//                 <Todoinput add={this.addItem}/>
//                 <Todoing del={this.delItem} todo={this.state.todo}/>
//             </div>
//         )
//     }
// }
import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'
// import './Todo.css'
export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[],
        
            a:100,
            b:200
        }
        // 深拷贝\浅拷贝
        // var obj = {a:100,b:[1,2,3]};
        // var obj1 = {c:300};
        // var o = {...obj};
        // var o = Object.assign({},obj,obj1);
        // 深拷贝
        // var o = JSON.parse(JSON.stringify(obj));
        // o.b[0] = 200;
        // console.log(o===obj);
        // 遍历对象
        // Object.keys(obj).forEach((item)=>{
        //     console.log(item)
        //     console.log(obj[item])
        // })

    }
    addItem = (data)=>{
        let tolist=this.state.todo;
        tolist.push({
            checked:false,
            data:data
        })
        
        this.setState({
            todo: tolist
        },()=>{
            localStorage.setItem('list',JSON.stringify(tolist));
        })

    }
    delItem = (idx)=>{
        // 1、不能直接改变或处理state，通过setState改变
        let tolist=this.state.todo;
        // let todo = [...this.state.todo];
        tolist.splice(idx,1);
        // 2、setState是异步执行
        this.setState({
            todo:tolist
            // console.log(state.todo);
            // return {
            //     todo: todo
            // }
        },()=>{
            localStorage.setItem('list',JSON.stringify(tolist));

        })
        // 在setState里获取state可能会出错，不是你想要的值
        // 可以像上面那样，把第一个参数写成函数，解决该问题
        // this.setState({
        //     todo: this.state.num + 100
        // },()=>{
        //     console.log(this.state.todo)
        // })
    }

    check=(item)=>{
        let tolist=this.state.todo;
        tolist[item].checked=!tolist[item].checked
       
        this.setState({
            todo:tolist
        },()=>{
            localStorage.setItem('list',JSON.stringify(tolist));

        })
    }
    componentDidMount(){
        var list=JSON.parse(localStorage.getItem('list'));
        if(list){
            this.setState({
                todo:list
            })
        }
    }
    render() {
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} check={this.check} todo={this.state.todo}/>
            </div>
        )
    }
}