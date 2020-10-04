import React, { useState, useEffect } from 'react'
import { Card, Form, Button, Input, Checkbox, message, Upload } from 'antd'
import { createApi, getOneById, modifyApi } from '../../../service/production'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'


const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

//文件上传前先检查文件格式是否正确
function beforeUpload(file) {

    console.log("beforeUpload被执行")

    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}



class Edit extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            name: "",
            price: "",
            loading: false,
            // 创建一个空的editorState作为初始值
            editorState: BraftEditor.createEditorState(null)
        }

    }


    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }




    handleChange = info => {

        console.log("handleChange被执行")

        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    }






    componentWillMount() {

        console.log(this.props)
        //如果存在id，表明是要修改,否则就是添加
        if (this.props.location.id) {
            console.log("修改")
            getOneById(this.props.location.id).then(res => {

                console.log(res)

                this.setState({ name: res.name })
                this.setState({ price: res.price })
                this.setState({
                    editorState: BraftEditor.createEditorState(res.content)
                })

            })
        } else {
            console.log("添加")
        }

    }



    onFinish = values => {

        const htmlContent = this.state.editorState.toHTML()
        console.log("html:")
        console.log(htmlContent)
        values["content"] = htmlContent

        //修改和新增需要调用不同的接口
        if (this.props.location.id) {


            
            modifyApi(this.props.location.id, values).then(res => {
                console.log(res)
                message.success('修改成功');
                this.props.history.push('/admin/products')

            }).catch(err => {
                message.error(err.message)
            })
        } else {
            console.log("开始添加")
            console.log(values)
            
          


            createApi(values).then(res => {

                console.log(res)
                message.success('添加成功');
                this.props.history.push('/admin/products')

            }).catch(err => {
                message.error(err.message)

            })
        }
        console.log('Success:', values);
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    render() {
        const { editorState } = this.state

        const { loading, imageUrl } = this.state;

        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        )


        if (this.props.location.id) {
            //如果是修改



            //需要判断name和prise是否为空
            if (this.state.name != "" && this.state.price != "") {

                console.log("现在都不为空了")
                console.log(this.state.name + "_" + this.state.price)
                console.log(editorState)

                return (
                    <Card title="商品编辑">

                        <Form
                            name="basic"
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >

                            <Form.Item
                                label="商品名字"
                                name="name"
                                //initialValue赋予值后就无法修改了，所以需要一次性赋予值
                                initialValue={this.state.name}
                                rules={[{ required: true, message: '请输入商品名称' }]}
                            >
                                <Input />
                            </Form.Item>



                            <Form.Item
                                label="商品价格"
                                name="price"
                                initialValue={this.state.price}
                                rules={[{ required: true, message: '请输入商品价格' }]}
                            >

                                <Input />
                            </Form.Item>



                            <Form.Item
                                label="内容"
                                name="content"
                                initialValue={editorState}
                                rules={[{ required: false, message: '请输入详情' }]}
                            >

                                <div className="my-component">
                                    <BraftEditor
                                        value={editorState}
                                        onChange={this.handleEditorChange}

                                    />
                                </div>
                            </Form.Item>



                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    保存修改
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>

                )
            } else {
                return (<div>loding</div>)
            }


        } else {
            //如果是添加

            return (
                <Card title="商品编辑">

                    <Form

                        name="basic"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >

                        <Form.Item
                            label="商品名字"
                            name="name"
                            //initialValue赋予值后就无法修改了，所以需要一次性赋予值

                            rules={[{ required: true, message: '请输入商品名称' }]}
                        >
                            <Input />
                        </Form.Item>



                        <Form.Item
                            label="商品价格"
                            name="price"

                            rules={[{ required: true, message: '请输入商品价格' }]}
                        >

                            <Input />
                        </Form.Item>





                        {/* 
                        <Form.Item
                            label="图片"
                        >

                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                //action="http://localhost:3009/api/v1/common/file_upload"
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76" 
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>


                        </Form.Item> */}




                        <Form.Item
                            label="内容"
                            name="content"
                            rules={[{ required: false, message: '请输入详情' }]}
                        >

                            <div className="my-component">
                                <BraftEditor
                                    value={editorState}
                                    onChange={this.handleEditorChange}

                                />
                            </div>
                        </Form.Item>



                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                添加
                            </Button>
                        </Form.Item>

                    </Form>
                </Card>

            )
        }


    }

}


export default Edit
