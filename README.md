# Gestor de Tareas - Trabajo Práctico Integrador

Aplicación móvil desarrollada como parte del Trabajo Práctico Integrador de la materia **Programación III - React Native**. Permite registrar, completar y eliminar tareas diarias de forma sencilla.

## Tecnologías

- [React Native](https://reactnative.dev/) con [Expo](https://expo.dev/)
- TypeScript
- Expo Go (SDK 54)

## Estructura del proyecto

- src/
- app/
- index.tsx # Pantalla principal del gestor
- components/
- TaskCard.tsx # Tarjeta individual de tarea
- TaskInput.tsx # Campo de texto y botón para agregar
- hooks/
- useTasks.ts # Lógica de estado y CRUD de tareas

## Funcionalidades

- Agregar una tarea escribiendo en el campo de texto y presionando el botón `+`.
- Validación: no se pueden agregar tareas vacías.
- Marcar una tarea como completada tocando sobre su texto (se tacha y atenúa).
- Eliminar una tarea con el botón `X`.
