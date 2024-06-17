import { ref, set, get, remove, child } from "firebase/database";
import db from "../lib/firestore";
import { collection, updateDoc, doc, addDoc } from "firebase/firestore";

class Task {
  constructor(title, description, dueDate, priority, status, team, milestones) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.team = team;
    this.milestones = milestones;
    this.current_milestone = 0;
  }

  static async createTask(task) {
    try {
      const docRef = await addDoc(collection(db, "tasks"), {
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        priority: task.priority,
        status: task.status,
        team: task.team,
        milestones: task.milestones,
        current_milestone: 0,
        completed: false,
      });
      console.log("Task created successfully with ID:", docRef.id);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  }

  static async getTask(title) {
    const dbRef = ref(database);
    try {
      const snapshot = await get(child(dbRef, `tasks/${title}`));
      if (snapshot.exists()) {
        const data = snapshot.val();
        return new Task(
          title,
          data.description,
          new Date(data.dueDate),
          data.priority,
          data.status,
          data.team,
          data.milestones,
          data.completed,
        );
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  }

  static async updateTask(id, updates) {
    try {
      const taskRef = doc(db, "tasks", id);
      await updateDoc(taskRef, {
        title: updates.title,
        description: updates.description,
        dueDate: updates.dueDate,
        priority: updates.priority,
        status: updates.status,
        team: updates.team,
        milestones: updates.milestones,
        current_milestone: updates.current_milestone,
      });
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }

  /**
   * Deletes a task from Firebase by title.
   * @param {string} title - The title of the task to delete.
   * @returns {Promise<void>}
   */
  static async deleteTask(title) {
    try {
      const taskRef = ref(database, "tasks/" + title);
      await remove(taskRef);
      console.log("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }
}

export default Task;
