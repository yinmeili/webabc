import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoing extends Component {
    // delItem(idx,e){
    //     console.log(e);
    //     this.props.del(idx);
    // }
    render() {
      let sum=0;
        var {todo}=this.props;
        for(var i=0;i<todo.length;i++){
          if(!todo[i].checked){
            sum++;
          }
        }
        return (
          <div>
            <h2>正在进行</h2>
            <h3>{sum}</h3>
            <ul>
              {
                  todo.map((item,idx) =>{
                    if(!item.checked){
                      return(
                      <li key={idx}>
                        <input type='checkbox' checked={item.checked}  onChange={(e)=>this.props.check(idx)}/>
                        {item.data}--- <button onClick={(e)=>this.props.del(idx,e)}>删除</button>
                      

                      </li>
                      )
                    }
                  })
              }

            </ul>
            <h2>已经完成</h2>
            <p>{todo.length-sum}</p>
            <ul>
              {
                  todo.map((item,idx) =>{
                    
                    if(item.checked){
                      return(
                      <li key={idx}>

                        <input type='checkbox' checked={item.checked}  onChange={(e)=>this.props.check(idx)}/>
                        {item.data}--- <button onClick={(e)=>this.props.del(idx,e)}>删除</button>
                      

                      </li>
                      )
                    }
                  })
              }

            </ul>
          </div>
        )
    }
    
}
Todoing.propTypes={
  todo:PropTypes.array,
  del:PropTypes.func
}
//设置默认属性值
Todoing.defaultProps={
  todo:[1,2,3,4,4]
}