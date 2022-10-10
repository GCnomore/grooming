import { createAsyncThunk } from "@reduxjs/toolkit";

import tryCatch from "../../util/tryCatch";
import * as API from "../api/api";

export const getStore = createAsyncThunk(
  "store/getStore",
  async (storeId: string) => {
    const [error, res] = await tryCatch(API.fetchStore, storeId);
    if (error) {
      console.log(error);
    } else {
      return res.data.client;
    }
  }
);
