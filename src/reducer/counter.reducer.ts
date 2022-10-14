import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle'
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // For ordinary function just change the state immediately
    increment: (state: CounterState) => {
      state.value += 1;
    },
    decrement: (state: CounterState) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    incrementAsync: (state: CounterState, _: PayloadAction<number>) => {
      state.status = 'loading'
    },
    incrementAsyncSuccess: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload
      state.status = 'idle'
    },
    incrementAsyncFailed: (state: CounterState) => {
      state.status = 'failed'
    }
  }
})

export const { increment, decrement, incrementByAmount, incrementAsync, incrementAsyncFailed, incrementAsyncSuccess } = counterSlice.actions;

export default counterSlice.reducer;
