import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

const TaskItem = ({task, toggleTaskStatus, deleteTask}) => {
    const renderRightActions = () => (
        <TouchableOpacity onPress={()=> deleteTask(task.id)}>
            <View
                style={{
                    backgroundColor: '#a38d84',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    padding: 20,
                    borderRadius: 4,
                }}
            >
                <Text style={{color: 'white', fontWeight: 'bold'}}>Supprimer</Text>
            </View>
        </TouchableOpacity>
    );
    return(
        <Swipeable renderRightActions = {renderRightActions}>
            <TouchableOpacity onPress={()=> toggleTaskStatus(task.id)}>
                <View
                    style={{
                        padding: 16,
                        backgroundColor: task.completed ? '#d4bab0' : '#fff',
                        marginVertical: 4,
                        borderRadius: 4,
                    }}
                >
                    <Text
                        style={{
                            textDecorationLine: task.completed ? 'line-through' : 'none',
                            fontSize: 16,
                        }}
                    >
                        {task.title}
                    </Text>
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
};

export default TaskItem;