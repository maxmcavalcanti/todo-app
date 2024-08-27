import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { Task } from '../../hooks/useTasks';
import { TaskComponent } from '../TaskComponent';

interface TaskListProps {
    tasks: Task[];
    completedTasks: number;
    totalTasks: number;
    removeTask: (id: number) => void;
    toggleTaskDone: (id: number) => void;
}

export const TaskList = ({ toggleTaskDone, removeTask, completedTasks, tasks, totalTasks }: TaskListProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.counterContainer}>
                    <Text style={styles.createdTasksText}>Criadas</Text>
                    <Text style={styles.counterText}>{totalTasks}</Text>
                </View>
                <View style={styles.counterContainer}>
                    <Text style={styles.completedTasksText}>Concluídas</Text>
                    <Text style={styles.counterText}>{completedTasks}</Text>
                </View>
            </View>
            {
                tasks.length > 0 ? (
                    <View>
                        {tasks.sort((a, b) => {
                            if (a.done !== b.done) {
                                return a.done ? 1 : -1;
                            }
                            return b.id - a.id;
                        }).map((task) => (
                            <TaskComponent
                                key={task.id}
                                removeTask={removeTask}
                                task={task}
                                toggleTaskDone={toggleTaskDone}
                            />
                        ))}
                    </View>
                ) : (
                    <View style={styles.noContentContainer}>
                        <Image
                            source={require('../../../assets/Clipboard.png')}
                            style={styles.noContentImage}
                        />
                        <Text style={[styles.noContentText, { fontWeight: 'bold' }]}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.noContentText}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )
            }
        </View>
    )
}