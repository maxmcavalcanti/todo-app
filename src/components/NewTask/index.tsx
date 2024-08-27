import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useState } from "react";
import { styles } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';

interface NewTaskProps {
    addTask: (task: string) => void;
}

export const NewTask = ({ addTask }: NewTaskProps) => {
    const [task, setTask] = useState<string>('');
    return (
        <View style={styles.form}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={task}
                    placeholderTextColor={'#808080'}
                    placeholder="Adicione uma nova tarefa"
                    onChangeText={setTask}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        addTask(task)
                        setTask('')
                        Keyboard.dismiss()
                    }}
                >
                    <Text style={styles.buttonText}>
                        <AntDesign name="pluscircleo" size={18} color="white" />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}