import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import logo from './logo.png';
import './index.less';
@Form.create()
class Login extends Component {

  validator = (rules, value, callback) => {
    const name = rules.field === 'username' ? '用户名' : '密码'
    const reg = /^\w+$/
    if (!value) {
      callback(`${name}不能为空`)
    } else if (value.length < 4) {
      callback(`${name}必须大于4位`)
    } else if (value.length > 15) {
      callback(`${name}必须小于15`)
    } else if (!reg.test(value)) {
      callback(`${name}必须是数字，字母，下划线`)
    }
    callback()
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt="logo" />
          <h1>react 项目：后台管理系统</h1>
        </header>
        <section className="login-section">
          <h3>用户登入</h3>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: '用户名不能为空' },
                  {
                    min: 4,
                    message: '用户名必须大于3位'
                  },
                  {
                    max: 15,
                    message: '用户名必须小于15位'
                  },
                  {
                    pattern: /^\w+$/,
                    message: '用户名只能包含数字与下划线'
                  }

                ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  {
                    validator: this.validator
                  }
                ],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

export default Login