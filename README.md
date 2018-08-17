## 犯错
    this.props.location.pathname === this.props.match.path

## 类名
    类名className只能有一个，不能有两个，会被覆盖。

## 在react中使用stylus
    https://www.jianshu.com/p/9cd7a0dff11f

## redux数据问题
    step 1 写整套redux
    step 2 组件中export default connect(
                  //这里调用的是reducers的数据
                  state => ({data:state.Data}),
                  {getDataAsync}
                )(Home);
    step 3 生命周期函数中this.props.getDataAsync()
    注意reducers里面types变量不是字符串，别加引号啦。

## 判断数组map映射时，应该加return()

## 在标签中写onClick应该返回一个函数，vue就可以直接写。

## 自结束标签 style className 复制过来先改这些

## 在react中定义自定义的方法时，this是undefined。故统一用箭头函数。
    在模板时，onClick={()=>this.方法名} 或 onClick={this.方法名(index)}

## 别忘记引入swiper样式
    import 'swiper/dist/css/swiper.css';

## render的结构出现一堆屎黄色的就是没有return()包裹起来

## 在vue中双向数据流直接用v-model, react中要用受控组件
    step 1 自身定义状态
    step 2 在input中加onChange改变状态并在input上设置value值
    step 3 自定义方法，通过event.target拿值

## style={{width: 150, marginTop: 5, right: 20}}
    键值对内用冒号
    多个键值对之间用逗号
    px不用加

