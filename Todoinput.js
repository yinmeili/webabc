import React, { Component } from 'react'
//受控组件：value值被react控制的表单元素
//可以实时获取表单元素的值（表单验证），写法相对麻烦
//
export default class Todoinput extends Component {
    constructor(){
        super();
        //通过bind绑定this
        this.handleInput=this.handleInput.bind(this);
        this.state={
            inputValue:'',
            ab:''
            // b:'',
            // c:''
        }
        
    }
    handleInput=(e)=>{
        //绑定this，事件处理函数写成箭头函数，或者用bind
        if(e.keyCode===13){
            
            this.props.add(e.target.value);
        }
        
    }
    handleChange=(e)=>{
        this.setState({
             [e.target.name]:parseInt(e.target.value===''?'0':e.target.value)
        })
    }
    componentDidMount(){
        console.log(this);
        // this.refs.a.focus();
    }
    render() {
       
        return ( 
            <div className={this.state.b+this.state.c>10?'box':''}>
                <div class="a">
                    ToDolist
                    <input id='inp'class="b" name='ab' onChange={this.handleChange} value={this.state.ab} onKeyDown={this.handleInput} placeholder="添加ToDo" type="text"></input>
                </div>
                {/* <label htmlFor='inp'>请输入第一个数：</label> */}
                
               
               
    
                {/*非受控组件:一次性获取或处理表单元素的值，获取节点获取值*/}
                {/* <input ref={(inp)=>{this.inp=inp}}type="text"/> */}
                {/* <div>
                    <div class="ab1">
                        <div class="ab12">正在进行</div>
                        <div class="ab11"></div>
                    </div>
                </div> */}
                
                {/* <button 
                    style={{color:'red',fontSize:'10px'}}
                    onClick={()=>{console.log(this.inp.value)}}>
                    提交
                </button> */}
            </div>
        )
    }
}
//受控组件：
//1.给input添加value属性，赋值为state的值
//2.给input标签绑定onChange事件，，，，，
