import React from'react';
import useGlobalStore from './globalStore';

function App() {
  const { isLoggedIn, login, logout } = useGlobalStore();

  return (
    <div>
      <h1>全局登录状态示例</h1>
      {isLoggedIn? (
        <div>
          <p>你已登录</p>
          <button onClick={logout}>登出</button>
        </div>
      ) : (
        <div>
          <p>你未登录</p>
          <button onClick={login}>登录</button>
        </div>
      )}
    </div>
  );
}

export default App;
