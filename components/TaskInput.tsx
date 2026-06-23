import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

interface TaskInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onAdd: () => void;
}

export function TaskInput({ value, onChangeText, onAdd }: TaskInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="¿Qué necesitás hacer?"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onAdd}
        returnKeyType="done"
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={onAdd}
        activeOpacity={0.8}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#4A90E2",
    borderRadius: 8,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
});
