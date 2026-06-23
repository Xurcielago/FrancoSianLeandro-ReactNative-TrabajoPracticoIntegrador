import { Task } from "@/hooks/useTasks";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => onToggle(task.id)}
        activeOpacity={0.7}
      >
        <Text style={[styles.title, task.completed && styles.completed]}>
          {task.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(task.id)}
        activeOpacity={0.7}
      >
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    color: "#333",
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#999",
    fontStyle: "italic",
  },
  deleteButton: {
    backgroundColor: "#FF5252",
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
