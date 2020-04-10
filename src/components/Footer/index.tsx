import { View, Button, Text } from '@tarojs/components'
import Taro, { useState } from '@tarojs/taro'
import IconFont from '../iconfont';

import './index.scss'
const footerList = [
  {iconName: "readBook"},
  {iconName: "books"},
  {iconName: "personal"},
]
export function Footer() {
  const [count, setCount] = useState(0);
  const listItems = footerList.map(item => <IconFont name={item.iconName} size={60} key={item.iconName} color="#999"/>)
  return(<View className="footer">
    {listItems}
  </View>)
}
