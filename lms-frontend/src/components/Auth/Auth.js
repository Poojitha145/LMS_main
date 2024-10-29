import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message, Select } from 'antd';
import { loginUser, registerUser } from '../services/apiService';
import '../../App.css';

const { Option } = Select;

const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { username, password, role } = values;
    if (isRegistering) {
      try {
        await registerUser({ username, password, role });
        message.success('Registration successful! You can now log in.');
        setIsRegistering(false);
      } catch (error) {
        message.error('Registration failed. Try again!');
      }
    } else {
      try {
        const response = await loginUser({ username, password });
        message.success('Login successful!');
        localStorage.setItem('loggedInUser', username);
        navigate(response.data === "Teacher login successful" ? '/teacher-dashboard' : '/student-dashboard');
      } catch (error) {
        message.error('Invalid username or password!');
      }
    }
  };

  return (
    <div className="auth-container">
      <h1>Learning Management System</h1>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <Form onFinish={handleSubmit} layout="vertical">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        {isRegistering && (
          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: 'Please select your role!' }]}
          >
            <Select placeholder="Select your role">
              <Option value="teacher">Teacher</Option>
              <Option value="student">Student</Option>
            </Select>
          </Form.Item>
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {isRegistering ? 'Register' : 'Login'}
          </Button>
        </Form.Item>
      </Form>
      <div>
        <a onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Already have an account? Login' : 'Create an account'}
        </a>
      </div>
    </div>
  );
};

export default Auth;
