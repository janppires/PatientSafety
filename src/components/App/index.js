import React from 'react';
import { View, Text, TabBarIOS } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { getSelectedTab } from '../../reducers/tabs';
import { setSelectedTab } from '../../actions';
import Header from '../Header';
import Footer  from '../Footer';
import TopicsScene from '../TopicsScene';
import BookmarksScene from '../BookmarksScene';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const _renderContent = (ViewComponent) => {
    return (
          <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <ViewComponent/>
            </View>
            
            <Footer/>
        </View>
       
    )
}

const App = (props) => { 
    const { selectedTab, setSelectedTab } = props;
    return (
          <TabBarIOS
            tintColor="black"
            barTintColor="#3abeff">
                <Icon.TabBarItemIOS
                title="Topics"
                iconName="format-list-bulleted-type"
                selectedIconName="format-list-bulleted-type"
                selected={selectedTab == 'topics'}
                onPress={() => setSelectedTab('topics')}>
                {_renderContent(TopicsScene)}
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                title="Bookmarks"
                iconName="bookmark-outline"
                selectedIconName="bookmark"
                selected={selectedTab == 'bookmarks'}
                onPress={() => setSelectedTab('bookmarks')}>
                {_renderContent(BookmarksScene)}
                </Icon.TabBarItemIOS>
            </TabBarIOS>
       
    )
}

function mapStateToProps (state) {
  return {
      selectedTab: getSelectedTab(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
       setSelectedTab: (tabName) => dispatch(setSelectedTab(tabName))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
