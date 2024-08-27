import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Task } from "../../hooks/useTasks";
import { Feather } from "@expo/vector-icons"; // Ensure Feather icons are imported
import { FontAwesome } from "@expo/vector-icons"; // Import the Icon component if you're using FontAwesome
import { styles } from "./styles";

interface TaskProps {
    task: Task;
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
}

export const TaskComponent = ({ task, toggleTaskDone, removeTask }: TaskProps) => {
    return (
        <View style={styles.taskButton}>
            <TouchableOpacity
                testID={`button-${task.id}`}
                activeOpacity={0.7}
                style={task.done ? styles.taskMarkerDone : styles.taskMarker}
                onPress={() => toggleTaskDone(task.id)}
            >
                {task.done && (
                    <FontAwesome name="check" size={12} color="#FFF" />
                )}
            </TouchableOpacity>
            <Text style={task.done ? styles.taskTextDone : styles.taskText}>
                {task.title}
            </Text>
            <TouchableOpacity
                testID={`trash-${task.id}`}
                style={{ paddingHorizontal: 24 }}
                onPress={() => removeTask(task.id)}
            >
                <Feather
                    name="trash-2"
                    size={16}
                    color="#b2b2b2"
                />
            </TouchableOpacity>
        </View>
    );
};
