import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uploadFileByUrl } from '../Features/file/FileSlice';
import { toast } from 'react-toastify';

const FileUpload = ({setImages}) => {
  const [url, setUrl] = useState('');
  const dispatch = useDispatch()
  const { isLoading, error, files } = useSelector((store) => store.fileUpload)

  
  const handleUpload = (e) => {
    e.preventDefault();
    console.log('johnie')
    if(!url) {
      toast.error('Please fill out all fields')
      return
    }
    dispatch(uploadFileByUrl(url))
    .then((uploadedFile) => {
      setImages([...files, uploadedFile])
    })
    .catch((error) => {
      toast.error(error.message)
    })
    setUrl('')
  }

  return (
    <div className='file-container'>
      <label htmlFor="url" className="label label-file">
          Image link:
          <input
            id="url"
            name="url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            type="text"
            className="form-input"
            placeholder="Add a link to an image"
          />
          <button 
            className='bttn'
            type="submit"
            onClick={handleUpload}
            disable={isLoading}
            >
              {isLoading ? 'Uploading...' : 'Upload photo'}
          </button>
        </label>
        {error && <p>Error: {error}</p>}
        {files.length > 0 && (
          <ul>
            {files.map((file, index) => {
                <li key={index}>{file}</li>
            })}
          </ul>
        )}
    </div>
  )
}

export default FileUpload