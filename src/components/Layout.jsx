import { View, Text } from 'react-native'

const Layout = ({children}) => {
  return (
    <View style={{ paddingRight: 10 , paddingLeft: 10}}>
              {children}
    </View>
  )
}

export default Layout