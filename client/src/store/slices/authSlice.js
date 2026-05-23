const {createSlice} = require('@reduxjs/toolkit');

export const getUser = ()=>{}

const authSlice = createSlice({
    name:'auth',
    initialState:{
        authUser : null,
        isSigningUp : false,
        isLoggingIn : false,
        isUpdatingProfile : false,
        isCheckingAuth : true,
        onlineUsers : []
    },
    reducers : {
        setOnlineUsers(state,action){
            state.onlineUsers = action.payload;
        }
    },
    extraReducers : (builder) =>{
        builder.addCase(getUser.fulfilled,(state,action)=>{
             state.authUser = action.payload;
             state.isCheckingAuth = false;
        })
        builder.addCase(getUser.rejected,(state,action)=>{
             state.authUser = null;
             state.isCheckingAuth = false;
        })
    }
})