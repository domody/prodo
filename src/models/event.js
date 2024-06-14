import { ref, set, get, update, remove, child } from "firebase/database";
import db from "../lib/firestore";
import { collection, addDoc } from "firebase/firestore";

class Event {
  constructor(title, description, startDate, endDate, priority, status, team, milestones) {
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.priority = priority;
    this.team = team;
  }

  static async createEvent(event) {
    try {
      const docRef = await addDoc(collection(db, "events"), {
        title: event.title,
        description: event.description,
        startDate: event.startDate,
        endDate: event.endDate,
        priority: event.priority,
        team: event.team,
      });
      console.log("event created successfully with ID:", docRef.id);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  }

  static async getevent(title) {
    const dbRef = ref(database);
    try {
      const snapshot = await get(child(dbRef, `events/${title}`));
      if (snapshot.exists()) {
        const data = snapshot.val();
        return new event(
          title,
          data.description,
          new Date(data.startDate),
          new Date(data.endDate),
          data.priority,
          data.team,
        );
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.error("Error fetching event:", error);
    }
  }

  static async updateEvent(title, updates) {
    try {
      const eventRef = ref(database, "events/" + title);
      await update(eventRef, updates);
      console.log("event updated successfully!");
    } catch (error) {
      console.error("Error updating event:", error);
    }
  }

  /**
   * Deletes a event from Firebase by title.
   * @param {string} title - The title of the event to delete.
   * @returns {Promise<void>}
   */
  static async deleteEvent(title) {
    try {
      const eventRef = ref(database, "events/" + title);
      await remove(eventRef);
      console.log("event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  }
}

export default event;
