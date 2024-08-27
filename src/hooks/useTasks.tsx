import { useMemo, useState } from "react";
import { Alert } from "react-native";

export interface Task {
    id: number;
    title: string;
    done: boolean;
}
export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const totalTasks = useMemo(() => { return tasks.length; }, [tasks])
    const completedTasks = useMemo(() => { return tasks.filter(tasks => tasks.done).length; }, [tasks])


    const handleAddNewTasks = (tasks: string) => {
        if (tasks === '') {
            Alert.alert('Escreva uma tarefa para adicionar');
        }
        const newtasks = {
            id: new Date().getTime(),
            title: tasks,
            done: false,
        }
        setTasks(oldState => [...oldState, newtasks]);
    }
    const handleToggleTasksDone = (id: number) => {
        const updatedtaskss = tasks.map(tasks => tasks.id === id ? {
            ...tasks,
            done: !tasks.done
        } : tasks);
        setTasks(updatedtaskss);
    }
    const handleRemoveTasks = (id: number) => {

        Alert.alert(
            'Remover tarefa',
            'Tem certeza que deseja remover essa tarefa?',
            [
                {
                    text: 'Não',
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => {
                        setTasks(prevtaskss => prevtaskss.filter(tasks => tasks.id !== id));
                    }
                }
            ]
        )
    }

    return {
        tasks,
        handleAddNewTasks,
        handleToggleTasksDone,
        handleRemoveTasks,
        completedTasks,
        totalTasks
    }
}