import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface FlatListHeaderProps {

  darkMode: boolean;

}

function FlatListHeaderComponent({ darkMode }: FlatListHeaderProps) {
  return (
    <View>
      <Text style={[{marginTop: 70, paddingHorizontal: 12}, !darkMode ? styles.header : styles.darkHeader]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  darkMode: boolean;
}

export function MyTasksList({ tasks, onLongPress, onPress, darkMode }: MyTasksListProps) {

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={[item.done ? styles.taskButtonDone : styles.taskButton]}
          
          >
            <View 
              style={[item.done ? styles.taskMarkerDone : styles.taskMarker, !darkMode ? styles.taskMarkerDone : styles.taskDarkMarkerDone]}
              testID={`marker-${index}`}
            />
            <Text 
              style={[item.done ? styles.taskTextDone : styles.taskText, !darkMode ? styles.taskText : styles.taskDarkText]}
            >              

              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent darkMode={darkMode}/>}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={[!darkMode ? styles.template : styles.darkTemplate]}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  darkHeader: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  template:{
    marginTop: -25,
    backgroundColor: '#FFFFFF'
  },
  darkTemplate:{
    marginTop: -25,
    backgroundColor: '#000000'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskDarkText: {
    color: '#FFFFFF',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskDarkMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#282B5A',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  darkFlatList:{
    backgroundColor: '#000000',
  },
  flatList:{
    backgroundColor: '#000000',
  }
})

