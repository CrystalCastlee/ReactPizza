import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { SearchPizzaParams } from "./slice"
import { Pizza } from "./types"

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'pizza/fetchPizzasStatus', 
    async (params) => {
      const {sortBy, order, category, search, currentPage} = params
      const {data} = await axios.get<Pizza[]>(`https://65368effbb226bb85dd253cb.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
      return data
    }
  )
  