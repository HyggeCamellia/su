import React, { createContext, useState } from "react";

// 创建上下文
export const GlobalModalContext = createContext<{
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

const Hq: React.FC = () => {
  // 定义状态和相关方法
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <GlobalModalContext.Provider
      value={{ isModalOpen, openModal, closeModal }}
    >
      <div>
        <button onClick={openModal}>打开模态框</button>
        {isModalOpen && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            border: '1px solid gray',
            borderRadius: '5px'
          }}>
            <p>这是一个模态框</p>
            <button onClick={closeModal}>关闭模态框</button>
          </div>
        )}
      </div>
    </GlobalModalContext.Provider>
  );
};

export default Yn;
