import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom'
import { adminRouter } from './routes/Index'
import MyLayout from './componends/frame/Index'
import { isLogined } from './utils/auth'






//该页面负责主要业务到路由，首先会在当前页面判断是否存在token


function App() {
  return (

    // 判断当前是否登录，如果没有登录，就进入login
    isLogined() ?
      <MyLayout>
        <h1>我时app</h1>
        <Switch>
          {adminRouter.map(route => {
            // {...route}可以让配置过的字段都进行自动匹配
            return <Route key={route.path} {...route} render={routerProps => { return <route.component {...routerProps} /> }}></Route>
          })}
          {/* 请求来自/admin但是没有匹配上时，访问 */}
          <Redirect to={adminRouter[0].path} from="/admin"></Redirect>
          <Redirect to="/404"></Redirect>
        </Switch>
      </MyLayout>
      : <Redirect to='/login' />
  );
}












// import { Form, Input, Button, Select } from 'antd';







// const { Option } = Select;
// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

// class App extends React.Component {
//   formRef = React.createRef();



//   constructor(props) {
//     super(props)
//     this.state = {
//       name: "",
//       price: 0
//     }



//   }




//   componentWillMount() {

//     console.log(this.props)

//   //   setInterval(()=>{
     
     
//   //     this.setState({
//   //       price:new Date().toLocaleTimeString()
//   //     })
      
//   // },1000)

//   }


//   test = (values) => {
    
//     console.log("test")
//     console.log(this.formRef)
//     this.formRef.current.setFieldsValue({
//       note: `test`,
//     })
//   }

//     onGenderChange = (value) => {
//       console.log(this.formRef)
//       this.formRef.current.setFieldsValue({
//         note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
//       });
//     };
//     onFinish = (values) => {
//       console.log(values);

//       this.formRef.current.setFieldsValue({
//         note: `test`,
//       });


//     };
//     onReset = () => {
//       this.formRef.current.resetFields();
//     };
//     onFill = () => {
//       this.formRef.current.setFieldsValue({
//         note: 'Hello world!',
//         gender: 'male',
//       });
//     };

//     render() {



//       return (
//         <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish} componentDidMount={this.test}>
//           <Form.Item
//             name="note"
//             label="Note"
//             rules={[
//               {
//                 required: true,
//               },
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="gender"
//             label="Gender"
//             rules={[
//               {
//                 required: true,
//               },
//             ]}
//           >
//             <Select
//               placeholder="Select a option and change input text above"
//               onChange={this.onGenderChange}
//               allowClear
//             >
//               <Option value="male">male</Option>
//               <Option value="female">female</Option>
//               <Option value="other">other</Option>
//             </Select>
//           </Form.Item>
//           <Form.Item
//             noStyle
//             shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
//           >
//             {({ getFieldValue }) => {
//               return getFieldValue('gender') === 'other' ? (
//                 <Form.Item
//                   name="customizeGender"
//                   label="Customize Gender"
//                   rules={[
//                     {
//                       required: true,
//                     },
//                   ]}
//                 >
//                   <Input />
//                 </Form.Item>
//               ) : null;
//             }}
//           </Form.Item>
//           <Form.Item {...tailLayout}>
//             <Button type="primary" htmlType="submit">
//               Submit
//           </Button>
//             <Button htmlType="button" onClick={this.onReset}>
//               Reset
//           </Button>
//             <Button type="link" htmlType="button" onClick={this.onFill}>
//               Fill form
//           </Button>

//           <Input onChange={this.test} value={this.state.price} />

//           </Form.Item>
//         </Form>
//       );
//     }
//   }








  export default App;
