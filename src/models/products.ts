type StateType = {
  name: string,
  id: string
}

export default {
  namespace: 'products',
  state: [
    {
      name: 'dba',
      id: 'dba',
    },
    {
      name: 'antd',
      id: 'antd',
    },
  ],
  reducers: {
    delete(state: StateType[], { payload: id }: any) {
      return state.filter(item => item.id !== id);
    },
  },
};
