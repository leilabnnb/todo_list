import React, {createContext, useState, useEffect} from 'react';
import * as SecureStore from 'expo-secure-store';

export const ToDoContext = createContext();

export const ToDoProvider = ({children}) => {
    const [tasks, setTasksState] = useState([]);

    // charge les taches sauvegardées dans secure store
    useEffect(() => {
        const loadTasks = async () => {
            const tasks = await SecureStore.getItemAsync('tasks');
            if (tasks) {
                setTasksState(JSON.parse(tasks));
            }
        };
        loadTasks();
    }, []);

    // sauvegarde les modifications dans secure store
    useEffect(() => {
        const saveTasks = async () => {
            await SecureStore.setItemAsync('tasks', JSON.stringify(tasks));
        };
        saveTasks();
    }, [tasks]);

    const setTasks = (tasks) => {
        setTasksState(tasks);
    };

    return (
        <ToDoContext.Provider value={{tasks, setTasks}}>
            {children}
        </ToDoContext.Provider>
    );
}