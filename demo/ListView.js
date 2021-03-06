'use strict';
import React, {
    View,
    Component,
    ListView,
    Image,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
    Alert,
    ScrollView,
    Dimensions,
    InteractionManager
} from 'react-native';


import PullRefreshScrollView from '../common/PullRefreshScrollView';




/**
 * 项目申请模块
 */
export default class Projects extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊', '有种你滑我啊']),

        }
    }
    
    onRefresh(){
        console.log('refresh');
        var self = this;
        setTimeout(function(){
            self.refs.PullRefresh.onRefreshEnd();
        },2000);
    }
    renderScrollComponent(){
        return <PullRefreshScrollView {...props}/>
    }
    render() {


        return (
            <View style={styles.container}>
                <View style={styles.header}>
                </View>

                <ListView
                    renderScrollComponent={(props) => <PullRefreshScrollView ref="PullRefresh" onRefresh={()=>this.onRefresh()} {...props} />}

                    dataSource={this.state.dataSource}
                    renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
                    renderRow={(rowData) => <View style={styles.rowItem}><Text style={{fontSize:16}}>{rowData}</Text></View>}
                />

                    
                
                
            </View>
            
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header:{
        height:64,
        backgroundColor: '#293447',
    },
    rowItem:{
        flex:1,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
      },
});
