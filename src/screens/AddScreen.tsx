import React, {useState, useContext} from 'react';
import { View, TextInput, Button } from 'react-native';
import { ToDoContext } from '../contexts/ToDoContext';


const AddScreen = ({navigation}) => {
    const [taskTitle, setTaskTitle] = useState('');
    const {setTasks, tasks} = useContext(ToDoContext);

    const addTask = () =>{
        if(taskTitle.trim === ''){
            return;
        }
        setTasks([
            ...tasks,
             {id: Date.now(), title: taskTitle, completed: false},
        ]);

        navigation.goBack();
    };


    return (
        <View style={{ padding: 16}}>
          <TextInput
            placeholder= "Entrez le titre de la tâche"
            value={taskTitle}
            onChangeText={setTaskTitle}
            style={{ borderBottomWidth: 1, marginBottom: 16}}
          />
          <Button title="Ajouter la tâche" onPress={addTask}/>
        </View>
      );
};

export default AddScreen;