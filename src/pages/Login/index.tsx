import { Form, Row, Col, Input, Button, message } from "antd"
import { useAuth } from '../../context/AuthProvider/useAuth'
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../components/LayoutElements/Navbar";

export const Login = () => {

    const auth = useAuth();
    let location = useNavigate();

    // Chama a função mãe para realizar o login, passando os valores
    // e redireciona para a página privada
    async function onFinish (values : {email : string, password : string}) {
        try {
            await auth.authenticate(values.email, values.password)

            location('/protected');
        } catch (error) {
            message.error("Invalid e-mail or password")
        }
    }

    return (
        <div>
            <Navbar />
        <Row
            justify='center'
            align='middle'
            style={{
                height: '100vh'
            }}
        >
            <Col span={12}>
                <Form
                    name='basic'
                    labelCol={{span : 8}}
                    wrapperCol={{span : 8}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label='Email'
                        name='email'
                    >
                        <Input />
                    </Form.Item>
                    
                    <Form.Item
                        label='Password'
                        name='password'
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset : 8, span : 16}}
                    >
                        <Button
                            type='primary'
                            htmlType='submit'
                        >
                            Sign In    
                        </Button>
                    </Form.Item>

                </Form>
            </Col>
        </Row>
        </div>
    );
}