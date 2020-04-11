import { View, Button, Text } from '@tarojs/components'
import Taro, { useState } from '@tarojs/taro'
import IconFont from '../iconfont';

import './index.scss'
// 需要优化成为接口
const footerList = [
  {iconName: "readBook"},
  {iconName: "books"},
  {iconName: "personal"},
]
export function Footer() {
  const [count, setCount] = useState(0);
  function handleSelectMenu(item) {
    console.log(">>>>>>>>>>>>", item)
  }
  const listItems = footerList.map(item => <IconFont name={item.iconName} size={60} key={item.iconName} onClick={handleSelectMenu(item)}/>)
  return(<View className="footer">
    {listItems}
  </View>)
}
