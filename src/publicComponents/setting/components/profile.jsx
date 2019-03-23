import React, { Component } from "react";
import { connect } from "react-redux";
import { Slider, Upload, Icon, message, Col } from 'antd';
import AvatarEditor from 'react-avatar-editor';
import { Button } from 'react-bootstrap';
import Divider from '@material-ui/core/Divider';
import { actionCreators } from '../store';
import {withRouter} from 'react-router-dom';

import '../setting.css';

class Profile extends Component {

    state = {
        file: null,
        scale: 1 
    };
    
    handleUpload = (file) => {
        this.setState({ file: file });
    }

    onChange = (value) => {
        this.setState({ scale: value });
    }

    onClickSave = () => {
        if (this.editor) {
            // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
            // drawn on another canvas, or added to the DOM.
            const canvas = this.editor.getImage().toDataURL();
            let blob = this.dataURItoBlob(canvas);
            this.props.handleOnClickSave(blob);    
        }
    }

    dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);
      
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
      
        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);
      
        // create a view into the buffer
        var ia = new Uint8Array(ab);
      
        // set the bytes of the buffer to the correct values
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
      
        // write the ArrayBuffer to a blob, and you're done
        var blob = new Blob([ab], {type: mimeString});
        console.log(blob);
        return blob;
    }

    onClickSave = () => {
        if (this.editor) {
            // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
            // drawn on another canvas, or added to the DOM.
            const canvas = this.editor.getImage().toDataURL();
            let blob = this.dataURItoBlob(canvas);
            this.props.handleUploadImage(blob);

            message.info("Success to update profile ");
            this.props.history.push("/setting");
        }
    }
    
    setEditorRef = (editor) => this.editor = editor;  

    render() {
        const { file, scale } = this.state;

        const uploadButton = (
            <div>
                <Icon type='plus' />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <div>
                <h4 style={{ marginBottom: '5%' }}>Update Profile</h4>
                <Divider style={{ width: '150%', marginBottom: '5%' }} />
                <div className="clearfix">
                    <Upload
                        listType="picture-card"
                        showUploadList={false}
                        action={this.handleUpload}
                    >
                        {uploadButton}
                    </Upload>
                </div>
                <AvatarEditor
                    ref={this.setEditorRef}
                    image={file}
                    width={200}
                    height={200}
                    border={50}
                    borderRadius={100}
                    color={[255, 255, 255, 0.4]} // RGBA
                    scale={scale}
                    rotate={0}
                />
                <Col span={12}>
                    <Slider
                        min={1}
                        max={2}
                        step={0.1}
                        onChange={this.onChange}
                    />
                </Col>
                <Button variant="outline-primary" onClick={this.onClickSave}>Save</Button>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleUploadImage(blob){
            dispatch(actionCreators.handleUploadAction(blob));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Profile));
