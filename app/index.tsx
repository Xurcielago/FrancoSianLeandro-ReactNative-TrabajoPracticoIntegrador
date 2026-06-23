import { TaskCard } from "@/components/TaskCard";
import { TaskInput } from "@/components/TaskInput";
import { useTasks } from "@/hooks/useTasks";
import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { task, setTask, tasks, addTask, toggleComplete, deleteTask } =
    useTasks();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Mis Tareas</Text>

      <TaskInput value={task} onChangeText={setTask} onAdd={addTask} />

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onToggle={toggleComplete}
            onDelete={deleteTask}
          />
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay tareas por ahora.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 10,
  },
  list: {
    flex: 1,
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    marginTop: 40,
    fontSize: 16,
  },
});
