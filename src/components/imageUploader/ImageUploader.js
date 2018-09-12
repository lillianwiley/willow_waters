import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { GridLoader } from 'react-spinners';
import {v4 as randomString} from 'uuid';

export default class ImageUploader extends Component {
    constructor() {
        super();

        this.state = {
            isUploading: false,
            images: [],
            url: '',
            value: ''
        }
    }

    getSignedRequest = ([file]) => {
        this.setState({ isUploading: true })

        const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`

        axios.get('/api/sign-s3', {
            params: {
                'file-name': fileName,
                'file-type': file.type
            }
        }).then((response) => {
            console.log(response.data)
            const { signedRequest, url } = response.data
            this.uploadFile(file, signedRequest, url)
        }).catch(err => {
            console.log(err)
        })
    }

    uploadFile = (file, signedRequest, url) => {
    
        var options = {
          headers: {
            'Content-Type': file.type
          }
        };
    
        axios.put(signedRequest, file, options)
        .then( response => {
          this.setState({isUploading: false, url: url})
          // THEN DO SOMETHING WITH THE URL. SEND TO DB USING POST REQUEST OR SOMETHING
        })
        .catch( err => {
            console.log(err)
          this.setState({
            isUploading: false
          })
          if(err.response.status === 403) {
            alert('Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n' + err.stack)
          } else {
            alert(`ERROR: ${err.status}\n ${err.stack}`)
          }
        })
      }

      // on admin page to add new products //
    //   saveNewProduct() {
    //       let body = {
    //           title: 'flower thing',
    //           price: 100,
    //           description: 'Its really cool!',
    //           image_url: this.state.url
    //       }
          
    //       axios.post( '/api/saveProduct', body )
    //         .then( res => {/* do stuff */} )
    //   }
    


    render() {
        return (
            <div>
                
                <img src='' alt=""/>

                <Dropzone
                    onDropAccepted={this.getSignedRequest}
                    style={{
                        position: 'relative',
                        width: 200,
                        height: 200,
                        borderWidth: 7,
                        marginTop: 400,
                        borderColor: 'rgb(102, 102, 102)',
                        borderStyle: 'dashed',
                        borderRadius: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: 28,
                    }}
                    accept='image/*'
                    multiple={false} >

                    { this.state.isUploading 
        ?  <GridLoader />
        : <p>Drop File or Click Here</p>
    }
                </Dropzone>

            </div>
        )
    }
}
