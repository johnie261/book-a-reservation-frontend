import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

export const uploadFileByUrl = createAsyncThunk(
    'fileUpload/uploadFileByUrl',
    async(url) => {
        try {
           const response = await axios.get(url, {responseType: 'blob'});
           const formData = new FormData();
           formData.append('file', response.data)
           await axios.post('/upload', formData);
           return url
        } catch (error) {
            throw new Error(error.message)
        }
    }
)

const initialState ={
    isLoading: false,
    error: null,
    files: []
}

const fileUploadSlice = createSlice({
    name :' fileUPload',
    initialState,
    reducers: {
        addUploadedFile: (state, action) => {
            state.files.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(uploadFileByUrl.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(uploadFileByUrl.fulfilled, (state , { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.files.push(payload)
        })
        .addCase(uploadFileByUrl.rejected, (state , action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export const {addUploadedFile} = fileUploadSlice.actions

export default fileUploadSlice.reducer;