import React, {useContext} from 'react';
import { View, Text,FlatList, SectionList} from 'react-native';
import { ToDoContext } from '../contexts/ToDoContext';
import TaskItem from '../components/TaskItem';
import MyButton from '../components/MyButton';
import {styles} from '../styles/Styles';


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

    const inProgressTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    const sections = [];

      if (inProgressTasks.length > 0) {
        sections.push({
          title: 'En cours',
          data: inProgressTasks,
        });
      }

      if (completedTasks.length > 0) {
        sections.push({
          title: 'Finalisées',
          data: completedTasks,
        });
      }

    return (
        <View style = {styles.container}>
            <MyButton title="Ajouter une nouvelle tâche"  onPress={() => navigation.navigate('Add')}/>
            <MyButton title="Supprimer toutes les tâches" onPress={removeAllTasks}/>
            <SectionList
                      sections={sections}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({ item }) => (
                        <TaskItem
                          task={item}
                          toggleTaskStatus={toggleTaskStatus}
                          deleteTask={deleteTask}
                        />
                      )}
                      renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.sectionTitle}>{title}</Text>
                      )}
                      contentContainerStyle={styles.taskListContainer}
            />
        </View>
    );
};
export default HomeScreen;
