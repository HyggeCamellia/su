import { create } from 'zustand';

const useCounter = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}));

const Ch = () => {
  const { count, increment } = useCounter();

  return (
    <div className="p-4 border rounded-lg bg-blue-100">
      <h2 className="text-xl font-bold mb-4">快快快快快点击我！！！！</h2>
      <p className="mb-2">当前计数: {count}</p>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={increment}
      >
        增加
      </button>
    </div>
  )
}

export default Ch;

