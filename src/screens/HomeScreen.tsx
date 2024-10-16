import React, {useContext} from 'react';
import { View, Text, Button, FlatList} from 'react-native';
import { ToDoContext } from '../contexts/ToDoContext';
import TaskItem from '../components/TaskItem';
import {styles} from '../styles/HomeScreenStyles';


const HomeScreen = ({navigation}) => {

    const {tasks, setTasks} = useContext(ToDoContext);

    const toggleTaskStatus = (taskId) => {
        const updatedTasks = tasks.map((task)=> task.id === taskId ? {...task, completed: !task.completed} : task);
        setTasks(updatedTasks);
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const removeAllTasks = () =>{
        setTasks([]);
    };

    return (
        <View style = {styles.container}>
            <Button title="Ajouter une nouvelle tâche" onPress={() => navigation.navigate('Add')}/>
            <Button title="Supprimer toutes les tâches" onPress={removeAllTasks}/>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>
                    <TaskItem task={item} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask}/>
                }
            />
        </View>
    );
};
export default HomeScreen;
