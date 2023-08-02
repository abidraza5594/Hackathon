import {createSlice,configureStore} from "@reduxjs/toolkit"
import {CartData} from "../Components/Cart/CartData"

const HakathondataSlice=createSlice({
    name:"addhakathon",
    initialState:{HackathonData:[...CartData],SortType:'newest',SearchData:[],FavorietHack:[]},
    reducers:{
        AddHakathon(state,action){
            state.HackathonData.push(action.payload)
        },
        SortCart  (state,action) {
            if (action.payload === "newest") {
              state.HackathonData = state.HackathonData.sort((a, b) => new Date(a.hackathonStartDate) - new Date(b.hackathonStartDate));
            } else {
              state.HackathonData = state.HackathonData.sort((a, b) => new Date(b.hackathonStartDate) - new Date(a.hackathonStartDate));
            }
          },
        SearchData(state,action){
          let a=[]
          const filteredData = state.HackathonData.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()));
          a.push(filteredData)
          state.SearchData=a
        },
        FavorietHack(state,action){
          let a=[]
          a.push(action.payload)
          state.FavorietHack=[...a]
        },
        DeleteHack(state,action){
          const deletefromstore=state.HackathonData.filter(item=>item.id !=action.payload)
          state.HackathonData=deletefromstore
        },
        
    }
})
export const HakathonActions=HakathondataSlice.actions

const store=configureStore({reducer:HakathondataSlice.reducer})
export default store