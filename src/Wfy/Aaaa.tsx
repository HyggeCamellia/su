import React, { createContext, useContext, useState } from'react';

// 定义颜色主题类型
type ColorTheme = 'light' | 'dark';

// 创建颜色主题上下文
const ColorThemeContext = createContext<{
    theme: ColorTheme;
    toggleTheme: () => void;
}>({
    theme: 'light',
    toggleTheme: () => {}
});

const Aaaa: React.FC = () => {
    // 使用 useState 来管理主题状态，初始主题为亮色
    const [theme, setTheme] = useState<ColorTheme>('light');

    // 定义切换主题的函数
    const toggleTheme = () => {
        // 根据当前主题值，切换到另一个主题
        setTheme(theme === 'light'? 'dark' : 'light');
    };

    

    return (
        <ColorThemeContext.Provider value={{ theme, toggleTheme }}>
            <h1>全局颜色主题示例</h1>
            
                <p>当前主题: {theme}</p>
                {/* 按钮点击时调用 toggleTheme 函数切换主题 */}
                <button onClick={toggleTheme}>切换主题</button>
            
        </ColorThemeContext.Provider>
    );
};

export default Aaaa;