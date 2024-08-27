import { Image, View } from "react-native";
import { NewTask } from "../components/NewTask";
import { useTasks } from "../hooks/useTasks";
import { styles } from "./styles";
import { TaskList } from "../components/TaskList";

export const Home = () => {
    const {
        handleAddNewTasks,
        handleRemoveTasks,
        handleToggleTasksDone,
        tasks,
        completedTasks,
        totalTasks
    } = useTasks();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logopng.png')} style={styles.logoImage} />
            </View>
            <NewTask addTask={handleAddNewTasks} />
            <TaskList
                removeTask={handleRemoveTasks}
                toggleTaskDone={handleToggleTasksDone}
                completedTasks={completedTasks}
                tasks={tasks}
                totalTasks={totalTasks}
            />
        </View>
    );
}