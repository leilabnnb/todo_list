import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TaskItem = ({task, toggleTaskStatus}) => {
    return(
        <TouchableOpacity onPress={()=> toggleTaskStatus(task.id)}>
            <View
                style={{
                    padding: 16,
                    backgroundColor: task.completed ? '#ddd' : '#fff',
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
    );
};

export default TaskItem;